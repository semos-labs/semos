---
title: 'useFocus'
---

```ts
function useFocus(nodeRef?): UseFocusResult;
```

Low-level hook that registers a node in the focus system and tracks
whether it is currently focused.

For most use-cases, prefer the higher-level [useFocusable](use-focusable.md) hook
or built-in focusable components (`Button`, `Input`, …).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nodeRef?` | \{ `current`: [`GlyphNode`](#) \| `null`; \} | React ref pointing to the underlying [GlyphNode](#). |
| `nodeRef.current?` | [`GlyphNode`](#) \| `null` | - |

## Returns

[`UseFocusResult`](#)

An object with the current `focused` state and a `focus()` method.

## Example

```tsx
const nodeRef = useRef<GlyphNode>(null);
const { focused, focus } = useFocus(nodeRef);

<Box ref={nodeRef} focusable style={{ bg: focused ? "cyan" : undefined }}>
  {focused ? "I have focus!" : "Press Tab"}
</Box>
```
