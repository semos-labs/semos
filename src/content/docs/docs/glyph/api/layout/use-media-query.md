---
title: 'useMediaQuery'
---

```ts
function useMediaQuery(query): boolean;
```

Subscribe to terminal dimensions and evaluate a media query reactively.

Returns `true` when **all** conditions in `query` are satisfied and
automatically re-renders the component when the result changes (e.g.
on terminal resize).

Conditions are combined with AND — every specified constraint must be
met for the hook to return `true`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `query` | [`MediaQueryInput`](../media-query-input) | A [MediaQueryInput](../media-query-input) object describing the conditions. |

## Returns

`boolean`

Whether the query currently matches.

## Examples

```tsx
function App() {
  const isWide = useMediaQuery({ minColumns: 80 });

  return (
    <Box style={{ flexDirection: isWide ? "row" : "column" }}>
      <Sidebar />
      <MainContent />
    </Box>
  );
}
```

```tsx
// Compound query — all conditions must match
const isDesktop = useMediaQuery({ minColumns: 120, minRows: 30 });
```
