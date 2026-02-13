[**@semos-labs/glyph**](../index.md)

***

# Function: parseAnsi()

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

[`StyledSegment`](../interfaces/StyledSegment.md)[]

Array of segments with text and associated style
