[**@semos-labs/glyph**](../index.md)

***

# Variable: Box

```ts
const Box: ForwardRefExoticComponent<BoxProps & RefAttributes<GlyphNode>>;
```

Generic layout container — the building block of every Glyph UI.

`Box` maps directly to a Yoga flexbox node, so all CSS-like flex
properties (`flexDirection`, `gap`, `padding`, `alignItems`, …) work
out of the box.

## Examples

```tsx
<Box style={{ flexDirection: "row", gap: 1, padding: 1 }}>
  <Text>Hello</Text>
  <Text>World</Text>
</Box>
```

```tsx
// Centered card with a border
<Box
  style={{
    border: "round",
    borderColor: "cyan",
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 10,
  }}
>
  <Text style={{ bold: true }}>Welcome!</Text>
</Box>
```
