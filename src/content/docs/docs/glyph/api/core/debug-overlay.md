---
title: 'DebugOverlay'
---

```ts
function DebugOverlay(__namedParameters): Element | null;
```

Floating debug HUD showing real-time rendering metrics.

Renders as an absolute-positioned overlay in a chosen corner of the
screen.  Displays current frame time, average, and optionally a
per-phase breakdown and sparkline history — useful for profiling
without leaving the application.

Respects the `debug` flag from `render(element, { debug: true })`.
When debug mode is off, this component renders nothing — safe to
leave in your tree unconditionally.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`DebugOverlayProps`](#properties) |

## Returns

`Element` \| `null`

## Example

```tsx
import { DebugOverlay } from "@semos-labs/glyph";

function App() {
  return (
    <Box style={{ width: "100%", height: "100%" }}>
      <MyContent />
      <DebugOverlay />
    </Box>
  );
}
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="phases"></a> `phases?` | `boolean` | Show per-phase breakdown (layout / paint / diff / swap). Defaults to `true`. |
| <a id="position"></a> `position?` | `"top-right"` \| `"top-left"` \| `"bottom-right"` \| `"bottom-left"` | Corner to anchor the overlay. Defaults to `"top-right"`. |
| <a id="sparkline"></a> `sparkline?` | `boolean` | Show sparkline graph of recent frame times. Defaults to `true`. |
| <a id="style"></a> `style?` | [`Style`](../style) | Override the default overlay style. Merged on top of the base style. |
