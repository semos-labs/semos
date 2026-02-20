---
title: 'ttyCharWidth'
---

```ts
function ttyCharWidth(ch): number;
```

Compute the display width of a single character in a terminal cell.

Fast-paths ASCII (always 1) and uses codepointWidth for
non-ASCII.  Used by the diff engine for cursor tracking.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ch` | `string` | A single character (may be a grapheme cluster). |

## Returns

`number`

0, 1, or 2.

## Example

```ts
ttyCharWidth("a")  // 1
ttyCharWidth("文") // 2
ttyCharWidth("↗")  // 1
```
