---
title: KeybindProps
---
Props for the [Keybind](../functions/Keybind.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | Disabled state |
| <a id="global"></a> `global?` | `boolean` | Only fire when nothing is focused or the focused element doesn't consume the key |
| <a id="keypress"></a> `keypress` | `string` | Key descriptor, e.g. "q", "escape", "ctrl+c", "ctrl+shift+a" |
| <a id="onpress"></a> `onPress` | () => `void` | Handler called when the key matches |
| <a id="priority"></a> `priority?` | `boolean` | If true, this keybind runs BEFORE focused input handlers. Use for keybinds that should work even when an Input is focused (e.g., Ctrl+Enter to submit). |
| <a id="whenfocused"></a> `whenFocused?` | `string` | Only fire when this focus ID is active |
