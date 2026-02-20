---
title: 'TableCell'
---

```ts
function TableCell(__namedParameters): ReactElement;
```

A single cell inside a [TableRow](../table-row).

Accepts **any React content** as children — plain strings, numbers, or
rich elements like `<Progress>`, `<Spinner>`, `<Link>`, `<Box>`
layouts, nested `<Text>` with inline styles, and more.

Strings and numbers are automatically wrapped in a `Text` element.
Horizontal padding defaults to `1` character on each side (overridable
via `style`).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`TableCellProps`](#properties) |

## Returns

`ReactElement`

## Examples

Simple text
```tsx
<TableCell>Hello</TableCell>
<TableCell style={{ bold: true, color: "cyan" }}>World</TableCell>
```

Status indicator with colored icon
```tsx
<TableCell>
  <Box style={{ flexDirection: "row", gap: 1 }}>
    <Text style={{ color: "green" }}>●</Text>
    <Text>Healthy</Text>
  </Box>
</TableCell>
```

Progress bar — wrap in a flex box so width resolves correctly
```tsx
<TableCell>
  <Box style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
    <Progress value={0.65} showPercent />
  </Box>
</TableCell>
```

Spinner with label
```tsx
<TableCell>
  <Spinner label="Syncing..." style={{ color: "cyan" }} />
</TableCell>
```

Clickable link
```tsx
<TableCell>
  <Link href="https://docs.example.com" focusable={false}>
    <Text style={{ color: "blueBright", underline: true }}>
      View docs
    </Text>
  </Link>
</TableCell>
```

Multi-line stacked content
```tsx
<TableCell>
  <Box style={{ flexDirection: "column" }}>
    <Text style={{ bold: true }}>glyph-core</Text>
    <Text style={{ dim: true, italic: true }}>v2.4.1</Text>
  </Box>
</TableCell>
```

Alignment — centered spinner with vertical centering for tall rows
```tsx
<TableCell align="center" verticalAlign="center">
  <Spinner label="Loading..." style={{ color: "yellow" }} />
</TableCell>
```

Right-aligned numeric value
```tsx
<TableCell align="right">
  <Text style={{ color: "green", bold: true }}>$1,234.56</Text>
</TableCell>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="align"></a> `align?` | [`CellAlign`](../cell-align) | Horizontal alignment of cell content. - `"left"` — align to the start (default) - `"center"` — center content - `"right"` — align to the end **Default** `"left"` |
| <a id="children"></a> `children?` | `ReactNode` | Cell content — can be plain text, numbers, or **any React element**. Strings and numbers are automatically wrapped in a `Text` element. Rich content (e.g. `<Progress>`, `<Spinner>`, `<Box>` layouts, `<Link>`, `<Text>` with inline styling) is passed through as-is. For `<Progress>` bars, wrap them in a flex box so `width: "100%"` resolves relative to the wrapper instead of overflowing the cell: `<TableCell> <Box style={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}> <Progress value={0.7} showPercent /> </Box> </TableCell>` For multi-line cells, use a vertical `<Box>` layout: `<TableCell> <Box style={{ flexDirection: "column" }}> <Text style={{ bold: true }}>Title</Text> <Text style={{ dim: true }}>Subtitle</Text> </Box> </TableCell>` |
| <a id="minwidth"></a> `minWidth?` | `number` | Minimum content width hint (in columns) for `wrap` mode measurement. When a cell contains non-text content (e.g. `<Progress>`, `<Spinner>`, or complex layouts), the automatic text-length measurement returns `0`. Set `minWidth` to tell the table how wide the content should be so column sizing works correctly in `wrap` mode. Has no effect when the table's `wrap` prop is `false` (the default). **Example** `<TableCell minWidth={20}> <Progress value={0.5} /> </TableCell>` |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style for the cell container. Horizontal padding defaults to `1`. |
| <a id="verticalalign"></a> `verticalAlign?` | [`CellVerticalAlign`](../cell-vertical-align) | Vertical alignment of cell content (useful for multi-line rows). - `"top"` — align to the top (default) - `"center"` — center vertically - `"bottom"` — align to the bottom **Default** `"top"` |
