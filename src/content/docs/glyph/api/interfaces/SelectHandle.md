[**@semos-labs/glyph**](../index.md)

***

# Interface: SelectHandle

Handle for Select — exposes current selected value

## Extends

- [`FocusableHandle`](FocusableHandle.md)

## Methods

### blur()

```ts
blur(): void;
```

Programmatically blur (unfocus) this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](FocusableHandle.md).[`blur`](FocusableHandle.md#blur)

***

### focus()

```ts
focus(): void;
```

Programmatically focus this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](FocusableHandle.md).[`focus`](FocusableHandle.md#focus)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused | [`FocusableHandle`](FocusableHandle.md).[`isFocused`](FocusableHandle.md#isfocused) |
| <a id="isopen"></a> `isOpen` | `readonly` | `boolean` | Whether the dropdown is currently open | - |
| <a id="value"></a> `value` | `readonly` | `string` \| `undefined` | Currently selected value (undefined if nothing selected) | - |
