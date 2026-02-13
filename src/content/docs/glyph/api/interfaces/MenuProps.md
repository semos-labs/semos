---
title: 'MenuProps'
---
Props for the [Menu](../functions/Menu.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="defaultselectedindex"></a> `defaultSelectedIndex?` | `number` | Initial index for uncontrolled mode |
| <a id="focusable"></a> `focusable?` | `boolean` | Whether the menu is focusable (default: true) |
| <a id="highlightcolor"></a> `highlightColor?` | [`Color`](../type-aliases/Color.md) | Color for the selected item indicator and text (default: "cyan") |
| <a id="items"></a> `items` | [`MenuItem`](MenuItem.md)[] | - |
| <a id="onselect"></a> `onSelect?` | (`value`, `index`) => `void` | Callback when enter is pressed on item |
| <a id="onselectionchange"></a> `onSelectionChange?` | (`index`) => `void` | Callback when selected index changes |
| <a id="selectedindex"></a> `selectedIndex?` | `number` | Controlled selected index |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Outer box style |
