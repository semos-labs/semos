---
title: 'useInput'
---
```ts
function useInput(handler, deps?): void;
```

Subscribe to raw keyboard input.

The handler is called for **every** key press that is not consumed by a
focused input handler or a priority [Keybind](Keybind.md). This is the
lowest-level input hook — prefer `Keybind` for simple shortcuts and
component-level handlers for focused input.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `handler` | (`key`) => `void` | `undefined` | Callback receiving the parsed [Key](../interfaces/Key.md). |
| `deps` | `any`[] | `[]` | Dependency array (same semantics as `useEffect`). |

## Returns

`void`

## Example

```tsx
useInput((key) => {
  if (key.name === "q" && !key.ctrl) exit();
});
```
