---
title: UseFocusableOptions
---
## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | Whether the element is currently disabled (skipped in tab order) |
| <a id="onblur"></a> `onBlur?` | () => `void` | Called when the element loses focus |
| <a id="onfocus"></a> `onFocus?` | () => `void` | Called when the element receives focus |
| <a id="onkeypress"></a> `onKeyPress?` | (`key`) => `boolean` \| `void` | Key handler when focused. Return `true` to consume the key. This runs after priority handlers but before global handlers. |
