---
title: 'Checkbox'
---

```ts
const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<CheckboxHandle>>;
```

Toggle checkbox with label. Activated via Space or Enter.

## Example

```tsx
const [agreed, setAgreed] = useState(false);

<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to the terms"
  focusedStyle={{ bg: "cyan", color: "black" }}
/>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="checked"></a> `checked` | `boolean` | Whether the checkbox is checked |
| <a id="checkedchar"></a> `checkedChar?` | `string` | Custom character for checked state (default: "✓") |
| <a id="disabled"></a> `disabled?` | `boolean` | Whether the checkbox is disabled |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../../core/style) | Style when focused |
| <a id="label"></a> `label?` | `string` | Label text displayed next to the checkbox |
| <a id="onchange"></a> `onChange` | (`checked`) => `void` | Called when the checkbox is toggled |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style for the checkbox container |
| <a id="uncheckedchar"></a> `uncheckedChar?` | `string` | Custom character for unchecked state (default: " ") |

---

## CheckboxHandle

Handle for Checkbox — exposes checked state

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
| <a id="checked"></a> `checked` | `readonly` | `boolean` | Whether the checkbox is currently checked | - |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused | [`FocusableHandle`](../../core/focusable-handle).[`isFocused`](../../core/focusable-handle#isfocused) |
