---
title: 'DialogHost'
---
```ts
function DialogHost(__namedParameters): Element;
```

Host component for dialogs. Place this at the root of your app.
Provides the useDialog hook to children.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`DialogHostProps`](../interfaces/DialogHostProps.md) |

## Returns

`Element`

## Example

```tsx
function App() {
  return (
    <DialogHost>
      <MyApp />
    </DialogHost>
  );
}
```
