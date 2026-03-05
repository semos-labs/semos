---
title: 'Box'
---

```ts
const Box: ForwardRefExoticComponent<BoxProps & RefAttributes<GlyphNode>>;
```

Generic layout container — the building block of every Glyph UI.

`Box` maps directly to a Yoga flexbox node, so all CSS-like flex
properties (`flexDirection`, `gap`, `padding`, `alignItems`, …) work
out of the box.

## Examples

```tsx
<Box style={{ flexDirection: "row", gap: 1, padding: 1 }}>
  <Text>Hello</Text>
  <Text>World</Text>
</Box>
```

```tsx
// Centered card with a border
<Box
  style={{
    border: "round",
    borderColor: "cyan",
    padding: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 10,
  }}
>
  <Text style={{ bold: true }}>Welcome!</Text>
</Box>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Child elements to render inside the box. |
| <a id="focusable"></a> `focusable?` | `boolean` | When `true`, the box participates in the focus (Tab) order. |
| <a id="onclick"></a> `onClick?` | [`MouseEventHandler`](../../core/style#mouse-event-handler) | Called on mouse click (mouseup). |
| <a id="onmousedown"></a> `onMouseDown?` | [`MouseEventHandler`](../../core/style#mouse-event-handler) | Called on mouse button press. |
| <a id="onmouseenter"></a> `onMouseEnter?` | [`MouseEventHandler`](../../core/style#mouse-event-handler) | Called when the mouse cursor enters the box. |
| <a id="onmouseleave"></a> `onMouseLeave?` | [`MouseEventHandler`](../../core/style#mouse-event-handler) | Called when the mouse cursor leaves the box. |
| <a id="onmousemove"></a> `onMouseMove?` | [`MouseEventHandler`](../../core/style#mouse-event-handler) | Called on mouse movement over the box. |
| <a id="onmouseup"></a> `onMouseUp?` | [`MouseEventHandler`](../../core/style#mouse-event-handler) | Called on mouse button release. |
| <a id="onwheel"></a> `onWheel?` | [`MouseEventHandler`](../../core/style#mouse-event-handler) | Called on mouse wheel scroll. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Flexbox style object controlling layout, colors, borders, and more. |
