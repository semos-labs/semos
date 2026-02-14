---
title: 'Image'
---

```ts
const Image: ForwardRefExoticComponent<ImageProps & RefAttributes<ImageHandle>>;
```

Inline image for terminal UIs.

Displays a placeholder until the user presses Space (or set `autoLoad`).
Supports Kitty and iTerm2 graphics protocols for true inline rendering,
with fallback to OS-level preview. Press Escape to unload.

## Examples

```tsx
<Image src="./logo.png" width={40} height={12} />
```

```tsx
// Auto-load with auto-size
<Image
  src="https://example.com/photo.jpg"
  autoLoad
  autoSize
  maxWidth={60}
  maxHeight={20}
/>
```

---

## ImageProps

Props for the [Image](image) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="autoload"></a> `autoLoad?` | `boolean` | Auto-load on mount (default: false - user presses space) |
| <a id="autosize"></a> `autoSize?` | `boolean` | Auto-size the box to fit the image dimensions (default: false). When true, the box resizes to match the image's aspect ratio. Use maxWidth/maxHeight to constrain the size. |
| <a id="disabled"></a> `disabled?` | `boolean` | Whether the component is disabled (skipped in tab order, no key handling) |
| <a id="focusable"></a> `focusable?` | `boolean` | Whether the component is focusable (default: true) |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../../types/style) | Style when focused |
| <a id="height"></a> `height?` | `number` | Fixed height in cells (optional, uses flexbox if not set) |
| <a id="inline"></a> `inline?` | `boolean` | Allow inline rendering in terminal (default: true) |
| <a id="maxheight"></a> `maxHeight?` | `number` | Maximum height in cells when autoSize is true |
| <a id="maxwidth"></a> `maxWidth?` | `number` | Maximum width in cells when autoSize is true |
| <a id="onerror"></a> `onError?` | (`error`) => `void` | Called on error |
| <a id="onstatechange"></a> `onStateChange?` | (`state`) => `void` | Called when image state changes |
| <a id="placeholder"></a> `placeholder?` | `string` | Custom placeholder text (default: image name) |
| <a id="placeholderstyle"></a> `placeholderStyle?` | [`Style`](../../types/style) | Style for the placeholder |
| <a id="src"></a> `src` | `string` | Image source - local path or remote URL |
| <a id="style"></a> `style?` | [`Style`](../../types/style) | Container style (flexbox) |
| <a id="unloadtrigger"></a> `unloadTrigger?` | `number` | Force unload trigger - increment this value to force the image to unload. Useful when parent component handles Escape or other close actions. Example: <Image unloadTrigger={unloadCount} ... /> |
| <a id="width"></a> `width?` | `number` | Fixed width in cells (optional, uses flexbox if not set) |

---

## ImageState

```ts
type ImageState = "placeholder" | "loading" | "loaded" | "error" | "preview";
```

Lifecycle state of the [Image](image) component.
- `"placeholder"` — waiting for user to press Space to load
- `"loading"` — image data is being fetched / decoded
- `"loaded"` — rendered inline via Kitty / iTerm2 protocol
- `"error"` — loading failed
- `"preview"` — opened via OS-level preview (Quick Look / xdg-open)

---

## ImageHandle

Handle for Image

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
