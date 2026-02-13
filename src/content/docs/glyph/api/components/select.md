---
title: 'Select'
---

```ts
const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<SelectHandle>>;
```

Dropdown select with keyboard navigation, type-to-filter, and scrolling.

Opens on **Space** or **Enter**. Close with **Escape** or **Tab**.
Type to filter when open (if `searchable` is enabled).

Automatically detects whether to open upward or downward based on
available space, unless you override with `openDirection`.

## Examples

```tsx
const [color, setColor] = useState<string>();

<Select
  items={[
    { label: "Red",   value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue",  value: "blue" },
  ]}
  value={color}
  onChange={setColor}
  placeholder="Pick a color"
/>
```

```tsx
// Force dropdown to always open upward
<Select items={items} value={v} onChange={setV} openDirection="up" />
```

---

## SelectProps

Props for the [Select](select.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | Disabled state |
| <a id="dropdownstyle"></a> `dropdownStyle?` | [`Style`](../types/style.md) | Dropdown overlay style overrides |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../types/style.md) | Trigger style when focused |
| <a id="highlightcolor"></a> `highlightColor?` | [`Color`](../types/color.md) | Highlight color for the selected item in the dropdown (default: "cyan") |
| <a id="items"></a> `items` | [`SelectItem`](select.md#select-item)[] | List of selectable items |
| <a id="maxvisible"></a> `maxVisible?` | `number` | Max visible items in the dropdown before scrolling (default: 8) |
| <a id="onchange"></a> `onChange?` | (`value`) => `void` | Callback when selection changes |
| <a id="opendirection"></a> `openDirection?` | `"auto"` \| `"up"` \| `"down"` | Force dropdown open direction: "up", "down", or "auto" (default: "auto") |
| <a id="placeholder"></a> `placeholder?` | `string` | Placeholder text when nothing is selected |
| <a id="searchable"></a> `searchable?` | `boolean` | Enable type-to-filter when dropdown is open (default: true) |
| <a id="style"></a> `style?` | [`Style`](../types/style.md) | Trigger box style |
| <a id="value"></a> `value?` | `string` | Currently selected value (controlled) |

---

## SelectItem

A single option inside a [Select](select.md) dropdown.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | When `true`, the item is dimmed and cannot be selected. |
| <a id="label"></a> `label` | `string` | Display text shown in the dropdown. |
| <a id="value"></a> `value` | `string` | Value returned when this item is selected. |

---

## SelectHandle

Handle for Select — exposes current selected value

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
| <a id="isopen"></a> `isOpen` | `readonly` | `boolean` | Whether the dropdown is currently open | - |
| <a id="value"></a> `value` | `readonly` | `string` \| `undefined` | Currently selected value (undefined if nothing selected) | - |
