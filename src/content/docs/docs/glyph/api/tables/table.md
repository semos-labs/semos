---
title: 'Table'
---

```ts
function Table(__namedParameters): ReactElement;
```

Bordered table built entirely with flexbox.

Renders seamless box-drawing borders around and between every row
and cell. Compose with [TableRow](../table-row) (or [TableHeaderRow](../table-header-row))
and [TableCell](../table-cell).

Cells support **rich content** — any React element works as cell
children, including `<Progress>`, `<Spinner>`, `<Link>`, `<Box>`
layouts, and `<Text>` with inline styling. Multi-line cells are
fully supported; vertical borders stretch automatically.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`TableProps`](#properties) |

## Returns

`ReactElement`

## Examples

Basic text table
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

Clean variant with header row
```tsx
<Table variant="clean" borderColor="gray">
  <TableHeaderRow>
    <TableCell>Name</TableCell>
    <TableCell>Score</TableCell>
  </TableHeaderRow>
  <TableRow>
    <TableCell>Alice</TableCell>
    <TableCell>98</TableCell>
  </TableRow>
</Table>
```

Status indicators — colored icons with text
```tsx
<Table border="round" borderColor="cyan">
  <TableHeaderRow>
    <TableCell>Service</TableCell>
    <TableCell>Status</TableCell>
  </TableHeaderRow>
  <TableRow>
    <TableCell>API</TableCell>
    <TableCell>
      <Box style={{ flexDirection: "row", gap: 1 }}>
        <Text style={{ color: "green" }}>●</Text>
        <Text>Healthy</Text>
      </Box>
    </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>Database</TableCell>
    <TableCell>
      <Box style={{ flexDirection: "row", gap: 1 }}>
        <Text style={{ color: "red" }}>●</Text>
        <Text>Down</Text>
      </Box>
    </TableCell>
  </TableRow>
</Table>
```

Progress bars in cells — wrap in a flex box so width resolves correctly
```tsx
<Table borderColor="blue">
  <TableHeaderRow>
    <TableCell>Task</TableCell>
    <TableCell>Progress</TableCell>
  </TableHeaderRow>
  <TableRow>
    <TableCell>Build</TableCell>
    <TableCell>
      <Box style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
        <Progress value={0.75} showPercent />
      </Box>
    </TableCell>
  </TableRow>
</Table>
```

Multi-line cells — stacked content with vertical borders
```tsx
<Table border="double" borderColor="green">
  <TableHeaderRow>
    <TableCell>Project</TableCell>
    <TableCell>Details</TableCell>
  </TableHeaderRow>
  <TableRow>
    <TableCell>
      <Box style={{ flexDirection: "column" }}>
        <Text style={{ bold: true }}>glyph-core</Text>
        <Text style={{ dim: true }}>v2.4.1</Text>
      </Box>
    </TableCell>
    <TableCell>
      <Box style={{ flexDirection: "column" }}>
        <Box style={{ flexDirection: "row", gap: 1 }}>
          <Text style={{ color: "green" }}>+142</Text>
          <Text style={{ color: "red" }}>-38</Text>
        </Box>
        <Text style={{ dim: true }}>Last commit: 2h ago</Text>
      </Box>
    </TableCell>
  </TableRow>
</Table>
```

Spinners and links
```tsx
<Table variant="clean-vertical" borderColor="magenta">
  <TableHeaderRow>
    <TableCell>Service</TableCell>
    <TableCell>Activity</TableCell>
    <TableCell>Docs</TableCell>
  </TableHeaderRow>
  <TableRow>
    <TableCell>Auth</TableCell>
    <TableCell>
      <Spinner label="Processing" style={{ color: "green" }} />
    </TableCell>
    <TableCell>
      <Link href="https://docs.example.com/auth">
        <Text style={{ color: "blueBright", underline: true }}>
          docs.example.com
        </Text>
      </Link>
    </TableCell>
  </TableRow>
</Table>
```

Cell alignment
```tsx
<Table borderColor="yellow">
  <TableHeaderRow>
    <TableCell>Left (default)</TableCell>
    <TableCell align="center">Centered</TableCell>
    <TableCell align="right">Right-aligned</TableCell>
  </TableHeaderRow>
  <TableRow>
    <TableCell>Alice</TableCell>
    <TableCell align="center">98</TableCell>
    <TableCell align="right">
      <Text style={{ color: "green" }}>✓ Pass</Text>
    </TableCell>
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
