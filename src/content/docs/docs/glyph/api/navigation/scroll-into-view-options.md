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
