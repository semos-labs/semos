[**@semos-labs/glyph**](../index.md)

***

# Interface: ProgressProps

Props for the [Progress](../functions/Progress.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="empty"></a> `empty?` | `string` | Character(s) for the empty portion. Default "░". |
| <a id="filled"></a> `filled?` | `string` | Character(s) for the filled portion. Default "█". |
| <a id="indeterminate"></a> `indeterminate?` | `boolean` | Animate as indeterminate (marquee). Default false. |
| <a id="label"></a> `label?` | `string` | Optional label text displayed before the bar. |
| <a id="showpercent"></a> `showPercent?` | `boolean` | Show percentage text after the bar. Default false. |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Outer container style. |
| <a id="value"></a> `value?` | `number` | Progress value 0..1. Omit when indeterminate. |
| <a id="width"></a> `width?` | [`DimensionValue`](../type-aliases/DimensionValue.md) | Width of the progress bar. Default "100%". |
