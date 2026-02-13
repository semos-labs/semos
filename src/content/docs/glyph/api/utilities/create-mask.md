---
title: 'createMask'
---

```ts
function createMask(maskOrOptions): (newValue, oldValue) => string | false | void;
```

Creates a mask handler for use with Input's onBeforeChange prop.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maskOrOptions` | `string` \| [`MaskOptions`](create-mask#mask-options) | Mask pattern string or options object |

## Returns

onBeforeChange handler function

```ts
(newValue, oldValue): string | false | void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `newValue` | `string` |
| `oldValue` | `string` |

### Returns

`string` \| `false` \| `void`

---

## MaskOptions

Input mask utilities for Glyph Input component.

Mask pattern characters:
- `9` - Digit (0-9)
- `a` - Letter (a-z, A-Z)
- `*` - Alphanumeric (a-z, A-Z, 0-9)
- Any other character is treated as a literal (separator)

## Example

```tsx
import { createMask } from "@semos-labs/glyph";

// Phone: (123) 456-7890
const phoneMask = createMask("(999) 999-9999");
<Input onBeforeChange={phoneMask} />

// Date: 12/31/2024
const dateMask = createMask("99/99/9999");
<Input onBeforeChange={dateMask} />

// License plate: ABC-1234
const plateMask = createMask("aaa-9999");
<Input onBeforeChange={plateMask} />
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="mask"></a> `mask` | `string` | The mask pattern |
| <a id="placeholder"></a> `placeholder?` | `string` | Placeholder character for unfilled positions (default: "_") |
| <a id="showplaceholder"></a> `showPlaceholder?` | `boolean` | Show placeholder in output (default: false) |
