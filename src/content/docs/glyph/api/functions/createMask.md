[**@semos-labs/glyph**](../index.md)

***

# Function: createMask()

```ts
function createMask(maskOrOptions): (newValue, oldValue) => string | false | void;
```

Creates a mask handler for use with Input's onBeforeChange prop.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maskOrOptions` | `string` \| [`MaskOptions`](../interfaces/MaskOptions.md) | Mask pattern string or options object |

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
