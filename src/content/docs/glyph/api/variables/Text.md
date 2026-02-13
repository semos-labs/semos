---
title: 'Text'
---
```ts
const Text: ForwardRefExoticComponent<TextProps & RefAttributes<TextHandle>>;
```

Renders styled text in the terminal.

Supports inline nesting for rich text — wrap portions of text in
additional `<Text>` elements with different styles:

## Examples

```tsx
<Text style={{ color: "white" }}>
  Hello <Text style={{ bold: true, color: "cyan" }}>World</Text>!
</Text>
```

```tsx
// Focusable text with highlight
<Text focusable focusedStyle={{ bg: "cyan", color: "black" }}>
  Press Tab to reach me
</Text>
```
