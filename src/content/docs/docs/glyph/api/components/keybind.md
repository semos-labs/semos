---
title: 'Keybind'
---

```ts
function Keybind(__namedParameters): null;
```

Declarative keyboard shortcut handler (renders nothing).

Add `<Keybind>` anywhere in your tree to react to specific key
combinations. Supports modifier keys (`ctrl`, `alt`, `shift`, `meta`)
and a `priority` flag to run before focused input handlers.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`KeybindProps`](keybind#keybind-props) |

## Returns

`null`

## Examples

```tsx
// Global quit shortcut
<Keybind keypress="ctrl+q" onPress={() => exit()} />
```

```tsx
// Priority keybind that fires even when an Input is focused
<Keybind keypress="ctrl+enter" onPress={submit} priority />
```

```tsx
// Only fires when a specific element is focused
<Keybind keypress="delete" onPress={handleDelete} whenFocused={itemFocusId} />
```

---

## KeybindProps

Props for the [Keybind](keybind) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | Disabled state |
| <a id="global"></a> `global?` | `boolean` | Only fire when nothing is focused or the focused element doesn't consume the key |
| <a id="keypress"></a> `keypress` | `string` | Key descriptor, e.g. "q", "escape", "ctrl+c", "ctrl+shift+a" |
| <a id="onpress"></a> `onPress` | () => `void` | Handler called when the key matches |
| <a id="priority"></a> `priority?` | `boolean` | If true, this keybind runs BEFORE focused input handlers. Use for keybinds that should work even when an Input is focused (e.g., Ctrl+Enter to submit). |
| <a id="whenfocused"></a> `whenFocused?` | `string` | Only fire when this focus ID is active |
