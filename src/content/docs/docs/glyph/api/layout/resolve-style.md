---
title: 'resolveStyle'
---

```ts
function resolveStyle(
   style, 
   columns, 
   _rows): ResolvedStyle;
```

Resolve all [Responsive](../../core/style#responsive) values in a [Style](../../core/style) to produce a
[ResolvedStyle](../../core/style#resolved-style) with only concrete values.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `style` | [`Style`](../../core/style) | The (possibly responsive) style object from a component. |
| `columns` | `number` | Current terminal width in columns. |
| `_rows` | `number` | Current terminal height in rows (reserved for future row-based breakpoints). |

## Returns

[`ResolvedStyle`](../../core/style#resolved-style)

A new style object with every responsive value collapsed.

## Example

```ts
const resolved = resolveStyle(
  { padding: { base: 0, md: 1 }, bg: "red" },
  100,
  40,
);
// => { padding: 1, bg: "red" }
```
