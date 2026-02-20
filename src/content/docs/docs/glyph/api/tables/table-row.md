---
title: 'TableRow'
---

```ts
function TableRow(props): ReactElement;
```

A single row inside a [Table](../table).

Must be a direct child of `<Table>`. Contains one or more
[TableCell](../table-cell) elements. Cells can hold any React content — when
one cell is taller than others (e.g. multi-line content), vertical
borders stretch to match.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`TableRowProps`](#properties) |

## Returns

`ReactElement`

## Examples

Plain text row
```tsx
<TableRow>
  <TableCell>Alice</TableCell>
  <TableCell>30</TableCell>
</TableRow>
```

Rich content row — status badge, progress bar, link
```tsx
<TableRow>
  <TableCell style={{ bold: true }}>API Gateway</TableCell>
  <TableCell>
    <Box style={{ flexDirection: "row", gap: 1 }}>
      <Text style={{ color: "green" }}>●</Text>
      <Text>Healthy</Text>
    </Box>
  </TableCell>
  <TableCell>
    <Box style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
      <Progress value={0.42} />
    </Box>
  </TableCell>
  <TableCell>
    <Link href="https://api.example.com" focusable={false}>
      <Text style={{ color: "blueBright", underline: true }}>
        api.example.com
      </Text>
    </Link>
  </TableCell>
</TableRow>
```

Multi-line row — stacked content in cells
```tsx
<TableRow>
  <TableCell>
    <Box style={{ flexDirection: "column" }}>
      <Text style={{ bold: true }}>glyph-core</Text>
      <Text style={{ dim: true, italic: true }}>v2.4.1</Text>
    </Box>
  </TableCell>
  <TableCell>
    <Box style={{ flexDirection: "column" }}>
      <Text>142 changes</Text>
      <Text style={{ dim: true }}>Last commit: 2h ago</Text>
    </Box>
  </TableCell>
</TableRow>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | [TableCell](../table-cell) children. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style applied to the content row (the row containing the cells). |
