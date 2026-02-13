---
title: 'Color'
---

```ts
type Color = 
  | NamedColor
  | HexColor
  | RGBColor
  | number;
```

Color value accepted by all style properties.

- [NamedColor](style.md#named-color) — ANSI name (`"red"`, `"cyanBright"`, …)
- [HexColor](style.md#hex-color) — hex string (`"#ff00ff"`)
- [RGBColor](style.md#rgb-color) — `{ r, g, b }` object
- `number` — ANSI 256-color index (0–255)
