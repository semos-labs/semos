---
title: 'useApp'
---

```ts
function useApp(): UseAppResult;
```

Access application-level utilities: exit, terminal dimensions.

Must be called inside a Glyph render tree (i.e. inside a component
passed to [render](../utilities/render.md)).

## Returns

[`UseAppResult`](#)

## Example

```tsx
const { exit, columns, rows } = useApp();

<Text>Terminal size: {columns}×{rows}</Text>
<Button label="Quit" onPress={() => exit()} />
```
