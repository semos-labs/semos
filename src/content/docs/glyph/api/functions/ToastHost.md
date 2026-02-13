---
title: 'ToastHost'
---
```ts
function ToastHost(__namedParameters): Element;
```

Container that renders toast notifications for its children.

Place `<ToastHost>` near the root of your app. Children call
[useToast](useToast.md) to push notifications.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ToastHostProps`](../interfaces/ToastHostProps.md) |

## Returns

`Element`

## Example

```tsx
function App() {
  return (
    <ToastHost position="bottom-right">
      <MyApp />
    </ToastHost>
  );
}
```
