---
title: 'useScrollIntoView'
---

```ts
function useScrollIntoView(nodeRef): (options?) => void;
```

Returns a function that scrolls the nearest parent [ScrollView](../../layout/scroll-view)
to make the referenced node visible.

This is the non-focusable counterpart to `handle.scrollIntoView()` —
use it with plain `Box` refs or any `GlyphNode`.

Works both when the calling component is **inside** the ScrollView
(via React context) and when it is **outside** (by walking up the
target node's parent chain).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nodeRef` | \{ `current`: [`GlyphNode`](#) \| `null`; \} | React ref pointing to the target node. |
| `nodeRef.current` | [`GlyphNode`](#) \| `null` | - |

## Returns

A stable callback you can invoke to scroll to the node.

```ts
(options?): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`ScrollIntoViewOptions`](../scroll-into-view-options) |

### Returns

`void`

## Example

```tsx
const boxRef = useRef<GlyphNode>(null);
const scrollIntoView = useScrollIntoView(boxRef);

// Later, e.g. in an effect or event handler:
scrollIntoView();                       // minimal scroll
scrollIntoView({ block: "center" });    // center in viewport
```
