---
title: Color
---
```ts
type Color = 
  | NamedColor
  | HexColor
  | RGBColor
  | number;
```

Color value accepted by all style properties.

- [NamedColor](NamedColor.md) — ANSI name (`"red"`, `"cyanBright"`, …)
- [HexColor](HexColor.md) — hex string (`"#ff00ff"`)
- [RGBColor](RGBColor.md) — `{ r, g, b }` object
- `number` — ANSI 256-color index (0–255)
