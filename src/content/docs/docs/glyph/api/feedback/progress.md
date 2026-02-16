---
title: 'Progress'
---

```ts
function Progress(__namedParameters): Element;
```

Horizontal progress bar with determinate and indeterminate modes.

In **determinate** mode the filled / empty proportions are rendered
as two [Box](../../layout/box) elements whose widths are controlled by Yoga
(percentage + flexGrow).  This means the bar resizes instantly on
terminal resize with no extra React render cycle.

In **indeterminate** mode the marquee animation uses [useLayout](../../layout/use-layout)
to read the exact track width.  The 100 ms animation timer provides
frequent re-renders so any stale value is corrected quickly.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ProgressProps`](#progress-props) |

## Returns

`Element`

## Examples

```tsx
// Determinate progress
<Progress value={0.65} showPercent label="Downloading" />
```

```tsx
// Indeterminate marquee
<Progress indeterminate label="Loading..." />
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="empty"></a> `empty?` | `string` | Character(s) for the empty portion. Default "░". |
| <a id="filled"></a> `filled?` | `string` | Character(s) for the filled portion. Default "█". |
| <a id="indeterminate"></a> `indeterminate?` | `boolean` | Animate as indeterminate (marquee). Default false. |
| <a id="label"></a> `label?` | `string` | Optional label text displayed before the bar. |
| <a id="showpercent"></a> `showPercent?` | `boolean` | Show percentage text after the bar. Default false. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Outer container style. |
| <a id="value"></a> `value?` | `number` | Progress value 0..1. Omit when indeterminate. |
| <a id="width"></a> `width?` | [`DimensionValue`](../../core/style#dimension-value) | Width of the progress bar. Default "100%". |
