---
title: 'ScrollViewHandle'
---

Imperative handle exposed by `ScrollView` via `React.forwardRef`.

## Example

```tsx
const ref = useRef<ScrollViewHandle>(null);
<ScrollView ref={ref} style={{ height: 20 }}>
  {items.map(…)}
</ScrollView>

// Scroll to item index 10, centered:
ref.current?.scrollToIndex(10, { block: "center" });
```

## Methods

### scrollTo()

```ts
scrollTo(node, options?): void;
```

Scroll to make the given node visible.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | [`GlyphNode`](#) |
| `options?` | [`ScrollIntoViewOptions`](../../navigation/scroll-into-view-options) |

#### Returns

`void`

***

### scrollToIndex()

```ts
scrollToIndex(index, options?): void;
```

Scroll to make the child at `index` visible (even off-screen items).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `options?` | [`ScrollIntoViewOptions`](../../navigation/scroll-into-view-options) |

#### Returns

`void`
