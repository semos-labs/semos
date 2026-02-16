---
title: 'useStatusBar'
---

```ts
function useStatusBar(): StatusBarContextValue;
```

Access the status bar message API from anywhere inside a [StatusBar](../status-bar).

## Returns

[`StatusBarContextValue`](../status-bar#status-bar-context-value)

An object with `showMessage` and `clearMessage` methods.

## Example

```tsx
const bar = useStatusBar();

bar.showMessage("Quick info");
bar.showMessage({ text: "Saved!", type: "success" });
bar.showMessage({ text: "Loading…", type: "progress", durationMs: 0 });
bar.clearMessage();
```
