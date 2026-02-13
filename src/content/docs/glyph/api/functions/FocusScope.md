---
title: FocusScope
---
```ts
function FocusScope(__namedParameters): Element;
```

Confines keyboard focus to a sub-tree.

Wrap a dialog, modal, or drawer with `<FocusScope trap>` to prevent
Tab from escaping. When the scope unmounts, the previously focused
element is restored automatically.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`FocusScopeProps`](../interfaces/FocusScopeProps.md) |

## Returns

`Element`

## Example

```tsx
<FocusScope trap>
  <Box style={{ border: "round", padding: 1 }}>
    <Input placeholder="Name" />
    <Button label="OK" onPress={close} />
  </Box>
</FocusScope>
```
