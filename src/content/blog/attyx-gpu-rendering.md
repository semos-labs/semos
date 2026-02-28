---
title: "How Attyx Renders Every Frame on the GPU"
description: "A deep dive into Attyx's GPU rendering pipeline — Metal on macOS, OpenGL on Linux, glyph atlases, shaders, dirty tracking, and the seqlock that holds it all together."
date: 2026-03-01
tags: ["attyx", "gpu", "rendering", "zig", "internals"]
---

My [last post](/blog/building-attyx) covered the architecture of Attyx — the pure-Zig terminal core, the two-thread model, damage tracking, all of it. But I glossed over the actual GPU rendering. "Metal on macOS, OpenGL on Linux" and moved on. That's not good enough.

This post is the deep dive. How cells become triangles. How glyphs get rasterized into a texture atlas. How the shaders work. What's shared between platforms and what's not. Real code, real details.

## The Rendering Model

Let me start with a mental model. A terminal is a grid of cells. Each cell has a character, a foreground color, and a background color. Some cells have decorations — bold, italic, underline, strikethrough. Some have hyperlinks. Some are selected. But at the end of the day, it's a grid.

GPU rendering turns that grid into textured quads. Each cell becomes two triangles for the background and two more for the glyph. The GPU draws them all in parallel. 10,000 cells? Same cost as 100. That's the whole point.

Here's the pipeline:

```
PTY thread (Zig)
  → parse bytes, update grid, mark dirty rows
  → write cells to shared buffer (seqlock)

Render thread (C / Objective-C)
  → read cells from shared buffer (seqlock)
  → check dirty bits
  → build vertex buffers from cells
  → upload to GPU
  → draw
```

Two threads. No mutexes. Let's walk through each piece.

## The Bridge

The Zig core and the platform renderers speak through a shared C struct. This is the fundamental unit of rendering — one `AttyxCell` per grid position:

```c
typedef struct {
    uint32_t character;
    uint32_t combining[2];
    uint8_t fg_r, fg_g, fg_b;
    uint8_t bg_r, bg_g, bg_b;
    uint8_t flags;       // bold, underline, default-bg, dim, italic, strikethrough
    uint32_t link_id;
} AttyxCell;
```

Character is a Unicode codepoint. Two combining mark slots (enough for most real-world text — accented characters, emoji modifiers). Colors are pre-resolved RGB. Flags are packed into a single byte. Link ID maps to the engine's hyperlink table.

The Zig side resolves all the color logic *before* writing to this buffer. By the time the renderer sees it, there's no "default color" or "ANSI color 12" — just RGB bytes. The renderer doesn't need to know about terminal color semantics at all.

## Color Resolution

This happens on the Zig side before anything touches the GPU. The terminal core works with abstract colors — default, ANSI 16, 256-palette, and true RGB. The renderer needs concrete RGB values. So we resolve:

```zig
pub fn resolve(color: Color, is_bg: bool) Rgb {
    return switch (color) {
        .default => if (is_bg) default_bg else default_fg,
        .ansi => |n| ansi16[n],
        .palette => |n| paletteRgb(n),
        .rgb => |c| .{ .r = c.r, .g = c.g, .b = c.b },
    };
}
```

The 256-color palette is the classic xterm scheme — 16 ANSI colors, then a 6×6×6 RGB cube, then 24 shades of gray:

```zig
fn paletteRgb(n: u8) Rgb {
    if (n < 16) return ansi16[n];
    if (n < 232) {
        const idx = n - 16;
        return .{
            .r = cubeComponent(idx / 36),
            .g = cubeComponent((idx / 6) % 6),
            .b = cubeComponent(idx % 6),
        };
    }
    const g: u8 = @intCast(@as(u16, 8) + @as(u16, n - 232) * 10);
    return .{ .r = g, .g = g, .b = g };
}
```

This means the C/Objective-C renderers are blissfully ignorant of terminal color modes. They just read three bytes per color and go.

## The Seqlock

Two threads share a cell buffer. No mutexes. Instead — a seqlock. It's beautifully simple.

The PTY thread bumps a generation counter before and after writing:

```c
void attyx_begin_cell_update(void) {
    __sync_fetch_and_add(&g_cell_gen, 1);
}

void attyx_end_cell_update(void) {
    __sync_fetch_and_add(&g_cell_gen, 1);
}
```

The renderer checks the counter on both sides of its read:

```c
uint64_t gen1 = g_cell_gen;
if (gen1 & 1) return;  // Write in progress — odd means mid-update

// ... snapshot cells, build vertices, render ...

uint64_t gen2 = g_cell_gen;
if (gen1 != gen2) {
    // Torn read. Restore dirty bits, try next frame.
    for (int i = 0; i < 4; i++)
        __sync_fetch_and_or((volatile uint64_t*)&g_dirty[i], dirty[i]);
    return;
}
```

If the generation is odd, the PTY thread is mid-write. Skip the frame. If it changed between read start and end, we got torn data. Restore the dirty bits so nothing is lost, skip this frame, try again next vsync.

No contention. No blocking. The renderer never waits. The PTY thread never waits. Worst case you drop a frame — at 120fps nobody notices.

## Dirty Tracking

Most frames only change a few rows. Redrawing 10,000 cells when only row 24 changed is wasteful.

Attyx tracks dirty rows with a 256-bit bitset — four `u64`s:

```zig
pub const DirtyRows = struct {
    bits: [4]u64 = .{ 0, 0, 0, 0 },

    pub fn mark(self: *DirtyRows, row: usize) void {
        self.bits[row >> 6] |= @as(u64, 1) << @intCast(row & 63);
    }

    pub fn isDirty(self: *const DirtyRows, row: usize) bool {
        return (self.bits[row >> 6] & (@as(u64, 1) << @intCast(row & 63))) != 0;
    }

    pub fn any(self: *const DirtyRows) bool {
        return (self.bits[0] | self.bits[1] | self.bits[2] | self.bits[3]) != 0;
    }
};
```

The state machine marks rows dirty as it processes VT sequences. The renderer atomically swaps the dirty bits out — reads them and clears in one operation:

```c
uint64_t dirty[4];
for (int i = 0; i < 4; i++)
    dirty[i] = __sync_lock_test_and_set((volatile uint64_t*)&g_dirty[i], 0);
```

Then it only rebuilds vertices for dirty rows:

```c
for (int row = 0; row < visibleRows; row++) {
    if (!_fullRedrawNeeded && !dirtyBitTest(dirty, row)) continue;
    // ... build vertices for this row
}
```

Static prompt with a blinking cursor? You're rebuilding maybe one or two rows per frame. `cat`-ing a huge file? Everything's dirty, full rebuild — but the GPU handles it effortlessly.

## The Vertex

Both platforms use the exact same vertex layout:

```c
typedef struct __attribute__((packed)) {
    float px, py;       // pixel position
    float u, v;         // texture coordinates
    float r, g, b, a;   // color + alpha
} Vertex;
```

32 bytes per vertex. Six vertices per quad (two triangles). That's 192 bytes per cell. A 200×50 terminal is about 1.8MB of vertex data. Fits comfortably in a single GPU buffer.

Position is in pixel coordinates. The vertex shader transforms to normalized device coordinates. Texture coords map into the glyph atlas. Color is straightforward RGBA.

## The Glyph Atlas

This is the interesting part. You can't send Unicode codepoints to the GPU and say "draw this." The GPU doesn't know what the letter "A" looks like. You need to rasterize glyphs into a texture, then map quads to the right region of that texture.

Attyx uses a dynamic glyph atlas — glyphs are rasterized on demand the first time they appear, then cached in a GPU texture. The atlas is a grid of fixed-size slots, one per glyph:

```
┌───┬───┬───┬───┬───┬───┬───┬───┐
│ A │ B │ C │ D │ E │ F │ G │ H │
├───┼───┼───┼───┼───┼───┼───┼───┤
│ i │ j │ k │ l │ m │ n │ o │ p │
├───┼───┼───┼───┼───┼───┼───┼───┤
│   │   │   │   │   │   │   │   │  ← empty slots
└───┴───┴───┴───┴───┴───┴───┴───┘
```

Each slot is `glyph_w × glyph_h` pixels — the exact size of a terminal cell at the current font size. When a new codepoint appears, we rasterize it into the next available slot and record the mapping.

Lookup is a hash table with linear probing:

```c
int glyphCacheLookup(GlyphCache* gc, uint32_t cp) {
    uint32_t idx = (cp * 2654435761u) % GLYPH_CACHE_CAP;
    for (int probe = 0; probe < GLYPH_CACHE_CAP; probe++) {
        uint32_t i = (idx + probe) % GLYPH_CACHE_CAP;
        if (gc->map[i].slot < 0) return -1;
        if (gc->map[i].codepoint == cp) return gc->map[i].slot;
    }
    return -1;
}
```

That magic constant `2654435761` is Knuth's multiplicative hash. Spreads codepoints nicely across the table. 4,096 slots in the hash map. Enough for any realistic terminal session.

But here's the thing — the atlas has two textures. One for regular glyphs (grayscale, single-channel) and one for color emoji (RGBA). The slot value encodes which texture the glyph lives in using bit flags:

```c
int isColor = (rawSlot & GLYPH_COLOR_BIT) ? 1 : 0;  // bit 29
int wide    = (rawSlot & GLYPH_WIDE_BIT)  ? 1 : 0;   // bit 30
int slot    = rawSlot & ~(GLYPH_WIDE_BIT | GLYPH_COLOR_BIT);
```

Wide characters (CJK, some emoji) get a double-width slot in the atlas and a wider quad on screen. Color emoji go to the RGBA texture and use a different fragment shader. Regular ASCII text stays in the grayscale texture.

When the atlas runs out of slots, it doubles in height and reallocates the texture. Doesn't happen often — most sessions never fill the initial allocation.

### macOS: Core Text

On macOS, glyph rasterization uses Core Text — Apple's native text rendering engine:

```objc
// GlyphCache on macOS
typedef struct {
    id<MTLTexture> texture;        // R8Unorm  — grayscale
    id<MTLTexture> color_texture;  // BGRA8Unorm — color emoji
    CTFontRef      font;
    float          glyph_w, glyph_h;
    float          scale;          // Retina backing scale
    CGFloat        descent;
    float          baseline_y;
    int            atlas_cols;
    int            atlas_w, atlas_h;
    int            next_slot;
    int            max_slots;
    id<MTLDevice>  device;
    GlyphEntry     map[4096];
} GlyphCache;
```

Core Text renders into a Core Graphics bitmap context, then the pixels are uploaded to a Metal texture. For grayscale glyphs, it's a single-channel R8 texture. For color emoji, BGRA8 — Metal auto-swizzles premultiplied BGRA to RGBA.

DPI scaling is handled via `backingScaleFactor`. On a Retina display, the atlas renders at 2× and the Metal view's drawable size accounts for it. Glyphs look sharp without any extra work.

### Linux: FreeType

On Linux, FreeType does the rasterization:

```c
// GlyphCache on Linux
typedef struct {
    GLuint     texture;         // GL_R8 — grayscale
    GLuint     color_texture;   // GL_RGBA8 — color emoji
    FT_Library ft_lib;
    FT_Face    ft_face;
    float      glyph_w, glyph_h;
    float      scale;
    float      ascender;
    float      baseline_y_offset;
    int        atlas_cols;
    int        atlas_w, atlas_h;
    int        next_slot;
    int        max_slots;
    GlyphEntry map[4096];
} GlyphCache;
```

FreeType renders each codepoint into a bitmap. That bitmap gets uploaded to an OpenGL `GL_R8` texture. Font discovery is via Fontconfig — query the system for a monospace family, get a path, load it with FreeType.

Same atlas structure. Same hash table. Same slot-packing with wide/color bits. The rendering API is different, the data flow is identical.

## The Shaders

Three fragment shaders. One vertex shader. Both platforms implement the same logic — Metal Shading Language on macOS, GLSL 3.3 on Linux.

### The Vertex Shader

Both platforms do the same coordinate transform. Pixel positions go in, normalized device coordinates come out:

**Metal:**
```metal
vertex VertexOut vert_main(
    const device Vertex* vertices [[buffer(0)]],
    constant float2& viewport [[buffer(1)]],
    uint vid [[vertex_id]])
{
    VertexOut out;
    float2 pos = vertices[vid].position / viewport * 2.0 - 1.0;
    pos.y = -pos.y;
    out.position = float4(pos, 0.0, 1.0);
    out.texcoord = vertices[vid].texcoord;
    out.color = vertices[vid].color;
    return out;
}
```

**GLSL:**
```glsl
#version 330 core
layout(location = 0) in vec2 aPos;
layout(location = 1) in vec2 aTexCoord;
layout(location = 2) in vec4 aColor;
uniform vec2 viewport;
out vec2 vTexCoord;
out vec4 vColor;

void main() {
    vec2 pos = aPos / viewport * 2.0 - 1.0;
    pos.y = -pos.y;
    gl_Position = vec4(pos, 0.0, 1.0);
    vTexCoord = aTexCoord;
    vColor = aColor;
}
```

Same math. `position / viewport * 2.0 - 1.0` maps pixel coords to [-1, 1]. Y is flipped because GPU coordinates go up, but terminal rows go down.

### Fragment Shader: Solid Backgrounds

The simplest shader. Just pass through the vertex color:

```metal
fragment float4 frag_solid(VertexOut in [[stage_in]]) {
    return in.color;
}
```

Used for cell backgrounds, cursor, selection highlights, search matches. No texture lookup needed.

### Fragment Shader: Grayscale Text

This is where the glyph atlas earns its keep. Sample the grayscale texture, use it as alpha:

```metal
fragment float4 frag_text(
    VertexOut in [[stage_in]],
    texture2d<float> tex [[texture(0)]])
{
    constexpr sampler s(filter::nearest);
    float a = tex.sample(s, in.texcoord).r;
    return float4(in.color.rgb, in.color.a * a);
}
```

The atlas stores glyph coverage in the red channel. White pixels are "glyph here," black pixels are "nothing here." The fragment shader takes the vertex color (foreground color of the cell) and multiplies its alpha by the coverage value. Result: colored text with proper antialiasing, composited over whatever background is behind it.

Nearest-neighbor sampling. No filtering. Terminal glyphs should be pixel-crisp, not blurry.

### Fragment Shader: Color Emoji

Emoji are pre-rendered in full RGBA. Different math:

```metal
fragment float4 frag_color_text(
    VertexOut in [[stage_in]],
    texture2d<float> tex [[texture(0)]])
{
    constexpr sampler s(filter::nearest);
    float4 c = tex.sample(s, in.texcoord);
    return float4(c.rgb * in.color.a, c.a * in.color.a);
}
```

The texture already has the final color. We just scale by vertex alpha — that handles window transparency. The `c.rgb * in.color.a` is premultiplied alpha blending. Without it, emoji would look wrong over transparent backgrounds.

## Building the Frame

Here's where it all comes together. Every vsync (or whenever the display requests a frame), the renderer does this:

**1. Read dirty bits atomically**
```c
uint64_t dirty[4];
for (int i = 0; i < 4; i++)
    dirty[i] = __sync_lock_test_and_set((volatile uint64_t*)&g_dirty[i], 0);
```

**2. Snapshot the cell buffer under seqlock**
```c
uint64_t gen1 = g_cell_gen;
if (gen1 & 1) return;
memcpy(snapshot, g_cells, sizeof(AttyxCell) * total);
uint64_t gen2 = g_cell_gen;
if (gen1 != gen2) { /* restore dirty, bail */ }
```

**3. Early exit if nothing changed**
```c
if (!fullRedraw && !dirtyAny(dirty) && !cursorChanged)
    return;
```

**4. Build background vertices for dirty rows**
```c
for (int row = 0; row < visibleRows; row++) {
    if (!fullRedraw && !dirtyBitTest(dirty, row)) continue;
    for (int col = 0; col < cols; col++) {
        int i = row * cols + col;
        float x0 = offX + col * gw;
        float y0 = offY + row * gh;

        int bi = i * 6;
        _bgVerts[bi+0] = (Vertex){ x0,   y0,   0,0, br,bg,bb,ba };
        _bgVerts[bi+1] = (Vertex){ x0+gw,y0,   0,0, br,bg,bb,ba };
        _bgVerts[bi+2] = (Vertex){ x0,   y0+gh,0,0, br,bg,bb,ba };
        _bgVerts[bi+3] = (Vertex){ x0+gw,y0,   0,0, br,bg,bb,ba };
        _bgVerts[bi+4] = (Vertex){ x0+gw,y0+gh,0,0, br,bg,bb,ba };
        _bgVerts[bi+5] = (Vertex){ x0,   y0+gh,0,0, br,bg,bb,ba };
    }
}
```

**5. Build text vertices with atlas lookups**
```c
for (int i = 0; i < visibleTotal; i++) {
    uint32_t ch = cells[i].character;
    if (ch <= 32) continue;  // skip spaces and control chars

    int slot = glyphCacheLookup(&cache, ch);
    if (slot < 0) slot = glyphCacheRasterize(&cache, ch);

    int ac = slot % atlasCols;
    int ar = slot / atlasCols;
    float au0 = ac * glyphW / atlasW;
    float av0 = ar * glyphH / atlasH;
    float au1 = (ac + 1) * glyphW / atlasW;
    float av1 = (ar + 1) * glyphH / atlasH;

    _textVerts[ti++] = (Vertex){ x0, y0, au0, av0, fr,fg,fb, 1 };
    // ... 5 more vertices for the quad
}
```

**6. Upload and draw**

On Metal, the vertex data is memcpy'd into shared-memory `MTLBuffer`s and dispatched:

```objc
[enc setRenderPipelineState:self.bgPipeline];
[enc setVertexBuffer:_bgMetalBuf offset:0 atIndex:0];
[enc setVertexBytes:viewport length:sizeof(viewport) atIndex:1];
[enc drawPrimitives:MTLPrimitiveTypeTriangle vertexStart:0
        vertexCount:bgVertCount];

[enc setRenderPipelineState:self.textPipeline];
[enc setVertexBuffer:_textMetalBuf offset:0 atIndex:0];
[enc setFragmentTexture:_glyphCache.texture atIndex:0];
[enc drawPrimitives:MTLPrimitiveTypeTriangle vertexStart:0
        vertexCount:textVertCount];

[enc setRenderPipelineState:self.colorPipeline];
[enc setVertexBuffer:_colorMetalBuf offset:0 atIndex:0];
[enc setFragmentTexture:_glyphCache.color_texture atIndex:0];
[enc drawPrimitives:MTLPrimitiveTypeTriangle vertexStart:0
        vertexCount:colorVertCount];
```

Three draw calls per frame. Backgrounds, text, color emoji. Layered in that order so text composites correctly over backgrounds.

On Linux, same pattern with OpenGL:

```c
glUseProgram(g_solid_prog);
glUniform2f(g_vp_loc_solid, fb_w, fb_h);
glBufferSubData(GL_ARRAY_BUFFER, 0, bgVertCount * sizeof(Vertex), g_bg_verts);
glDrawArrays(GL_TRIANGLES, 0, bgVertCount);

glUseProgram(g_text_prog);
glBindTexture(GL_TEXTURE_2D, g_gc.texture);
glBufferSubData(GL_ARRAY_BUFFER, 0, ti * sizeof(Vertex), g_text_verts);
glDrawArrays(GL_TRIANGLES, 0, ti);
```

## Metal vs. OpenGL: The Real Differences

The rendering *logic* is identical. Same vertex format. Same shader math. Same three-pass draw order. Same glyph atlas design. The differences are all about how each API wants you to talk to it.

**Pipeline setup.** Metal compiles render pipeline state objects upfront — shader pair + blend mode + pixel format = one immutable object. OpenGL compiles shader programs at runtime and sets blend state as global calls. Metal's approach is cleaner. You declare intent once, the driver optimizes, done.

```objc
// Metal: pipeline state created once at init
MTLRenderPipelineDescriptor* d = [[MTLRenderPipelineDescriptor alloc] init];
d.vertexFunction   = vertFn;
d.fragmentFunction = fragSolid;
d.colorAttachments[0].blendingEnabled = YES;
d.colorAttachments[0].sourceRGBBlendFactor      = MTLBlendFactorSourceAlpha;
d.colorAttachments[0].destinationRGBBlendFactor  = MTLBlendFactorOneMinusSourceAlpha;
_bgPipeline = [device newRenderPipelineStateWithDescriptor:d error:&err];
```

**Buffer management.** Metal buffers use `MTLResourceStorageModeShared` — CPU and GPU share the same memory. Write on the CPU, read on the GPU. Zero copies. OpenGL uses `glBufferSubData` which *may* copy, depending on the driver.

**Font rendering.** macOS uses Core Text. Linux uses FreeType + Fontconfig. Core Text handles font fallback, ligatures, and DPI scaling natively. FreeType is more manual — you load the face, set the size, render the bitmap, upload it yourself. Fontconfig handles finding the right font file on disk.

**Window integration.** macOS uses `MTKView` (Metal Kit View) which provides automatic display sync and a `CAMetalLayer` for compositing. Linux uses GLFW for window creation and input. GLFW is battle-tested but doesn't give you the same level of OS integration — no native blur, no system-level transparency compositing.

**Transparency.** macOS can use `NSVisualEffectView` for backdrop blur — the terminal window blurs whatever is behind it, for real. Linux gets window-level opacity (set via the compositor) but no native blur effect. This is a compositor limitation, not an Attyx limitation.

**DPI.** macOS reports `backingScaleFactor` — usually 2.0 on Retina. The Metal drawable is created at that scale, and the glyph atlas rasterizes at 2× so text is sharp. Linux uses GLFW's content scale, which works but can be less consistent across different compositors and monitor setups.

## What's Shared

Despite the platform differences, the vast majority of the rendering code is common:

- **Cell format** — identical `AttyxCell` struct through `bridge.h`
- **Vertex format** — same `Vertex` struct, same layout, both platforms
- **Shader math** — same transforms, same blending, same glyph sampling
- **Atlas design** — same hash table, same slot packing, same growth strategy
- **Dirty tracking** — same 256-bit bitset, same atomic swap
- **Seqlock** — same `__sync` primitives on both platforms
- **Draw order** — backgrounds → text → color emoji → cursor → decorations

The platform-specific code is really just the API binding layer. "Create a texture." "Upload these bytes." "Draw these triangles." Different function signatures, same intent.

## The Result

Three draw calls. One vertex shader. Three fragment shaders. A dynamic glyph atlas. A seqlock. A 256-bit dirty bitset.

That's the entire GPU renderer. No abstraction layers. No cross-platform GPU framework. No wgpu, no SDL, no Skia. Just raw Metal and raw OpenGL, doing the simplest possible thing that works.

And it works well. Smooth 120fps rendering. Sub-millisecond frame times for typical terminal output. `cat` a million-line file and the GPU barely notices — it's the VT parser that's doing the real work. The renderer just turns cells into triangles and lets the hardware do what hardware does best.

The terminal is old tech. The rendering doesn't have to be.
