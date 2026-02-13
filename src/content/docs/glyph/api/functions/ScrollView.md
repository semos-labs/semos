[**@semos-labs/glyph**](../index.md)

***

# Function: ScrollView()

```ts
function ScrollView(__namedParameters): Element;
```

Scrollable container with optional built-in virtualization.

Supports three modes:
1. **Basic** — wraps arbitrary content and scrolls via keyboard.
2. **Array virtualization** — set `virtualize` to only render visible children.
3. **Line virtualization** — pass a render function + `totalLines` for giant lists.

Auto-scrolls to keep the focused child visible when `scrollToFocus` is `true` (default).

**Keyboard shortcuts** (when the ScrollView or a child has focus):
| Key | Action |
|---|---|
| Page Up / Page Down | Scroll one page |
| Ctrl+D / Ctrl+U | Half-page down / up |
| Ctrl+F / Ctrl+B | Full-page down / up |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ScrollViewProps`](../interfaces/ScrollViewProps.md) |

## Returns

`Element`

## Examples

```tsx
// Basic scrollable content
<ScrollView style={{ height: 10, border: "round" }}>
  {items.map((item) => (
    <Text key={item.id}>{item.name}</Text>
  ))}
</ScrollView>
```

```tsx
// Virtualized — only visible children are mounted
<ScrollView virtualize style={{ height: 20 }}>
  {thousandsOfItems.map((item) => (
    <Text key={item.id}>{item.name}</Text>
  ))}
</ScrollView>
```

```tsx
// Line-based virtualization with render function
<ScrollView totalLines={100_000} style={{ height: 20 }}>
  {({ start, end }) =>
    Array.from({ length: end - start }, (_, i) => (
      <Text key={start + i}>Line {start + i}</Text>
    ))
  }
</ScrollView>
```
