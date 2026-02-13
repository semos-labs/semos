---
title: 'FocusableHandle'
---
Base handle shared by all focusable elements

## Extended by

- [`ButtonHandle`](ButtonHandle.md)
- [`InputHandle`](InputHandle.md)
- [`SelectHandle`](SelectHandle.md)
- [`CheckboxHandle`](CheckboxHandle.md)
- [`RadioHandle`](RadioHandle.md)
- [`ListHandle`](ListHandle.md)
- [`ImageHandle`](ImageHandle.md)
- [`TextHandle`](TextHandle.md)

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
