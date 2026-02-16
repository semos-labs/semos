---
title: 'useApp'
---

```ts
function useApp(): UseAppResult;
```

Access application-level utilities: exit, terminal dimensions.

Must be called inside a Glyph render tree (i.e. inside a component
passed to [render](../render)).

The returned `columns` and `rows` are reactive — components that
destructure them will automatically re-render when the terminal is
resized.  This is implemented via `useSyncExternalStore` under the
hood, subscribing to the same resize event that drives
[useMediaQuery](../../layout/use-media-query).

## Returns

[`UseAppResult`](#)

## Example

```tsx
const { exit, columns, rows } = useApp();

<Text>Terminal size: {columns}×{rows}</Text>
<Button label="Quit" onPress={() => exit()} />
```
