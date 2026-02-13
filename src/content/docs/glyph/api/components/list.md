---
title: 'List'
---

```ts
const List: ForwardRefExoticComponent<ListProps & RefAttributes<ListHandle>>;
```

Keyboard-navigable list with vim-style bindings.

Renders `count` items via a `renderItem` function, managing selection
state internally or through controlled props.

**Keyboard shortcuts** (when focused):
| Key | Action |
|---|---|
| ↑ / k | Move selection up |
| ↓ / j | Move selection down |
| gg | Jump to first item |
| G | Jump to last item |
| Enter | Confirm selection |

## Example

```tsx
<List
  count={items.length}
  renderItem={({ index, selected, focused }) => (
    <Box style={{ bg: selected && focused ? "cyan" : undefined }}>
      <Text>{items[index].name}</Text>
    </Box>
  )}
  onSelect={(index) => console.log("Selected:", items[index])}
/>
```

---

## ListProps

Props for the [List](list) component.

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
| <a id="style"></a> `style?` | [`Style`](../../types/style) | Outer box style |

---

## ListItemInfo

Information passed to each item's render function.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="focused"></a> `focused` | `boolean` | Whether the List component itself has focus. |
| <a id="index"></a> `index` | `number` | Zero-based index of this item. |
| <a id="selected"></a> `selected` | `boolean` | Whether this item is currently selected (highlighted). |

---

## ListHandle

Handle for List — exposes selected index

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

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused | [`FocusableHandle`](../../types/focusable-handle).[`isFocused`](../../types/focusable-handle#isfocused) |
| <a id="selectedindex"></a> `selectedIndex` | `readonly` | `number` | Currently selected index | - |
