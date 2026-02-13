---
title: 'Progress'
---
```ts
function Progress(__namedParameters): Element;
```

Horizontal progress bar with determinate and indeterminate modes.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ProgressProps`](../interfaces/ProgressProps.md) |

## Returns

`Element`

## Examples

```tsx
// Determinate progress
<Progress value={0.65} showPercent label="Downloading" />
```

```tsx
// Indeterminate marquee
<Progress indeterminate label="Loading..." />
```
