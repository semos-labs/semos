---
title: SelectProps
---
Props for the [Select](../variables/Select.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | Disabled state |
| <a id="dropdownstyle"></a> `dropdownStyle?` | [`Style`](Style.md) | Dropdown overlay style overrides |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](Style.md) | Trigger style when focused |
| <a id="highlightcolor"></a> `highlightColor?` | [`Color`](../type-aliases/Color.md) | Highlight color for the selected item in the dropdown (default: "cyan") |
| <a id="items"></a> `items` | [`SelectItem`](SelectItem.md)[] | List of selectable items |
| <a id="maxvisible"></a> `maxVisible?` | `number` | Max visible items in the dropdown before scrolling (default: 8) |
| <a id="onchange"></a> `onChange?` | (`value`) => `void` | Callback when selection changes |
| <a id="opendirection"></a> `openDirection?` | `"auto"` \| `"up"` \| `"down"` | Force dropdown open direction: "up", "down", or "auto" (default: "auto") |
| <a id="placeholder"></a> `placeholder?` | `string` | Placeholder text when nothing is selected |
| <a id="searchable"></a> `searchable?` | `boolean` | Enable type-to-filter when dropdown is open (default: true) |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Trigger box style |
| <a id="value"></a> `value?` | `string` | Currently selected value (controlled) |
