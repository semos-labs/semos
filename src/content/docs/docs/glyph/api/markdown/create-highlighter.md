---
title: 'createHighlighter'
---

```ts
function createHighlighter(options?): Promise<Highlighter>;
```

Create a syntax highlighter backed by Shiki (TextMate grammars).

By default uses a terminal-native theme whose colors adapt to your
terminal palette. Pass a `theme` name to use a Shiki built-in theme
with fixed hex colors instead.

The `<Markdown>` component handles this automatically — you only need
`createHighlighter` when sharing a single instance across multiple
components or when you need manual control.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`CreateHighlighterOptions`](#create-highlighter-options) | Optional theme and language configuration. |

## Returns

`Promise`\<[`Highlighter`](#highlighter)\>

A [Highlighter](#highlighter) instance ready to tokenize code.

## Examples

```ts
const hl = await createHighlighter();
const tokens = hl.highlight("const x = 1;", "typescript");
```

```ts
// Share across multiple Markdown components
const hl = await createHighlighter({ langs: ["tsx", "python"] });
<Markdown highlight={hl}>{doc1}</Markdown>
<Markdown highlight={hl}>{doc2}</Markdown>
```

---

## Highlighter

A syntax highlighter instance that tokenizes code strings.

Created via createHighlighter. Can be passed to the `<Markdown>`
component's `highlight` prop to share a single Shiki instance across
multiple renders.

## Methods

### highlight()

```ts
highlight(code, lang?): HighlightToken[][];
```

Tokenize a code string into styled lines.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | `string` |
| `lang?` | `string` |

#### Returns

[`HighlightToken`](#highlight-token)[][]

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="loadedlanguages"></a> `loadedLanguages` | `readonly` | `string`[] | List of currently loaded language grammar IDs. |

---

## HighlightToken

A single token of highlighted code with optional styling.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="bold"></a> `bold?` | `boolean` | Whether the token should be rendered bold. |
| <a id="color"></a> `color?` | `string` | Foreground color — either a Glyph named color or a hex string. |
| <a id="content"></a> `content` | `string` | The text content of the token. |
| <a id="italic"></a> `italic?` | `boolean` | Whether the token should be rendered italic. |
| <a id="underline"></a> `underline?` | `boolean` | Whether the token should be rendered with underline. |

---

## CreateHighlighterOptions

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="langs"></a> `langs?` | `BundledLanguage`[] | Languages to load. Defaults to a common set. |
| <a id="theme"></a> `theme?` | `BundledTheme` | Shiki theme name. When omitted, uses a built-in terminal-native theme that outputs ANSI named colors (inherits from the terminal palette). |
