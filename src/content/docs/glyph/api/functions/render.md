[**@semos-labs/glyph**](../index.md)

***

# Function: render()

```ts
function render(element, opts?): AppHandle;
```

Mount a React element into the terminal and start the render loop.

This is the entry point for every Glyph application. It sets up the
terminal (raw mode, alternate screen), creates the React reconciler,
and begins painting frames.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `element` | `ReactElement` | Root React element to render. |
| `opts` | [`RenderOptions`](../interfaces/RenderOptions.md) | Optional configuration (custom streams, debug mode, cursor). |

## Returns

[`AppHandle`](../interfaces/AppHandle.md)

An [AppHandle](../interfaces/AppHandle.md) with `unmount()` and `exit()` methods.

## Example

```tsx
import { render, Box, Text } from "@semos-labs/glyph";

function App() {
  return (
    <Box style={{ padding: 1 }}>
      <Text style={{ bold: true, color: "cyan" }}>Hello Glyph!</Text>
    </Box>
  );
}

render(<App />);
```
