---
title: List
---
```ts
const List: ForwardRefExoticComponent<ListProps & RefAttributes<ListHandle>>;
```

Keyboard-navigable list with vim-style bindings.

Renders `count` items via a `renderItem` function, managing selection
state internally or through controlled props.

**Keyboard shortcuts** (when focused):
| Key | Action |
|---|---|
| ↑ / k | Move selection up |
| ↓ / j | Move selection down |
| gg | Jump to first item |
| G | Jump to last item |
| Enter | Confirm selection |

## Example

```tsx
<List
  count={items.length}
  renderItem={({ index, selected, focused }) => (
    <Box style={{ bg: selected && focused ? "cyan" : undefined }}>
      <Text>{items[index].name}</Text>
    </Box>
  )}
  onSelect={(index) => console.log("Selected:", items[index])}
/>
```
