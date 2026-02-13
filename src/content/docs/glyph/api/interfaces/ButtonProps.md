---
title: ButtonProps
---
Props for the [Button](../variables/Button.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Custom content. Takes precedence over `label` when both are provided. |
| <a id="disabled"></a> `disabled?` | `boolean` | When `true`, the button is skipped in the focus order and ignores input. |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](Style.md) | Style applied when the button is focused (merged with `style`). |
| <a id="label"></a> `label?` | `string` | Shorthand text label. When provided and `children` is absent, renders the label as text. |
| <a id="onpress"></a> `onPress?` | () => `void` | Callback fired when the button is activated (Enter or Space). |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Base style for the button container. |
