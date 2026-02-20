---
title: 'Table'
---

```ts
function Table(__namedParameters): ReactElement;
```

Bordered table built entirely with flexbox.

Renders seamless box-drawing borders around and between every row
and cell. Compose with [TableRow](../table-row) and [TableCell](../table-cell).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`TableProps`](#properties) |

## Returns

`ReactElement`

## Examples

```tsx
<Table border="single" borderColor="cyan">
  <TableRow>
    <TableCell>Name</TableCell>
    <TableCell>Age</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Alice</TableCell>
    <TableCell>30</TableCell>
  </TableRow>
</Table>
```

```tsx
// Clean variant — header separator only
<Table variant="clean" borderColor="gray">
  <TableRow>
    <TableCell style={{ bold: true }}>Name</TableCell>
    <TableCell style={{ bold: true }}>Score</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Alice</TableCell>
    <TableCell>98</TableCell>
  </TableRow>
</Table>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="border"></a> `border?` | [`BorderStyle`](../../core/style#border-style) | Border drawing style. Default `"single"`. |
| <a id="bordercolor"></a> `borderColor?` | [`Color`](../../core/color) | Border / grid-line color. |
| <a id="children"></a> `children?` | `ReactNode` | [TableRow](../table-row) children. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Additional style for the outer table container. |
| <a id="variant"></a> `variant?` | [`TableVariant`](../table-variant) | Layout variant controlling which grid lines are drawn. - `"full"` — all borders: surrounding border, row separators, and column separators (default). - `"clean"` — only a horizontal rule separating the header (first row) from the rest. No surrounding border, no column borders. - `"clean-vertical"` — same as `"clean"` plus vertical borders between columns. No surrounding border, no horizontal borders between data rows. **Default** `"full"` |
| <a id="wrap"></a> `wrap?` | `boolean` | When `true`, each column shrinks to the width of its widest cell content instead of distributing space equally. **Default** `false` |
