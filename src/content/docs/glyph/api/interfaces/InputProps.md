---
title: InputProps
---
Props for the [Input](../variables/Input.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="autofocus"></a> `autoFocus?` | `boolean` | Automatically focus this input when mounted. |
| <a id="defaultvalue"></a> `defaultValue?` | `string` | Initial value for uncontrolled mode (ignored when `value` is provided). |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](Style.md) | Style when focused (merged with style). |
| <a id="multiline"></a> `multiline?` | `boolean` | Enable multiline editing (Enter inserts newlines, Up/Down navigate lines). |
| <a id="onbeforechange"></a> `onBeforeChange?` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | Called before a value change is applied. Useful for input masking/validation. |
| <a id="onchange"></a> `onChange?` | (`value`) => `void` | Callback fired whenever the text value changes. |
| <a id="onkeypress"></a> `onKeyPress?` | (`key`) => `boolean` \| `void` | Called on every key press. Return `true` to prevent default handling. |
| <a id="placeholder"></a> `placeholder?` | `string` | Text shown when the input is empty. |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Base style for the input container. |
| <a id="type"></a> `type?` | [`InputType`](../type-aliases/InputType.md) | Input type for validation: - "text" (default): accepts any character - "number": only accepts digits, decimal point, and minus sign |
| <a id="value"></a> `value?` | `string` | Controlled value. Pair with `onChange` to manage state externally. |
