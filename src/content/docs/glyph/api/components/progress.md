---
title: 'Progress'
---

```ts
function Progress(__namedParameters): Element;
```

Horizontal progress bar with determinate and indeterminate modes.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ProgressProps`](progress.md#progress-props) |

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

## ProgressProps

Props for the [Progress](progress.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="empty"></a> `empty?` | `string` | Character(s) for the empty portion. Default "░". |
| <a id="filled"></a> `filled?` | `string` | Character(s) for the filled portion. Default "█". |
| <a id="indeterminate"></a> `indeterminate?` | `boolean` | Animate as indeterminate (marquee). Default false. |
| <a id="label"></a> `label?` | `string` | Optional label text displayed before the bar. |
| <a id="showpercent"></a> `showPercent?` | `boolean` | Show percentage text after the bar. Default false. |
| <a id="style"></a> `style?` | [`Style`](../types/style.md) | Outer container style. |
| <a id="value"></a> `value?` | `number` | Progress value 0..1. Omit when indeterminate. |
| <a id="width"></a> `width?` | [`DimensionValue`](../types/style.md#dimension-value) | Width of the progress bar. Default "100%". |
