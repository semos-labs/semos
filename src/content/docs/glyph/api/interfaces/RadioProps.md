---
title: 'RadioProps<T>'
---
Props for the [Radio](../variables/Radio.md) group component.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `string` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="direction"></a> `direction?` | `"row"` \| `"column"` | Layout direction (default: "column") |
| <a id="disabled"></a> `disabled?` | `boolean` | Whether the entire group is disabled |
| <a id="focuseditemstyle"></a> `focusedItemStyle?` | [`Style`](Style.md) | Style for the focused item |
| <a id="gap"></a> `gap?` | `number` | Gap between items (default: 0) |
| <a id="items"></a> `items` | [`RadioItem`](RadioItem.md)\<`T`\>[] | Radio options |
| <a id="itemstyle"></a> `itemStyle?` | [`Style`](Style.md) | Style for each radio item |
| <a id="onchange"></a> `onChange` | (`value`) => `void` | Called when selection changes |
| <a id="selectedchar"></a> `selectedChar?` | `string` | Custom character for selected state (default: "●") |
| <a id="selecteditemstyle"></a> `selectedItemStyle?` | [`Style`](Style.md) | Style for the selected item |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Style for the radio group container |
| <a id="unselectedchar"></a> `unselectedChar?` | `string` | Custom character for unselected state (default: "○") |
| <a id="value"></a> `value` | `T` \| `undefined` | Currently selected value |
