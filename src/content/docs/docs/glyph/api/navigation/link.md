---
title: 'Link'
---

```ts
const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<LinkHandle>>;
```

Focusable hyperlink for terminal UIs.

Renders link text (or custom children) and opens the URL in the default
browser when the user presses Space or Enter. Focusable by default and
can be disabled.

## Examples

```tsx
<Link href="https://example.com">Visit Example</Link>
```

```tsx
// Minimal — displays the URL as text
<Link href="https://github.com" />
```

```tsx
// Styled link
<Link
  href="https://docs.example.com"
  style={{ color: "blue", underline: true }}
  focusedStyle={{ color: "cyan", bold: true }}
>
  Documentation
</Link>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Custom content. When absent, the `href` is displayed as text. |
| <a id="disabled"></a> `disabled?` | `boolean` | When `true`, the link is skipped in the focus order and ignores input. |
| <a id="focusable"></a> `focusable?` | `boolean` | Whether the link is focusable (default: `true`). |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../../core/style) | Style applied when the link is focused (merged with `style`). |
| <a id="href"></a> `href` | `string` | The URL to open when the link is activated. |
| <a id="onopen"></a> `onOpen?` | () => `void` | Called after the URL has been opened. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Base style for the link container. |

---

## LinkHandle

Handle for Link

## Extends

- [`FocusableHandle`](../../core/focusable-handle)

## Methods

### blur()

```ts
blur(): void;
```

Programmatically blur (unfocus) this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../../core/focusable-handle).[`blur`](../../core/focusable-handle#blur)

***

### focus()

```ts
focus(): void;
```

Programmatically focus this element

#### Returns

`void`

#### Inherited from

[`FocusableHandle`](../../core/focusable-handle).[`focus`](../../core/focusable-handle#focus)

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

#### Inherited from

[`FocusableHandle`](../../core/focusable-handle).[`scrollIntoView`](../../core/focusable-handle#scrollintoview)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="isfocused"></a> `isFocused` | `readonly` | `boolean` | Whether this element is currently focused | [`FocusableHandle`](../../core/focusable-handle).[`isFocused`](../../core/focusable-handle#isfocused) |
