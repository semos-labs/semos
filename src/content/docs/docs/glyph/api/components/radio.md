---
title: 'Radio'
---

```ts
const Radio: <T>(props) => Element;
```

Single-select radio group with keyboard navigation.

Navigate items with ↑/↓ (or j/k), select with Space or Enter.
Supports both horizontal and vertical layout via `direction`.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `string` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`RadioProps`](radio#radio-props)\<`T`\> & `RefAttributes`\<[`RadioHandle`](radio#radio-handle)\<`T`\>\> |

## Returns

`Element`

## Example

```tsx
const [size, setSize] = useState<string>();

<Radio
  items={[
    { label: "Small",  value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large",  value: "lg" },
  ]}
  value={size}
  onChange={setSize}
/>
```

---

## RadioProps<T>

Props for the [Radio](radio) group component.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `string` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="direction"></a> `direction?` | `"row"` \| `"column"` | Layout direction (default: "column") |
| <a id="disabled"></a> `disabled?` | `boolean` | Whether the entire group is disabled |
| <a id="focuseditemstyle"></a> `focusedItemStyle?` | [`Style`](../../types/style) | Style for the focused item |
| <a id="gap"></a> `gap?` | `number` | Gap between items (default: 0) |
| <a id="items"></a> `items` | [`RadioItem`](radio#radio-item)\<`T`\>[] | Radio options |
| <a id="itemstyle"></a> `itemStyle?` | [`Style`](../../types/style) | Style for each radio item |
| <a id="onchange"></a> `onChange` | (`value`) => `void` | Called when selection changes |
| <a id="selectedchar"></a> `selectedChar?` | `string` | Custom character for selected state (default: "(●)") |
| <a id="selecteditemstyle"></a> `selectedItemStyle?` | [`Style`](../../types/style) | Style for the selected item |
| <a id="style"></a> `style?` | [`Style`](../../types/style) | Style for the radio group container |
| <a id="unselectedchar"></a> `unselectedChar?` | `string` | Custom character for unselected state (default: "(○)") |
| <a id="value"></a> `value` | `T` \| `undefined` | Currently selected value |

---

## RadioItem<T>

A single option inside a [Radio](radio) group.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `string` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | Whether this option is disabled |
| <a id="label"></a> `label` | `string` | Display label |
| <a id="value"></a> `value` | `T` | Value returned on selection |

---

## RadioHandle<T>

Handle for Radio — exposes selected value

## Extends

- [`FocusableHandle`](../../types/focusable-handle)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `string` |

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
| <a id="value"></a> `value` | `readonly` | `T` \| `undefined` | Currently selected value | - |
