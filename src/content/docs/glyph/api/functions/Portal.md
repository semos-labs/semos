---
title: 'Portal'
---
```ts
function Portal(__namedParameters): Element;
```

Renders children as a fullscreen absolute overlay on top of the main tree.

Useful for modals, notifications, and dropdowns that should paint
above all other content.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`PortalProps`](../interfaces/PortalProps.md) |

## Returns

`Element`

## Example

```tsx
{showModal && (
  <Portal>
    <Box style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Box style={{ border: "round", padding: 2, bg: "black" }}>
        <Text>I'm an overlay!</Text>
      </Box>
    </Box>
  </Portal>
)}
```
