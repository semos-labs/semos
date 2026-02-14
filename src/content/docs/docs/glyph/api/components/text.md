---
title: 'Text'
---

```ts
const Text: ForwardRefExoticComponent<TextProps & RefAttributes<TextHandle>>;
```

Renders styled text in the terminal.

Supports inline nesting for rich text — wrap portions of text in
additional `<Text>` elements with different styles:

## Examples

```tsx
<Text style={{ color: "white" }}>
  Hello <Text style={{ bold: true, color: "cyan" }}>World</Text>!
</Text>
```

```tsx
// Focusable text with highlight
<Text focusable focusedStyle={{ bg: "cyan", color: "black" }}>
  Press Tab to reach me
</Text>
```

---

## TextProps

Props for the [Text](text) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Text content. Can be a string, number, or nested `<Text>` elements for rich inline styling (bold words inside a sentence, etc.). |
| <a id="focusable"></a> `focusable?` | `boolean` | When `true`, the text element participates in the focus (Tab) order. |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../../types/style) | Style applied when this element is focused (merged with `style`). |
| <a id="style"></a> `style?` | [`Style`](../../types/style) | Text style (color, bold, dim, italic, underline, etc.). |
| <a id="wrap"></a> `wrap?` | [`WrapMode`](../../types/style#wrap-mode) | Text wrapping mode. Overrides `style.wrap`. - `"wrap"` — soft-wrap at the container edge (default) - `"truncate"` — cut off with no indicator - `"ellipsis"` — cut off with `…` - `"none"` — no wrapping at all |

---

## TextHandle

Handle for Text (when focusable)

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
