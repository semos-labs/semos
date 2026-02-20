---
title: 'Markdown'
---

```ts
const Markdown: NamedExoticComponent<MarkdownProps>;
```

Renders a markdown string as Glyph terminal UI components.

Supports headings, paragraphs, lists, code blocks with syntax highlighting,
blockquotes, tables (GFM), links, images, and inline formatting.

Syntax highlighting is loaded lazily — Shiki only initializes when the
document contains code blocks. Code blocks render immediately with plain
text, then re-render with highlighting once Shiki is ready.

## Examples

```tsx
<Markdown>{source}</Markdown>
```

```tsx
// Disable highlighting
<Markdown highlight={false}>{source}</Markdown>
```

```tsx
// Custom options
<Markdown highlight={{ langs: ["typescript", "python"] }}>{source}</Markdown>
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children` | `string` | Markdown source string. |
| <a id="highlight"></a> `highlight?` | \| `false` \| [`Highlighter`](../create-highlighter#highlighter) \| [`CreateHighlighterOptions`](../create-highlighter#create-highlighter-options) | Control syntax highlighting for code blocks. - `undefined` (default): auto-loads Shiki lazily when code blocks are present - `Highlighter` instance: use a pre-created highlighter - `false`: disable syntax highlighting entirely - `CreateHighlighterOptions`: auto-load with custom options |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style applied to the outer container. |
