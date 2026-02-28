---
title: "I Built a Terminal Emulator from Scratch in Zig. It's Under 5MB."
published: true
description: "Attyx is a GPU-accelerated, VT-compatible terminal emulator written in Zig. Here's what it is, why it exists, and a peek at how it works."
tags: zig, terminal, gpu, opensource
cover_image: https://semos.sh/images/building-attyx.webp
---

I live in my terminal. Neovim, tmux, git, SSH — that's my whole day. I've used every terminal emulator out there. iTerm2, Alacritty, Kitty, Ghostty. All great.

But I never understood what actually happens inside one. Bytes come out of a shell, escape sequences get parsed, characters appear on screen. What does `ESC[38;2;255;100;0m` *do* to the internal state? How does a key press travel through a pseudoterminal and come back as text? I had no clue.

Only way I know how to learn something is to build it.

So I built [Attyx](https://github.com/semos-labs/attyx) — a GPU-accelerated terminal emulator, from scratch, in Zig. Started on a Saturday. Five days later I was daily-driving it. I'm still daily-driving it.

## Why Though

"We don't need another terminal emulator." Sure. But I didn't build it because the world needed one. I built it for two selfish reasons.

**I wanted to learn Zig.** Not from docs and tutorials — from a real project that would punch me in the face with systems programming problems. Terminal emulators hit everything: parsing, GPU rendering, font rasterization, Unicode, PTY management, platform APIs. Perfect.

**I needed a testable terminal core.** This one's less obvious, so let me explain.

I build TUI apps. I made [Glyph](https://semos.sh/glyph/) — a React renderer for the terminal. Flexbox, components, hooks, the whole deal, but rendering to your terminal instead of a browser. On top of it I built [Aion](https://semos.sh/aion/) (Calendar TUI) and [Epist](https://semos.sh/epist/) (an email client with vim keybindings). Real apps I use every single day.

Here's my problem: how do you test what a TUI app actually *looks like*? You can test component state. You can test logic. But the final output — the grid of characters and styles after the terminal interprets your escape sequences — that's a black hole. Screenshot diffing? Fragile. Asciinema recordings? Not automated. Unit testing raw escape codes? Doesn't catch interpretation bugs.

What I wanted was dead simple — feed bytes into a terminal engine, get a deterministic grid back, assert against it. No terminal app existed that let me do that. So I built one where the core is pure from the ground up.

```zig
var engine = try Engine.init(allocator, 24, 80);
engine.feed(my_app_output);
const cell = engine.state.grid.getCell(0, 0);
try expectEqual('A', cell.char);
try expect(cell.style.bold);
```

No GPU. No window. No PTY. Just bytes in, state out. That's the testing primitive I've wanted for years.

## What You Get

GPU-accelerated rendering — Metal on macOS, OpenGL 3.3 on Linux. Full VT100/xterm compatibility. Truecolor, 256-color, the works. Mouse tracking, Kitty graphics protocol for inline images, hyperlinks, alternate screen buffer, scroll regions, cursor shapes. 20,000-line scrollback with reflow on resize. Popup terminals that float over your session. Search. TOML config with hot reload.

Under 5MB.

The whole thing — GPU rendering, VT parser, font handling, platform code — in a tiny binary. That's what happens when you write Zig with minimal deps, use native platform frameworks instead of bundling a GUI toolkit, and let the compiler strip dead code. No runtime. No GC. No Electron. Just a Zig binary talking to the OS.

## Under the Hood (Without Boring You to Death)

I wrote a [deep technical dive](https://semos.sh/blog/building-attyx/) on the Semos blog if you want all the details. But here's the gist.

Everything flows through a pipeline:

```
Raw bytes → Parser → Actions → State → Grid
```

**The parser** is an incremental state machine. One byte at a time, spits out actions — "print H", "move cursor to row 3 col 5", "set foreground to red." Fixed-size buffers, zero heap allocations, handles partial sequences across `read()` boundaries. The whole parser struct is stack-sized.

**The grid** is a flat array of cells. Each cell: a Unicode codepoint, two combining mark slots (for diacriticals and such), a style, and a hyperlink ID. One alloc on init. Scroll regions are `memcpy` on contiguous memory. No linked lists, no indirection.

**Damage tracking** keeps rendering fast. 256-bit dirty bitset — four `u64`s. State machine flips a bit when it touches a row. Renderer only redraws dirty rows. Most frames, that's one or two rows.

**Two threads, no locks.** PTY thread reads bytes and fills a shared cell buffer. Main thread renders at vsync. A seqlock — just an atomic generation counter — prevents torn reads. If the renderer catches the PTY mid-write, it skips a frame. You'll never notice a single dropped frame. You will notice mutex contention.

**GPU rendering** turns each character into a textured quad. Glyphs get rasterized on demand into an atlas that lives in GPU memory. Drawing 10,000 cells costs about the same as drawing 100 — that's the whole point of offloading to the GPU. The CPU does parsing and state. The GPU does pixels. Each does what it's good at.

## The Semos Stack

Attyx is part of [Semos](https://semos.sh) — the collection of dev tools I've been building. It fits into a stack that's been growing over the past year:

**[Glyph](https://semos.sh/glyph/)** is the React terminal renderer. Write terminal apps with JSX, flexbox, hooks — the same DX you know from the web, but painting to a terminal. **[Aion](https://semos.sh/aion/)** and **[Epist](https://semos.sh/epist/)** are the apps built on top of it — calendar and email, both living in my terminal where they belong.

Attyx closes the loop. Glyph apps needed a testable terminal. Attyx needed real-world apps to stress-test against. They push each other forward.

## Give It a Shot

```bash
brew install semos-labs/tap/attyx
```

Or build from source:

```bash
git clone https://github.com/semos-labs/attyx
cd attyx
zig build -Doptimize=ReleaseFast
```

Config goes in `~/.config/attyx/attyx.toml` — fonts, colors, keybindings, opacity, blur. Change it, hit `Ctrl+Shift+R`, done. No restart.

Open source, MIT licensed. [github.com/semos-labs/attyx](https://github.com/semos-labs/attyx)

Is it as mature as Ghostty or Kitty? Not yet. But I understand every line in it, I use it every day, and the whole thing fits in under 5MB. That counts for something.
