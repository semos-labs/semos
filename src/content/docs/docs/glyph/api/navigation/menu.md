---
title: 'Menu'
---

```ts
function Menu(__namedParameters): Element;
```

Pre-styled menu built on top of [List](../list).

Renders a vertical list of labeled items with a `>` selection indicator
and highlight color. Navigation uses the same keyboard shortcuts as
`List` (↑/↓, j/k, gg/G, Enter).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`MenuProps`](#properties) |

## Returns

`Element`

## Example

```tsx
<Menu
  items={[
    { label: "New File",  value: "new" },
    { label: "Open...",   value: "open" },
    { label: "Quit",      value: "quit" },
  ]}
  onSelect={(value) => handleAction(value)}
  highlightColor="magenta"
/>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="defaultselectedindex"></a> `defaultSelectedIndex?` | `number` | Initial index for uncontrolled mode |
| <a id="focusable"></a> `focusable?` | `boolean` | Whether the menu is focusable (default: true) |
| <a id="highlightcolor"></a> `highlightColor?` | [`Color`](../../core/color) | Color for the selected item indicator and text (default: "cyan") |
| <a id="items"></a> `items` | [`MenuItem`](#menu-item)[] | - |
| <a id="onselect"></a> `onSelect?` | (`value`, `index`) => `void` | Callback when enter is pressed on item |
| <a id="onselectionchange"></a> `onSelectionChange?` | (`index`) => `void` | Callback when selected index changes |
| <a id="selectedindex"></a> `selectedIndex?` | `number` | Controlled selected index |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Outer box style |

---

## MenuItem

A single item in a Menu.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | When `true`, the item is dimmed and cannot be selected. |
| <a id="label"></a> `label` | `string` | Display text. |
| <a id="value"></a> `value` | `string` | Value returned when this item is selected. |
