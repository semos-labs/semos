---
title: 'TableCell'
---

```ts
function TableCell(__namedParameters): ReactElement;
```

A single cell inside a [TableRow](../table-row).

Strings and numbers passed as children are automatically wrapped
in a `Text` element. Horizontal padding defaults to `1` character
on each side (overridable via `style`).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`TableCellProps`](#properties) |

## Returns

`ReactElement`

## Example

```tsx
<TableCell>Hello</TableCell>
<TableCell style={{ bold: true, color: "cyan" }}>World</TableCell>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Cell content. Strings and numbers are automatically wrapped in a `Text` element. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style for the cell container. Horizontal padding defaults to `1`. |
