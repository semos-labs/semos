---
title: 'Menu'
---
```ts
function Menu(__namedParameters): Element;
```

Pre-styled menu built on top of [List](../variables/List.md).

Renders a vertical list of labeled items with a `>` selection indicator
and highlight color. Navigation uses the same keyboard shortcuts as
`List` (↑/↓, j/k, gg/G, Enter).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`MenuProps`](../interfaces/MenuProps.md) |

## Returns

`Element`

## Example

```tsx
<Menu
  items={[
    { label: "New File",  value: "new" },
    { label: "Open...",   value: "open" },
    { label: "Quit",      value: "quit" },
  ]}
  onSelect={(value) => handleAction(value)}
  highlightColor="magenta"
/>
```
