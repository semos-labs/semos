---
title: 'Spinner'
---
```ts
function Spinner(__namedParameters): Element;
```

Animated spinner indicator.

Uses braille dot characters by default, cycling at 80 ms per frame.
Supply custom `frames` for different animation styles.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`SpinnerProps`](../interfaces/SpinnerProps.md) |

## Returns

`Element`

## Examples

```tsx
<Spinner label="Loading..." style={{ color: "cyan" }} />
```

```tsx
// Custom frames
<Spinner frames={["◐", "◓", "◑", "◒"]} intervalMs={120} />
```
