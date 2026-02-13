---
title: FocusRegistryValue
---
Return type of [useFocusRegistry](../functions/useFocusRegistry.md).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="elements"></a> `elements` | [`FocusableElement`](FocusableElement.md)[] | All currently registered focusable elements |
| <a id="focusedid"></a> `focusedId` | `string` \| `null` | Currently focused element ID |
| <a id="focusnext"></a> `focusNext` | () => `void` | Move to next focusable element |
| <a id="focusprev"></a> `focusPrev` | () => `void` | Move to previous focusable element |
| <a id="refresh"></a> `refresh` | () => `void` | Manually refresh the element list (useful after layout updates) |
| <a id="requestfocus"></a> `requestFocus` | (`id`) => `void` | Request focus on a specific element |
