---
title: useDialog
---
```ts
function useDialog(): DialogContextValue;
```

Hook to show alert and confirm dialogs.
Must be used within a DialogHost.

## Returns

[`DialogContextValue`](../interfaces/DialogContextValue.md)

## Example

```tsx
const { alert, confirm } = useDialog();

// Alert
await alert("Something happened!");

// Confirm
const ok = await confirm("Delete this item?", {
  okText: "Delete",
  cancelText: "Keep"
});
```
