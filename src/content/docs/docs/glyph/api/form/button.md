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

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Custom content. Takes precedence over `label` when both are provided. |
| <a id="disabled"></a> `disabled?` | `boolean` | When `true`, the button is skipped in the focus order and ignores input. |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../../core/style) | Style applied when the button is focused (merged with `style`). |
| <a id="label"></a> `label?` | `string` | Shorthand text label. When provided and `children` is absent, renders the label as text. |
| <a id="onpress"></a> `onPress?` | () => `void` | Callback fired when the button is activated (Enter or Space). |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Base style for the button container. |

---

## ButtonHandle

Handle for Button

## Extends

- [`FocusableHandle`](../../core/focusable-handle)

## Methods

### blur()

```ts
blur(): void;
```

Programmatically blur (unfocus) this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../../core/focusable-handle).[`blur`](../../core/focusable-handle#blur)

***

### focus()

```ts
focus(): void;
```

Programmatically focus this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../../core/focusable-handle).[`focus`](../../core/focusable-handle#focus)

***

### scrollIntoView()

```ts
scrollIntoView(options?): void;
```

Scroll the nearest parent [ScrollView](../../layout/scroll-view) to make this element visible.
Behaves like the DOM `Element.scrollIntoView()` method.
No-op if the element is not inside a ScrollView.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ScrollIntoViewOptions`](../../navigation/scroll-into-view-options) | Alignment options (default: `{ block: "nearest" }`) |

#### Returns

`void`

#### Example

```tsx
const inputRef = useRef<InputHandle>(null);

// Minimal scroll — just enough to make it visible
inputRef.current?.scrollIntoView();

// Center the element in the viewport
inputRef.current?.scrollIntoView({ block: "center" });
```

#### Inherited from

[`FocusableHandle`](../../core/focusable-handle).[`scrollIntoView`](../../core/focusable-handle#scrollintoview)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused | [`FocusableHandle`](../../core/focusable-handle).[`isFocused`](../../core/focusable-handle#isfocused) |
