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

***

### scrollIntoView()

```ts
scrollIntoView(options?): void;
```

Scroll the nearest parent [ScrollView](../../components/scroll-view) to make this element visible.
Behaves like the DOM `Element.scrollIntoView()` method.
No-op if the element is not inside a ScrollView.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ScrollIntoViewOptions`](../scroll-into-view-options) | Alignment options (default: `{ block: "nearest" }`) |

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

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused |
