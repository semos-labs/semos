---
title: 'FocusableHandle'
---

Base handle shared by all focusable elements

## Extended by

- [`ButtonHandle`](../components/button.md#button-handle)
- [`InputHandle`](../components/input.md#input-handle)
- [`SelectHandle`](../components/select.md#select-handle)
- [`CheckboxHandle`](../components/checkbox.md#checkbox-handle)
- [`RadioHandle`](../components/radio.md#radio-handle)
- [`ListHandle`](../components/list.md#list-handle)
- [`ImageHandle`](../components/image.md#image-handle)
- [`TextHandle`](../components/text.md#text-handle)

## Methods

### blur()

```ts
blur(): void;
```

Programmatically blur (unfocus) this element

#### Returns

`void`

***

### focus()

```ts
focus(): void;
```

Programmatically focus this element

#### Returns

`void`

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused |
