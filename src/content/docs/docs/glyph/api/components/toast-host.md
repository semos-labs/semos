---
title: 'ToastHost'
---

```ts
function ToastHost(__namedParameters): Element;
```

Container that renders toast notifications for its children.

Place `<ToastHost>` near the root of your app. Children call
[useToast](../../hooks/use-toast) to push notifications.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ToastHostProps`](toast-host#toast-host-props) |

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

---

## ToastHostProps

Props for the [ToastHost](toast-host) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Application content. |
| <a id="maxvisible"></a> `maxVisible?` | `number` | Maximum number of toasts visible simultaneously. Default `5`. |
| <a id="position"></a> `position?` | [`ToastPosition`](toast-host#toast-position) | Where toasts appear. Default `"bottom-right"`. |

---

## ToastVariant

```ts
type ToastVariant = "info" | "success" | "warning" | "error";
```

Visual variant for a toast notification.

---

## ToastPosition

```ts
type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";
```

Screen corner where toasts are displayed.
