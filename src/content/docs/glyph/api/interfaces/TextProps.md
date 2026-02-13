[**@semos-labs/glyph**](../index.md)

***

# Interface: TextProps

Props for the [Text](../variables/Text.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Text content. Can be a string, number, or nested `<Text>` elements for rich inline styling (bold words inside a sentence, etc.). |
| <a id="focusable"></a> `focusable?` | `boolean` | When `true`, the text element participates in the focus (Tab) order. |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](Style.md) | Style applied when this element is focused (merged with `style`). |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Text style (color, bold, dim, italic, underline, etc.). |
| <a id="wrap"></a> `wrap?` | [`WrapMode`](../type-aliases/WrapMode.md) | Text wrapping mode. Overrides `style.wrap`. - `"wrap"` — soft-wrap at the container edge (default) - `"truncate"` — cut off with no indicator - `"ellipsis"` — cut off with `…` - `"none"` — no wrapping at all |
