[**@semos-labs/glyph**](../index.md)

***

# Interface: ListProps

Props for the [List](../variables/List.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="count"></a> `count` | `number` | Total number of items |
| <a id="defaultselectedindex"></a> `defaultSelectedIndex?` | `number` | Initial index for uncontrolled mode |
| <a id="disabledindices"></a> `disabledIndices?` | `Set`\<`number`\> | Set of disabled indices that are skipped during navigation |
| <a id="focusable"></a> `focusable?` | `boolean` | Whether the list is focusable (default: true) |
| <a id="onselect"></a> `onSelect?` | (`index`) => `void` | Callback when enter is pressed on selected item |
| <a id="onselectionchange"></a> `onSelectionChange?` | (`index`) => `void` | Callback when selected index should change |
| <a id="renderitem"></a> `renderItem` | (`info`) => `ReactNode` | Render function for each item |
| <a id="selectedindex"></a> `selectedIndex?` | `number` | Controlled selected index |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Outer box style |
