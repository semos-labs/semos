[**@semos-labs/glyph**](../index.md)

***

# Function: Keybind()

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
| `__namedParameters` | [`KeybindProps`](../interfaces/KeybindProps.md) |

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
