---
title: 'ScrollIntoViewOptions'
---

Options for ScrollViewContextValue.scrollTo and
[FocusableHandle.scrollIntoView](../../core/focusable-handle#scrollintoview).

## Example

```tsx
ref.current?.scrollIntoView({ block: "center" });
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="block"></a> `block?` | `"center"` \| `"start"` \| `"end"` \| `"nearest"` | Where to align the element relative to the viewport. - `"nearest"` — minimal scroll to make visible (default) - `"start"` — align element top with viewport top - `"center"` — center element in viewport - `"end"` — align element bottom with viewport bottom |

---

## FrameTiming

Per-phase timing breakdown of a single `performRender` call (ms).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="diff"></a> `diff` | `number` | Character-level diff + ANSI escape generation. |
| <a id="layout"></a> `layout` | `number` | Responsive style resolution + Yoga layout. |
| <a id="paint"></a> `paint` | `number` | Rasterise GlyphNode tree into the framebuffer. |
| <a id="swap"></a> `swap` | `number` | Copy currentFb → prevFb. |
| <a id="total"></a> `total` | `number` | Total frame time (layout + paint + diff + swap). |
