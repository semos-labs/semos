---
title: 'Match'
---

```ts
function Match(__namedParameters): Element | null;
```

Conditionally render content based on terminal dimensions.

`Match` evaluates a media query against the current terminal size and
renders `children` when all conditions are met, or `fallback` otherwise.
The component re-renders automatically on terminal resize.

All query props are combined with AND — every specified constraint must
be satisfied for `children` to render.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`MatchProps`](#properties) |

## Returns

`Element` \| `null`

## Examples

```tsx
// Show wide layout on terminals ≥ 80 columns
<Match minColumns={80}>
  <HorizontalLayout />
</Match>
```

```tsx
// With a fallback for narrow terminals
<Match minColumns={80} fallback={<CompactView />}>
  <FullView />
</Match>
```

```tsx
// Compound query — width AND height
<Match minColumns={120} minRows={30}>
  <DashboardLayout />
</Match>
```

---

## Extends

- [`MediaQueryInput`](../../layout/media-query-input)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Content to render when the media query matches. | - |
| <a id="fallback"></a> `fallback?` | `ReactNode` | Content to render when the media query does **not** match. **Default** `null` | - |
| <a id="maxcolumns"></a> `maxColumns?` | `number` | Maximum terminal width in columns (inclusive). | [`MediaQueryInput`](../../layout/media-query-input).[`maxColumns`](../../layout/media-query-input#maxcolumns) |
| <a id="maxrows"></a> `maxRows?` | `number` | Maximum terminal height in rows (inclusive). | [`MediaQueryInput`](../../layout/media-query-input).[`maxRows`](../../layout/media-query-input#maxrows) |
| <a id="mincolumns"></a> `minColumns?` | `number` | Minimum terminal width in columns (inclusive). | [`MediaQueryInput`](../../layout/media-query-input).[`minColumns`](../../layout/media-query-input#mincolumns) |
| <a id="minrows"></a> `minRows?` | `number` | Minimum terminal height in rows (inclusive). | [`MediaQueryInput`](../../layout/media-query-input).[`minRows`](../../layout/media-query-input#minrows) |
