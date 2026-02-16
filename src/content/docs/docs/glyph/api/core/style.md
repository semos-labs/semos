---
title: 'Style'
---

Unified style object for all Glyph elements.

Combines CSS-like flexbox layout, positioning, paint (colors, borders),
and text formatting into a single flat object.

Every property supports [responsive values](#responsive) — pass a
plain value for a static style or a breakpoint object to adapt to the
terminal width:

```tsx
<Box
  style={{
    flexDirection: { base: "column", md: "row" },
    padding: { base: 0, sm: 1, lg: 2 },
    gap: 1, // plain values still work
  }}
/>
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alignitems"></a> `alignItems?` | [`Responsive`](#responsive)\<`"center"` \| `"flex-start"` \| `"flex-end"` \| `"stretch"`\> | Alignment along the cross axis. |
| <a id="bg"></a> `bg?` | [`Responsive`](#responsive)\<[`Color`](../color)\> | Background color. |
| <a id="bold"></a> `bold?` | [`Responsive`](#responsive)\<`boolean`\> | Render text in bold. |
| <a id="border"></a> `border?` | [`Responsive`](#responsive)\<[`BorderStyle`](#border-style)\> | Border drawing style. |
| <a id="bordercolor"></a> `borderColor?` | [`Responsive`](#responsive)\<[`Color`](../color)\> | Border color (requires `border` to be set). |
| <a id="bottom"></a> `bottom?` | [`Responsive`](#responsive)\<[`DimensionValue`](#dimension-value)\> | Bottom offset for absolute positioning. |
| <a id="clip"></a> `clip?` | [`Responsive`](#responsive)\<`boolean`\> | Clip overflowing children (used internally by ScrollView). |
| <a id="color"></a> `color?` | [`Responsive`](#responsive)\<[`Color`](../color)\> | Text (foreground) color. Inherited by children. |
| <a id="dim"></a> `dim?` | [`Responsive`](#responsive)\<`boolean`\> | Render text in dim/faint. |
| <a id="flexdirection"></a> `flexDirection?` | [`Responsive`](#responsive)\<`"row"` \| `"column"`\> | Direction of the main axis. Default `"column"`. |
| <a id="flexgrow"></a> `flexGrow?` | [`Responsive`](#responsive)\<`number`\> | How much this element grows to fill available space (default `0`). |
| <a id="flexshrink"></a> `flexShrink?` | [`Responsive`](#responsive)\<`number`\> | How much this element shrinks when space is tight (default `1`). |
| <a id="flexwrap"></a> `flexWrap?` | [`Responsive`](#responsive)\<`"wrap"` \| `"nowrap"`\> | Whether children wrap to the next line. |
| <a id="gap"></a> `gap?` | [`Responsive`](#responsive)\<`number`\> | Gap between children (cells). Works with both `row` and `column` directions. |
| <a id="height"></a> `height?` | [`Responsive`](#responsive)\<[`DimensionValue`](#dimension-value)\> | Height in cells or percentage of parent. |
| <a id="inset"></a> `inset?` | [`Responsive`](#responsive)\<[`DimensionValue`](#dimension-value)\> | Shorthand for top/right/bottom/left simultaneously. |
| <a id="italic"></a> `italic?` | [`Responsive`](#responsive)\<`boolean`\> | Render text in italic. |
| <a id="justifycontent"></a> `justifyContent?` | [`Responsive`](#responsive)\<`"center"` \| `"flex-start"` \| `"flex-end"` \| `"space-between"` \| `"space-around"`\> | Alignment along the main axis. |
| <a id="left"></a> `left?` | [`Responsive`](#responsive)\<[`DimensionValue`](#dimension-value)\> | Left offset for absolute positioning. |
| <a id="maxheight"></a> `maxHeight?` | [`Responsive`](#responsive)\<`number`\> | Maximum height in cells. |
| <a id="maxwidth"></a> `maxWidth?` | [`Responsive`](#responsive)\<`number`\> | Maximum width in cells. |
| <a id="minheight"></a> `minHeight?` | [`Responsive`](#responsive)\<`number`\> | Minimum height in cells. |
| <a id="minwidth"></a> `minWidth?` | [`Responsive`](#responsive)\<`number`\> | Minimum width in cells. |
| <a id="padding"></a> `padding?` | [`Responsive`](#responsive)\<`number`\> | Padding on all four sides (cells). |
| <a id="paddingbottom"></a> `paddingBottom?` | [`Responsive`](#responsive)\<`number`\> | Bottom padding. |
| <a id="paddingleft"></a> `paddingLeft?` | [`Responsive`](#responsive)\<`number`\> | Left padding. |
| <a id="paddingright"></a> `paddingRight?` | [`Responsive`](#responsive)\<`number`\> | Right padding. |
| <a id="paddingtop"></a> `paddingTop?` | [`Responsive`](#responsive)\<`number`\> | Top padding. |
| <a id="paddingx"></a> `paddingX?` | [`Responsive`](#responsive)\<`number`\> | Horizontal padding (left + right). |
| <a id="paddingy"></a> `paddingY?` | [`Responsive`](#responsive)\<`number`\> | Vertical padding (top + bottom). |
| <a id="pointerevents"></a> `pointerEvents?` | [`Responsive`](#responsive)\<`"none"` \| `"auto"`\> | Controls whether this element blocks mouse/focus events. |
| <a id="position"></a> `position?` | [`Responsive`](#responsive)\<`"relative"` \| `"absolute"`\> | Positioning mode. `"absolute"` elements are taken out of flow. |
| <a id="right"></a> `right?` | [`Responsive`](#responsive)\<[`DimensionValue`](#dimension-value)\> | Right offset for absolute positioning. |
| <a id="textalign"></a> `textAlign?` | [`Responsive`](#responsive)\<[`TextAlign`](#text-align)\> | Horizontal text alignment within the container. |
| <a id="top"></a> `top?` | [`Responsive`](#responsive)\<[`DimensionValue`](#dimension-value)\> | Top offset for absolute positioning. |
| <a id="underline"></a> `underline?` | [`Responsive`](#responsive)\<`boolean`\> | Render text with underline. |
| <a id="width"></a> `width?` | [`Responsive`](#responsive)\<[`DimensionValue`](#dimension-value)\> | Width in cells or percentage of parent. |
| <a id="wrap"></a> `wrap?` | [`Responsive`](#responsive)\<[`WrapMode`](#wrap-mode)\> | Text wrapping mode. |
| <a id="zindex"></a> `zIndex?` | [`Responsive`](#responsive)\<`number`\> | Stack order for overlapping elements. Higher = on top. |

---

## ResolvedStyle

```ts
type ResolvedStyle = { [K in keyof Style]: [NonNullable<Style[K]>] extends [Responsive<infer T>] ? T | undefined : Style[K] };
```

Style with all [Responsive](#responsive) values resolved to their concrete types.

Produced by the responsive resolution pass and consumed by the internal
layout (Yoga) and paint systems. You normally don't need this type
directly — use Style instead.

---

## Responsive<T>

```ts
type Responsive<T> = T | { [K in Breakpoint]?: T };
```

A style value that can change depending on terminal width.

Accepts either a plain value (backward-compatible) **or** an object keyed
by [Breakpoint](#breakpoint) names.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Example

```tsx
// Plain value — works exactly like before
padding: 1

// Responsive — different values at different terminal widths
padding: { base: 0, sm: 1, lg: 2 }
```

---

## Breakpoint

```ts
type Breakpoint = "base" | "sm" | "md" | "lg" | "xl";
```

Named terminal breakpoint.

Breakpoints are **mobile-first** (like Tailwind / Chakra) — the largest
matching breakpoint wins.

| Name   | Columns | Typical use case            |
|--------|---------|-----------------------------|
| `base` | 0 +     | Always applies (default)    |
| `sm`   | 40 +    | Split pane / small terminal |
| `md`   | 80 +    | Standard 80-col terminal    |
| `lg`   | 120 +   | Wide terminal               |
| `xl`   | 160 +   | Ultra-wide                  |

## Example

```tsx
<Box style={{ flexDirection: { base: "column", md: "row" } }} />
```

---

## NamedColor

```ts
type NamedColor = 
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "blackBright"
  | "redBright"
  | "greenBright"
  | "yellowBright"
  | "blueBright"
  | "magentaBright"
  | "cyanBright"
  | "whiteBright";
```

Named ANSI terminal color.

---

## HexColor

```ts
type HexColor = `#${string}`;
```

Hex color string (e.g. `"#ff00ff"`).

---

## RGBColor

```ts
type RGBColor = {
  b: number;
  g: number;
  r: number;
};
```

RGB color as an object with 0-255 channels.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="b"></a> `b` | `number` |
| <a id="g"></a> `g` | `number` |
| <a id="r"></a> `r` | `number` |

---

## DimensionValue

```ts
type DimensionValue = number | `${number}%`;
```

Dimension value in terminal cells or a percentage string.
- `number` — absolute cells
- `"50%"` — percentage of parent

---

## BorderStyle

```ts
type BorderStyle = "none" | "single" | "double" | "round" | "ascii";
```

Border drawing style for [Style.border](#border).

---

## WrapMode

```ts
type WrapMode = "wrap" | "truncate" | "ellipsis" | "none";
```

Text wrapping mode for [Style.wrap](#wrap).
- `"wrap"` — soft-wrap at container edge
- `"truncate"` — cut off silently
- `"ellipsis"` — cut off with `…`
- `"none"` — no wrapping

---

## TextAlign

```ts
type TextAlign = "left" | "center" | "right";
```

Horizontal text alignment.
