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
| `__namedParameters` | [`DialogHostProps`](#dialog-host-props) |

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

## Properties

| Property | Type |
| ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` |

---

## AlertOptions

## Extended by

- [`ConfirmOptions`](#confirm-options)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="backdropstyle"></a> `backdropStyle?` | [`Style`](../../core/style) | Style for the backdrop overlay |
| <a id="buttonstyle"></a> `buttonStyle?` | [`Style`](../../core/style) | Base style for buttons |
| <a id="focusedbuttonstyle"></a> `focusedButtonStyle?` | [`Style`](../../core/style) | Style for focused button state (merged with button styles) |
| <a id="okbuttonstyle"></a> `okButtonStyle?` | [`Style`](../../core/style) | Style for the OK button (merged with buttonStyle) |
| <a id="oktext"></a> `okText?` | `string` | Text for the OK button (default: "OK") |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style for the dialog box |

---

## ConfirmOptions

## Extends

- [`AlertOptions`](#alert-options)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="backdropstyle"></a> `backdropStyle?` | [`Style`](../../core/style) | Style for the backdrop overlay | [`AlertOptions`](#alert-options).[`backdropStyle`](#alert-options) |
| <a id="buttonstyle"></a> `buttonStyle?` | [`Style`](../../core/style) | Base style for buttons | [`AlertOptions`](#alert-options).[`buttonStyle`](#alert-options) |
| <a id="cancelbuttonstyle"></a> `cancelButtonStyle?` | [`Style`](../../core/style) | Style for the Cancel button (merged with buttonStyle) | - |
| <a id="canceltext"></a> `cancelText?` | `string` | Text for the Cancel button (default: "Cancel") | - |
| <a id="focusedbuttonstyle"></a> `focusedButtonStyle?` | [`Style`](../../core/style) | Style for focused button state (merged with button styles) | [`AlertOptions`](#alert-options).[`focusedButtonStyle`](#alert-options) |
| <a id="okbuttonstyle"></a> `okButtonStyle?` | [`Style`](../../core/style) | Style for the OK button (merged with buttonStyle) | [`AlertOptions`](#alert-options).[`okButtonStyle`](#alert-options) |
| <a id="oktext"></a> `okText?` | `string` | Text for the OK button (default: "OK") | [`AlertOptions`](#alert-options).[`okText`](#alert-options) |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style for the dialog box | [`AlertOptions`](#alert-options).[`style`](#alert-options) |

---

## DialogContextValue

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alert"></a> `alert` | (`content`, `options?`) => `Promise`\<`void`\> | Show an alert dialog. Returns a promise that resolves when dismissed. |
| <a id="confirm"></a> `confirm` | (`content`, `options?`) => `Promise`\<`boolean`\> | Show a confirm dialog. Returns a promise that resolves to true (OK) or false (Cancel). |
