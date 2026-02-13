---
title: 'useFocusRegistry'
---

```ts
function useFocusRegistry(): FocusRegistryValue | null;
```

Access all registered focusable elements and navigation helpers.

Useful for building custom navigation UIs, accessibility overlays,
or debug tools. Respects the current [FocusScope](../../components/focus-scope) trap.

## Returns

[`FocusRegistryValue`](use-focus-registry#focus-registry-value) \| `null`

Registry value, or `null` outside a Glyph render tree.

## Example

```tsx
const registry = useFocusRegistry();
if (registry) {
  console.log(`${registry.elements.length} focusable elements`);
  registry.focusNext();
}
```

---

## FocusableElement

Descriptor for a single focusable element in the registry.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | Unique focus ID |
| <a id="layout"></a> `layout` | [`LayoutRect`](../../types/layout-rect) | Current layout (position, size) |
| <a id="node"></a> `node` | [`GlyphNode`](#) | The GlyphNode |
| <a id="type"></a> `type` | `string` | Node type (box, input, etc.) |

---

## FocusRegistryValue

Return type of [useFocusRegistry](use-focus-registry).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="elements"></a> `elements` | [`FocusableElement`](use-focus-registry#focusable-element)[] | All currently registered focusable elements |
| <a id="focusedid"></a> `focusedId` | `string` \| `null` | Currently focused element ID |
| <a id="focusnext"></a> `focusNext` | () => `void` | Move to next focusable element |
| <a id="focusprev"></a> `focusPrev` | () => `void` | Move to previous focusable element |
| <a id="refresh"></a> `refresh` | () => `void` | Manually refresh the element list (useful after layout updates) |
| <a id="requestfocus"></a> `requestFocus` | (`id`) => `void` | Request focus on a specific element |
