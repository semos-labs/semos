---
title: 'ScopedKeybinds'
---

```ts
function ScopedKeybinds<S>(__namedParameters): Element | null;
```

Declarative keybind binding driven by a [KeybindRegistry](../create-keybind-registry#keybind-registry) scope.

Reads keybind definitions from the given `scope`, filters to those with a
matching handler, and renders a `<Keybind>` for each one. When `priority`
is set, all rendered keybinds fire before focused-input handlers, letting
them override duplicate keys from other scopes.

## Type Parameters

| Type Parameter |
| ------ |
| `S` *extends* `string` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ScopedKeybindsProps`](#properties)\<`S`\> |

## Returns

`Element` \| `null`

## Examples

```tsx
import { createKeybindRegistry, ScopedKeybinds } from "@semos-labs/glyph";

const registry = createKeybindRegistry({
  global: [
    { key: "q", display: "q", description: "Quit", action: "quit" },
  ],
  list: [
    { key: "j", display: "j / ↓", description: "Next", action: "next" },
    { key: "down", display: "j / ↓", description: "Next", action: "next" },
  ],
});

function MyList() {
  return (
    <ScopedKeybinds
      registry={registry}
      scope="list"
      handlers={{ next: () => moveDown(), prev: () => moveUp() }}
    />
  );
}
```

```tsx
// Priority keybinds override duplicate keys from other scopes
<ScopedKeybinds
  registry={registry}
  scope="dialog"
  handlers={{ confirm: save, cancel: close }}
  priority
/>
```

---

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` *extends* `string` | `string` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="enabled"></a> `enabled?` | `boolean` | Enable / disable all keybinds in this scope. Default `true`. |
| <a id="handlers"></a> `handlers` | [`ActionHandlers`](#action-handlers) | Map of action names to handler functions. Only keybinds whose action has a truthy handler are bound. |
| <a id="priority"></a> `priority?` | `boolean` | When `true`, keybinds run **before** focused-input handlers, overriding duplicate keys from non-priority scopes. |
| <a id="registry"></a> `registry` | [`KeybindRegistry`](../create-keybind-registry#keybind-registry)\<`S`\> | The keybind registry to read from. |
| <a id="scope"></a> `scope` | `S` | Which scope to bind. |

---

## ActionHandlers

```ts
type ActionHandlers = Record<string, () => void | undefined>;
```

Map of action identifiers to handler functions.

Actions whose handler is `undefined` are skipped (no `Keybind` is rendered).
