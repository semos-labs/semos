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
| `__namedParameters` | [`PortalProps`](portal.md#portal-props) |

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

---

## PortalProps

Props for the [Portal](portal.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Content to render in the overlay layer. |
| <a id="zindex"></a> `zIndex?` | `number` | Stack order (higher = on top). Default `1000`. |
