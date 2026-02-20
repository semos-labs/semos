---
title: 'ttyStringWidth'
---

```ts
function ttyStringWidth(str): number;
```

Compute the display width of a string as rendered in a terminal.

Handles ANSI escape codes (stripped), grapheme clusters (emoji sequences),
and uses terminal-accurate character widths instead of the over-eager
emoji classification in `string-width` v7.

Drop-in replacement for `string-width`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | The string to measure. |

## Returns

`number`

Terminal cell count.

## Example

```ts
ttyStringWidth("hello")         // 5
ttyStringWidth("↗ docs")        // 6  (string-width returns 7!)
ttyStringWidth("文字")           // 4  (CJK, correctly 2 each)
ttyStringWidth("\x1b[31mred\x1b[0m") // 3  (ANSI stripped)
```
