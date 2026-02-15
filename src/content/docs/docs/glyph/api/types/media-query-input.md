---
title: 'MediaQueryInput'
---

Query object for [useMediaQuery](../../hooks/use-media-query).

All conditions are combined with AND — every specified constraint must be
satisfied for the query to match.

## Example

```tsx
// Match when terminal is at least 80 columns wide
const isWide = useMediaQuery({ minColumns: 80 });

// Match when terminal is between 40–120 columns and at least 20 rows tall
const isMedium = useMediaQuery({ minColumns: 40, maxColumns: 120, minRows: 20 });
```

## Extended by

- [`MatchProps`](../../components/match#match-props)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="maxcolumns"></a> `maxColumns?` | `number` | Maximum terminal width in columns (inclusive). |
| <a id="maxrows"></a> `maxRows?` | `number` | Maximum terminal height in rows (inclusive). |
| <a id="mincolumns"></a> `minColumns?` | `number` | Minimum terminal width in columns (inclusive). |
| <a id="minrows"></a> `minRows?` | `number` | Minimum terminal height in rows (inclusive). |
