---
title: 'TableHeaderRow'
---

```ts
function TableHeaderRow(props): ReactElement;
```

Convenience component for table header rows.

Behaves exactly like [TableRow](../table-row) but applies bold text styling
by default, reducing boilerplate for the common pattern of bolding
every header cell.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`TableHeaderRowProps`](#properties) |

## Returns

`ReactElement`

## Examples

Basic header
```tsx
<Table borderColor="cyan">
  <TableHeaderRow>
    <TableCell>Name</TableCell>
    <TableCell>Status</TableCell>
    <TableCell>Score</TableCell>
  </TableHeaderRow>
  <TableRow>
    <TableCell>Alice</TableCell>
    <TableCell>Active</TableCell>
    <TableCell>98</TableCell>
  </TableRow>
</Table>
```

Colored header with alignment
```tsx
<Table border="round" borderColor="magenta">
  <TableHeaderRow style={{ color: "magentaBright" }}>
    <TableCell>Service</TableCell>
    <TableCell align="center">Status</TableCell>
    <TableCell align="right">Load</TableCell>
  </TableHeaderRow>
  <TableRow>
    <TableCell>API Gateway</TableCell>
    <TableCell align="center">
      <Text style={{ color: "green" }}>● Healthy</Text>
    </TableCell>
    <TableCell align="right">42%</TableCell>
  </TableRow>
</Table>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | [TableCell](../table-cell) children representing column headers. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style applied to the header row. Bold text is applied by default. |
