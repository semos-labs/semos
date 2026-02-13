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
| `__namedParameters` | [`DialogHostProps`](dialog-host#dialog-host-props) |

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

---

## DialogHostProps

## Properties

| Property | Type |
| ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` |

---

## AlertOptions

## Extended by

- [`ConfirmOptions`](dialog-host#confirm-options)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="backdropstyle"></a> `backdropStyle?` | [`Style`](../../types/style) | Style for the backdrop overlay |
| <a id="buttonstyle"></a> `buttonStyle?` | [`Style`](../../types/style) | Base style for buttons |
| <a id="focusedbuttonstyle"></a> `focusedButtonStyle?` | [`Style`](../../types/style) | Style for focused button state (merged with button styles) |
| <a id="okbuttonstyle"></a> `okButtonStyle?` | [`Style`](../../types/style) | Style for the OK button (merged with buttonStyle) |
| <a id="oktext"></a> `okText?` | `string` | Text for the OK button (default: "OK") |
| <a id="style"></a> `style?` | [`Style`](../../types/style) | Style for the dialog box |

---

## ConfirmOptions

## Extends

- [`AlertOptions`](dialog-host#alert-options)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="backdropstyle"></a> `backdropStyle?` | [`Style`](../../types/style) | Style for the backdrop overlay | [`AlertOptions`](dialog-host#alert-options).[`backdropStyle`](dialog-host#alert-options) |
| <a id="buttonstyle"></a> `buttonStyle?` | [`Style`](../../types/style) | Base style for buttons | [`AlertOptions`](dialog-host#alert-options).[`buttonStyle`](dialog-host#alert-options) |
| <a id="cancelbuttonstyle"></a> `cancelButtonStyle?` | [`Style`](../../types/style) | Style for the Cancel button (merged with buttonStyle) | - |
| <a id="canceltext"></a> `cancelText?` | `string` | Text for the Cancel button (default: "Cancel") | - |
| <a id="focusedbuttonstyle"></a> `focusedButtonStyle?` | [`Style`](../../types/style) | Style for focused button state (merged with button styles) | [`AlertOptions`](dialog-host#alert-options).[`focusedButtonStyle`](dialog-host#alert-options) |
| <a id="okbuttonstyle"></a> `okButtonStyle?` | [`Style`](../../types/style) | Style for the OK button (merged with buttonStyle) | [`AlertOptions`](dialog-host#alert-options).[`okButtonStyle`](dialog-host#alert-options) |
| <a id="oktext"></a> `okText?` | `string` | Text for the OK button (default: "OK") | [`AlertOptions`](dialog-host#alert-options).[`okText`](dialog-host#alert-options) |
| <a id="style"></a> `style?` | [`Style`](../../types/style) | Style for the dialog box | [`AlertOptions`](dialog-host#alert-options).[`style`](dialog-host#alert-options) |

---

## DialogContextValue

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alert"></a> `alert` | (`content`, `options?`) => `Promise`\<`void`\> | Show an alert dialog. Returns a promise that resolves when dismissed. |
| <a id="confirm"></a> `confirm` | (`content`, `options?`) => `Promise`\<`boolean`\> | Show a confirm dialog. Returns a promise that resolves to true (OK) or false (Cancel). |
