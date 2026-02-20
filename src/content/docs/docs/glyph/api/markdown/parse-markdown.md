---
title: 'parseMarkdown'
---

```ts
function parseMarkdown(source): Root;
```

Parse a markdown string into an mdast AST.

Supports GitHub Flavored Markdown (tables, task lists, strikethrough).
Uses `unified` with `remark-parse` and `remark-gfm`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `source` | `string` | Raw markdown string to parse. |

## Returns

`Root`

The parsed mdast root node.

## Example

```ts
import { parseMarkdown } from "@semos-labs/glyph-markdown";

const ast = parseMarkdown("# Hello **world**");
console.log(ast.children[0].type); // "heading"
```
