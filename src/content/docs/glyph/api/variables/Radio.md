[**@semos-labs/glyph**](../index.md)

***

# Variable: Radio()

```ts
const Radio: <T>(props) => Element;
```

Single-select radio group with keyboard navigation.

Navigate items with ↑/↓ (or j/k), select with Space or Enter.
Supports both horizontal and vertical layout via `direction`.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `string` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`RadioProps`](../interfaces/RadioProps.md)\<`T`\> & `RefAttributes`\<[`RadioHandle`](../interfaces/RadioHandle.md)\<`T`\>\> |

## Returns

`Element`

## Example

```tsx
const [size, setSize] = useState<string>();

<Radio
  items={[
    { label: "Small",  value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large",  value: "lg" },
  ]}
  value={size}
  onChange={setSize}
/>
```
