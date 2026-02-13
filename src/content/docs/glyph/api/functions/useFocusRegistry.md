---
title: 'useFocusRegistry'
---
```ts
function useFocusRegistry(): FocusRegistryValue | null;
```

Access all registered focusable elements and navigation helpers.

Useful for building custom navigation UIs, accessibility overlays,
or debug tools. Respects the current [FocusScope](FocusScope.md) trap.

## Returns

[`FocusRegistryValue`](../interfaces/FocusRegistryValue.md) \| `null`

Registry value, or `null` outside a Glyph render tree.

## Example

```tsx
const registry = useFocusRegistry();
if (registry) {
  console.log(`${registry.elements.length} focusable elements`);
  registry.focusNext();
}
```
