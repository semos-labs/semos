---
title: 'ScrollView'
---

```ts
const ScrollView: ForwardRefExoticComponent<ScrollViewProps & RefAttributes<ScrollViewHandle>>;
```

Scrollable container.

Supports three modes:
1. **Array children** (default) — all children rendered, overflow clipped.
   Yoga has every layout position, so follow-focus is pixel-perfect.
2. **Virtualized array** (`virtualize` prop) — only visible items mounted
   (sliding window).  Good for huge lists where rendering everything would
   be too expensive.
3. **Line virtualization** — pass a render function + `totalLines`.

Auto-scrolls to keep the focused child visible when `scrollToFocus` is
`true` (default).

**Keyboard shortcuts** (when the ScrollView or a child has focus):
| Key | Action |
|---|---|
| Page Up / Page Down | Scroll one page |
| Ctrl+D / Ctrl+U | Half-page down / up |
| Ctrl+F / Ctrl+B | Full-page down / up |

## Examples

```tsx
// Basic scrollable list — all children rendered, overflow clipped
<ScrollView style={{ height: 10, border: "round" }}>
  {items.map((item) => (
    <Text key={item.id}>{item.name}</Text>
  ))}
</ScrollView>
```

```tsx
// Virtualized list — only visible items mounted
<ScrollView virtualize style={{ height: 10, border: "round" }}>
  {items.map((item) => (
    <Text key={item.id}>{item.name}</Text>
  ))}
</ScrollView>
```

```tsx
// Line-based virtualization with render function
<ScrollView totalLines={100_000} style={{ height: 20 }}>
  {({ start, end }) =>
    Array.from({ length: end - start }, (_, i) => (
      <Text key={start + i}>Line {start + i}</Text>
    ))
  }
</ScrollView>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` \| (`range`) => `ReactNode` | Children to render. Can also be a render function `(range: VisibleRange) => ReactNode` for line-based virtualization. |
| <a id="defaultscrolloffset"></a> `defaultScrollOffset?` | `number` | Initial offset for uncontrolled mode |
| <a id="disablekeyboard"></a> `disableKeyboard?` | `boolean` | Disable keyboard scrolling |
| <a id="estimateditemheight"></a> `estimatedItemHeight?` | `number` | Estimated height per child in lines (default: 1). Only used in virtualized mode for initial scroll calculations before actual heights are measured. |
| <a id="focusable"></a> `focusable?` | `boolean` | Make ScrollView itself focusable. Default: true. Set to false if you want scroll to follow child focus only. |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](../../core/style) | Style applied when ScrollView is focused |
| <a id="onscroll"></a> `onScroll?` | (`offset`) => `void` | Callback when scroll offset should change (controlled mode) |
| <a id="overscan"></a> `overscan?` | `number` | Extra lines to render above/below viewport (default: 2) |
| <a id="scrolloffset"></a> `scrollOffset?` | `number` | Controlled scroll offset (rows from top) |
| <a id="scrollstep"></a> `scrollStep?` | `number` | Lines to scroll per arrow key press (default: 1) |
| <a id="scrolltofocus"></a> `scrollToFocus?` | `boolean` | Auto-scroll to focused element (default: true) |
| <a id="showscrollbar"></a> `showScrollbar?` | `boolean` | Show scrollbar when content is scrollable (default: true) |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | - |
| <a id="totallines"></a> `totalLines?` | `number` | Total content height in lines (for render function mode). When set with a render function, enables line-based virtualization. |
| <a id="virtualize"></a> `virtualize?` | `boolean` | Enable sliding-window virtualization for array children. When true, only visible items (+ overscan) are mounted. When false (default), all children are rendered and clipped — like browser overflow scrolling. This gives Yoga full layout info so `scrollIntoView` / follow-focus positions are always accurate. |

---

## VisibleRange

Visible range passed to the render function in virtualized mode.
Contains the start/end indices and viewport metadata.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="end"></a> `end` | `number` | One past the last visible line index |
| <a id="scrolloffset"></a> `scrollOffset` | `number` | Current scroll offset |
| <a id="start"></a> `start` | `number` | First visible line index (0-based) |
| <a id="viewportheight"></a> `viewportHeight` | `number` | Viewport height in lines |
