---
title: 'render'
---

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
| `opts` | [`RenderOptions`](#render-options) | Optional configuration (custom streams, debug mode, cursor). |

## Returns

[`AppHandle`](#app-handle)

An [AppHandle](#app-handle) with `unmount()` and `exit()` methods.

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

---

## RenderOptions

Options for the top-level render function.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="debug"></a> `debug?` | `boolean` | - |
| <a id="stdin"></a> `stdin?` | `ReadStream` | - |
| <a id="stdout"></a> `stdout?` | `WriteStream` | - |
| <a id="usenativecursor"></a> `useNativeCursor?` | `boolean` | Use the terminal's native cursor instead of a simulated one. Enables cursor shaders/animations in supported terminals. Default: true |

---

## AppHandle

Handle returned by render, used to control the application lifecycle.

## Methods

### exit()

```ts
exit(code?): void;
```

Exit the process with an optional exit code.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `code?` | `number` |

#### Returns

`void`

***

### unmount()

```ts
unmount(): void;
```

Tear down the React tree and clean up terminal state.

#### Returns

`void`
