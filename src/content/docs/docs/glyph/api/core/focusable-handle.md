---
title: 'FocusableHandle'
---

Base handle shared by all focusable elements

## Extended by

- [`ButtonHandle`](../../form/button#button-handle)
- [`InputHandle`](../../form/input#input-handle)
- [`SelectHandle`](../../form/select#select-handle)
- [`CheckboxHandle`](../../form/checkbox#checkbox-handle)
- [`RadioHandle`](../../form/radio#radio-handle)
- [`ListHandle`](../../navigation/list#list-handle)
- [`ImageHandle`](../../layout/image#image-handle)
- [`LinkHandle`](../../navigation/link#link-handle)
- [`TextHandle`](../../layout/text#text-handle)

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

Scroll the nearest parent [ScrollView](../../layout/scroll-view) to make this element visible.
Behaves like the DOM `Element.scrollIntoView()` method.
No-op if the element is not inside a ScrollView.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`ScrollIntoViewOptions`](../../navigation/scroll-into-view-options) | Alignment options (default: `{ block: "nearest" }`) |

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
