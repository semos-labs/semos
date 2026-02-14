---
title: 'Input'
---

```ts
const Input: ForwardRefExoticComponent<InputProps & RefAttributes<InputHandle>>;
```

Text input with full keyboard editing, cursor navigation, and optional masking.

Supports both controlled (`value` + `onChange`) and uncontrolled (`defaultValue`)
modes. Multiline editing is opt-in via the `multiline` prop.

**Keyboard shortcuts** (when focused):
| Key | Action |
|---|---|
| ← / → | Move cursor |
| Home / End | Start / end of line |
| Ctrl+A / Ctrl+E | Start / end of line |
| Ctrl+W | Delete word backward |
| Ctrl+K | Delete to end of line |
| Alt+← / Alt+→ | Move by word |
| Alt+Backspace | Delete word backward |
| Up / Down | Navigate visual lines (multiline / wrapped) |

## Examples

```tsx
const [name, setName] = useState("");

<Input
  value={name}
  onChange={setName}
  placeholder="Your name"
  style={{ border: "round", paddingX: 1 }}
  focusedStyle={{ borderColor: "cyan" }}
/>
```

```tsx
// Masked phone input
import { masks } from "@semos-labs/glyph";

<Input
  value={phone}
  onChange={setPhone}
  onBeforeChange={masks.usPhone}
  placeholder="(555) 555-5555"
/>
```

---

## InputProps

Props for the [Input](input) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="autofocus"></a> `autoFocus?` | `boolean` | Automatically focus this input when mounted. |
| <a id="defaultvalue"></a> `defaultValue?` | `string` | Initial value for uncontrolled mode (ignored when `value` is provided). |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../../types/style) | Style when focused (merged with style). |
| <a id="multiline"></a> `multiline?` | `boolean` | Enable multiline editing (Enter inserts newlines, Up/Down navigate lines). |
| <a id="onbeforechange"></a> `onBeforeChange?` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | Called before a value change is applied. Useful for input masking/validation. |
| <a id="onchange"></a> `onChange?` | (`value`) => `void` | Callback fired whenever the text value changes. |
| <a id="onkeypress"></a> `onKeyPress?` | (`key`) => `boolean` \| `void` | Called on every key press. Return `true` to prevent default handling. |
| <a id="placeholder"></a> `placeholder?` | `string` | Text shown when the input is empty. |
| <a id="style"></a> `style?` | [`Style`](../../types/style) | Base style for the input container. |
| <a id="type"></a> `type?` | [`InputType`](input#input-type) | Input type for validation: - "text" (default): accepts any character - "number": only accepts digits, decimal point, and minus sign |
| <a id="value"></a> `value?` | `string` | Controlled value. Pair with `onChange` to manage state externally. |

---

## InputType

```ts
type InputType = "text" | "number";
```

Input type for value validation.

---

## InputHandle

Handle for Input — exposes current value

## Extends

- [`FocusableHandle`](../../types/focusable-handle)

## Methods

### blur()

```ts
blur(): void;
```

Programmatically blur (unfocus) this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../../types/focusable-handle).[`blur`](../../types/focusable-handle#blur)

***

### focus()

```ts
focus(): void;
```

Programmatically focus this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../../types/focusable-handle).[`focus`](../../types/focusable-handle#focus)

***

### scrollIntoView()

```ts
scrollIntoView(options?): void;
```

Scroll the nearest parent [ScrollView](../scroll-view) to make this element visible.
Behaves like the DOM `Element.scrollIntoView()` method.
No-op if the element is not inside a ScrollView.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ScrollIntoViewOptions`](../../types/scroll-into-view-options) | Alignment options (default: `{ block: "nearest" }`) |

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

[`FocusableHandle`](../../types/focusable-handle).[`scrollIntoView`](../../types/focusable-handle#scrollintoview)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused | [`FocusableHandle`](../../types/focusable-handle).[`isFocused`](../../types/focusable-handle#isfocused) |
| <a id="value"></a> `value` | `readonly` | `string` | Current text value | - |
