---
title: 'TableRow'
---

```ts
function TableRow(props): ReactElement;
```

A single row inside a [Table](../table).

Must be a direct child of `<Table>`. Contains one or more
[TableCell](../table-cell) elements.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`TableRowProps`](#properties) |

## Returns

`ReactElement`

## Example

```tsx
<TableRow>
  <TableCell>Alice</TableCell>
  <TableCell>30</TableCell>
</TableRow>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | [TableCell](../table-cell) children. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style applied to the content row (the row containing the cells). |
