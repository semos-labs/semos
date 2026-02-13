---
title: 'parseAnsi'
---

```ts
function parseAnsi(input): StyledSegment[];
```

Parse a string with ANSI escape codes into styled segments.

Handles:
- SGR codes: \x1b[<params>m (colors, bold, italic, etc.)
- Resets escape sequences to plain text

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | String potentially containing ANSI escape codes |

## Returns

[`StyledSegment`](parse-ansi.md#styled-segment)[]

Array of segments with text and associated style

---

## AnsiStyle

## Properties

| Property | Type |
| ------ | ------ |
| <a id="bg"></a> `bg?` | [`Color`](../types/color.md) |
| <a id="bold"></a> `bold?` | `boolean` |
| <a id="dim"></a> `dim?` | `boolean` |
| <a id="fg"></a> `fg?` | [`Color`](../types/color.md) |
| <a id="italic"></a> `italic?` | `boolean` |
| <a id="underline"></a> `underline?` | `boolean` |

---

## StyledSegment

## Properties

| Property | Type |
| ------ | ------ |
| <a id="style"></a> `style` | [`AnsiStyle`](parse-ansi.md#ansi-style) |
| <a id="text"></a> `text` | `string` |
