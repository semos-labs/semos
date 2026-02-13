---
title: 'FocusableHandle'
---

Base handle shared by all focusable elements

## Extended by

- [`ButtonHandle`](../../components/button#button-handle)
- [`InputHandle`](../../components/input#input-handle)
- [`SelectHandle`](../../components/select#select-handle)
- [`CheckboxHandle`](../../components/checkbox#checkbox-handle)
- [`RadioHandle`](../../components/radio#radio-handle)
- [`ListHandle`](../../components/list#list-handle)
- [`ImageHandle`](../../components/image#image-handle)
- [`TextHandle`](../../components/text#text-handle)

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
