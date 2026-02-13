---
title: 'useLayout'
---

```ts
function useLayout(nodeRef?): LayoutRect;
```

Subscribe to the computed layout of a node.

Returns a [LayoutRect](../../types/layout-rect) that updates whenever the layout engine
recalculates positions (e.g. on resize or content change).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nodeRef?` | \{ `current`: [`GlyphNode`](#) \| `null`; \} | React ref pointing to the target [GlyphNode](#). |
| `nodeRef.current?` | [`GlyphNode`](#) \| `null` | - |

## Returns

[`LayoutRect`](../../types/layout-rect)

Current layout rectangle (outer + inner bounds).

## Example

```tsx
const boxRef = useRef<GlyphNode>(null);
const layout = useLayout(boxRef);

<Box ref={boxRef}>
  <Text>Width: {layout.innerWidth} Height: {layout.innerHeight}</Text>
</Box>
```
