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

Props for the [Text](text.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Text content. Can be a string, number, or nested `<Text>` elements for rich inline styling (bold words inside a sentence, etc.). |
| <a id="focusable"></a> `focusable?` | `boolean` | When `true`, the text element participates in the focus (Tab) order. |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../types/style.md) | Style applied when this element is focused (merged with `style`). |
| <a id="style"></a> `style?` | [`Style`](../types/style.md) | Text style (color, bold, dim, italic, underline, etc.). |
| <a id="wrap"></a> `wrap?` | [`WrapMode`](../types/style.md#wrap-mode) | Text wrapping mode. Overrides `style.wrap`. - `"wrap"` — soft-wrap at the container edge (default) - `"truncate"` — cut off with no indicator - `"ellipsis"` — cut off with `…` - `"none"` — no wrapping at all |

---

## TextHandle

Handle for Text (when focusable)

## Extends

- [`FocusableHandle`](../types/focusable-handle.md)

## Methods

### blur()

```ts
blur(): void;
```

Programmatically blur (unfocus) this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../types/focusable-handle.md).[`blur`](../types/focusable-handle.md#blur)

***

### focus()

```ts
focus(): void;
```

Programmatically focus this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../types/focusable-handle.md).[`focus`](../types/focusable-handle.md#focus)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused | [`FocusableHandle`](../types/focusable-handle.md).[`isFocused`](../types/focusable-handle.md#isfocused) |
