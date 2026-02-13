---
title: 'FocusScope'
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
| `__namedParameters` | [`FocusScopeProps`](focus-scope.md#focus-scope-props) |

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

---

## FocusScopeProps

Props for the [FocusScope](focus-scope.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Children that participate in the trapped focus cycle. |
| <a id="trap"></a> `trap?` | `boolean` | When `true`, Tab/Shift+Tab cycling is confined to the children of this scope. Previous focus is restored when the scope unmounts. |
