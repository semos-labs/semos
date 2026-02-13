---
title: 'Style'
---

Unified style object for all Glyph elements.

Combines CSS-like flexbox layout, positioning, paint (colors, borders),
and text formatting into a single flat object.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alignitems"></a> `alignItems?` | `"center"` \| `"flex-start"` \| `"flex-end"` \| `"stretch"` | Alignment along the cross axis. |
| <a id="bg"></a> `bg?` | [`Color`](../color) | Background color. |
| <a id="bold"></a> `bold?` | `boolean` | Render text in bold. |
| <a id="border"></a> `border?` | [`BorderStyle`](style#border-style) | Border drawing style. |
| <a id="bordercolor"></a> `borderColor?` | [`Color`](../color) | Border color (requires `border` to be set). |
| <a id="bottom"></a> `bottom?` | [`DimensionValue`](style#dimension-value) | Bottom offset for absolute positioning. |
| <a id="clip"></a> `clip?` | `boolean` | Clip overflowing children (used internally by ScrollView). |
| <a id="color"></a> `color?` | [`Color`](../color) | Text (foreground) color. Inherited by children. |
| <a id="dim"></a> `dim?` | `boolean` | Render text in dim/faint. |
| <a id="flexdirection"></a> `flexDirection?` | `"row"` \| `"column"` | Direction of the main axis. Default `"column"`. |
| <a id="flexgrow"></a> `flexGrow?` | `number` | How much this element grows to fill available space (default `0`). |
| <a id="flexshrink"></a> `flexShrink?` | `number` | How much this element shrinks when space is tight (default `1`). |
| <a id="flexwrap"></a> `flexWrap?` | `"wrap"` \| `"nowrap"` | Whether children wrap to the next line. |
| <a id="gap"></a> `gap?` | `number` | Gap between children (cells). Works with both `row` and `column` directions. |
| <a id="height"></a> `height?` | [`DimensionValue`](style#dimension-value) | Height in cells or percentage of parent. |
| <a id="inset"></a> `inset?` | [`DimensionValue`](style#dimension-value) | Shorthand for top/right/bottom/left simultaneously. |
| <a id="italic"></a> `italic?` | `boolean` | Render text in italic. |
| <a id="justifycontent"></a> `justifyContent?` | `"center"` \| `"flex-start"` \| `"flex-end"` \| `"space-between"` \| `"space-around"` | Alignment along the main axis. |
| <a id="left"></a> `left?` | [`DimensionValue`](style#dimension-value) | Left offset for absolute positioning. |
| <a id="maxheight"></a> `maxHeight?` | `number` | Maximum height in cells. |
| <a id="maxwidth"></a> `maxWidth?` | `number` | Maximum width in cells. |
| <a id="minheight"></a> `minHeight?` | `number` | Minimum height in cells. |
| <a id="minwidth"></a> `minWidth?` | `number` | Minimum width in cells. |
| <a id="padding"></a> `padding?` | `number` | Padding on all four sides (cells). |
| <a id="paddingbottom"></a> `paddingBottom?` | `number` | Bottom padding. |
| <a id="paddingleft"></a> `paddingLeft?` | `number` | Left padding. |
| <a id="paddingright"></a> `paddingRight?` | `number` | Right padding. |
| <a id="paddingtop"></a> `paddingTop?` | `number` | Top padding. |
| <a id="paddingx"></a> `paddingX?` | `number` | Horizontal padding (left + right). |
| <a id="paddingy"></a> `paddingY?` | `number` | Vertical padding (top + bottom). |
| <a id="pointerevents"></a> `pointerEvents?` | `"none"` \| `"auto"` | Controls whether this element blocks mouse/focus events. |
| <a id="position"></a> `position?` | `"relative"` \| `"absolute"` | Positioning mode. `"absolute"` elements are taken out of flow. |
| <a id="right"></a> `right?` | [`DimensionValue`](style#dimension-value) | Right offset for absolute positioning. |
| <a id="textalign"></a> `textAlign?` | [`TextAlign`](style#text-align) | Horizontal text alignment within the container. |
| <a id="top"></a> `top?` | [`DimensionValue`](style#dimension-value) | Top offset for absolute positioning. |
| <a id="underline"></a> `underline?` | `boolean` | Render text with underline. |
| <a id="width"></a> `width?` | [`DimensionValue`](style#dimension-value) | Width in cells or percentage of parent. |
| <a id="wrap"></a> `wrap?` | [`WrapMode`](style#wrap-mode) | Text wrapping mode. |
| <a id="zindex"></a> `zIndex?` | `number` | Stack order for overlapping elements. Higher = on top. |

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

Border drawing style for [Style.border](style#border).

---

## WrapMode

```ts
type WrapMode = "wrap" | "truncate" | "ellipsis" | "none";
```

Text wrapping mode for [Style.wrap](style#wrap).
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
