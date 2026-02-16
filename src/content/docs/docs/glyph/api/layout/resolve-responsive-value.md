---
title: 'resolveResponsiveValue'
---

```ts
function resolveResponsiveValue<T>(value, columns): T;
```

Resolve a single [Responsive](../../core/style#responsive) value to its concrete type.

Uses **mobile-first** logic: iterates breakpoints from smallest to
largest, picking the value from the last breakpoint whose threshold is
≤ `columns`.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | \| `T` \| \{ `base?`: `T`; `lg?`: `T`; `md?`: `T`; `sm?`: `T`; `xl?`: `T`; \} | A plain value or responsive breakpoint object. |
| `columns` | `number` | Current terminal width in columns. |

## Returns

`T`

The concrete resolved value.

## Example

```ts
resolveResponsiveValue({ base: "column", md: "row" }, 100);
// => "row"  (100 ≥ 80)

resolveResponsiveValue(42, 100);
// => 42  (plain values pass through)
```
