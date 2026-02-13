---
title: 'Button'
---

```ts
const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonHandle>>;
```

Focusable button that triggers an action on Enter or Space.

## Examples

```tsx
<Button
  label="Save"
  onPress={() => save()}
  style={{ border: "round", paddingX: 2 }}
  focusedStyle={{ bg: "cyan", color: "black" }}
/>
```

```tsx
// Using children for custom content
<Button onPress={handleClick}>
  <Text style={{ bold: true }}>🚀 Launch</Text>
</Button>
```

---

## ButtonProps

Props for the [Button](button.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Custom content. Takes precedence over `label` when both are provided. |
| <a id="disabled"></a> `disabled?` | `boolean` | When `true`, the button is skipped in the focus order and ignores input. |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../types/style.md) | Style applied when the button is focused (merged with `style`). |
| <a id="label"></a> `label?` | `string` | Shorthand text label. When provided and `children` is absent, renders the label as text. |
| <a id="onpress"></a> `onPress?` | () => `void` | Callback fired when the button is activated (Enter or Space). |
| <a id="style"></a> `style?` | [`Style`](../types/style.md) | Base style for the button container. |

---

## ButtonHandle

Handle for Button

## Extends

- [`FocusableHandle`](../types/focusable-handle.md)

## Methods

### blur()

```ts
blur(): void;
```

Programmatically blur (unfocus) this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../types/focusable-handle.md).[`blur`](../types/focusable-handle.md#blur)

***

### focus()

```ts
focus(): void;
```

Programmatically focus this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../types/focusable-handle.md).[`focus`](../types/focusable-handle.md#focus)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused | [`FocusableHandle`](../types/focusable-handle.md).[`isFocused`](../types/focusable-handle.md#isfocused) |
