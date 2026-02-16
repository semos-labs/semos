---
title: 'createKeybindRegistry'
---

```ts
function createKeybindRegistry<S>(scopes): KeybindRegistry<S>;
```

Create a static keybind registry from a scope→keybinds mapping.

The returned registry object exposes the raw data together with
helper methods for command lookup, help generation, and scope queries.

## Type Parameters

| Type Parameter |
| ------ |
| `S` *extends* `string` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scopes` | `Record`\<`S`, [`KeybindDef`](#keybind-def)[]\> | A record mapping scope names to arrays of keybind definitions. |

## Returns

[`KeybindRegistry`](#keybind-registry)\<`S`\>

A frozen [KeybindRegistry](#keybind-registry) instance.

## Example

```tsx
import { createKeybindRegistry } from "@semos-labs/glyph";

const registry = createKeybindRegistry({
  global: [
    { key: "?", display: "?", description: "Show help", action: "openHelp", command: "help" },
    { key: ":", display: ":", description: "Open command bar", action: "openCommand" },
    { key: "q", display: "q", description: "Quit", action: "quit", command: "quit" },
  ],
  list: [
    { key: "j", display: "j / ↓", description: "Next item", action: "next" },
    { key: "down", display: "j / ↓", description: "Next item", action: "next" },
    { key: "k", display: "k / ↑", description: "Previous item", action: "prev" },
    { key: "up", display: "k / ↑", description: "Previous item", action: "prev" },
    { key: "return", display: "Enter", description: "Open item", action: "open" },
  ],
});
```

---

## KeybindDef

A single keybind definition within a scope.

## Example

```tsx
const def: KeybindDef = {
  key: "shift+d",
  display: "D",
  description: "Delete item",
  action: "delete",
  command: "delete",
};
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="action"></a> `action` | `string` | Action identifier used to look up the handler in a handlers map. |
| <a id="command"></a> `command?` | `string` | Optional command name for the command palette. Omit to exclude from commands. |
| <a id="description"></a> `description` | `string` | Short description of what the keybind does. |
| <a id="display"></a> `display` | `string` | Human-readable display string shown in help dialogs (e.g. `"D"`, `"Ctrl+u"`). |
| <a id="key"></a> `key` | `string` | Key combo string used for matching (e.g. `"shift+d"`, `"ctrl+u"`, `":"`). Leave empty (`""`) for command-only entries with no keyboard shortcut. |

---

## CommandDef

A command entry extracted from the registry.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="action"></a> `action` | `string` | Action identifier to dispatch. |
| <a id="description"></a> `description` | `string` | Description of the command. |
| <a id="name"></a> `name` | `string` | The command name (from [KeybindDef.command](#keybind-def)). |

---

## KeybindRegistry<S>

A typed keybind registry with helper methods.

Created by createKeybindRegistry. Provides access to the raw
scope→keybind mapping and convenience methods for command lookup,
help generation, and more.

## Example

```tsx
const commands = registry.getAllCommands();
const match = registry.findCommand("goto tomorrow");
const help = registry.getKeybindsForHelp("timeline");
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `S` *extends* `string` | `string` |

## Methods

### findCommand()

```ts
findCommand(input): 
  | {
  action: string;
  args?: string;
  name: string;
}
  | null;
```

Find a command by user input text.

Supports exact matches and parameterised commands (e.g. `"goto <date>"`
matches input `"goto tomorrow"` with `args = "tomorrow"`).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | Raw user input from the command bar. |

#### Returns

  \| \{
  `action`: `string`;
  `args?`: `string`;
  `name`: `string`;
\}
  \| `null`

Matched command with optional args, or `null`.

***

### getAllCommands()

```ts
getAllCommands(): CommandDef[];
```

Collect every keybind that has a `command` field, sorted by name.

#### Returns

[`CommandDef`](#command-def)[]

Sorted array of command definitions.

***

### getKeybindsForHelp()

```ts
getKeybindsForHelp(context, options?): {
  keybinds: KeybindDef[];
  title: string;
}[];
```

Build sections for a help dialog: context-specific, related sub-modes,
then global keybinds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `context` | `S` | The primary scope to display. |
| `options?` | [`HelpOptions`](#help-options)\<`S`\> | Optional related scopes and titles. |

#### Returns

\{
  `keybinds`: [`KeybindDef`](#keybind-def)[];
  `title`: `string`;
\}[]

Ordered sections for rendering.

***

### getKeybindsForScope()

```ts
getKeybindsForScope(scope): KeybindDef[];
```

Get de-duplicated keybinds for a scope (unique by `display`).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scope` | `S` | Scope name. |

#### Returns

[`KeybindDef`](#keybind-def)[]

Keybinds with duplicate display values removed.

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="scopes"></a> `scopes` | `readonly` | `Readonly`\<`Record`\<`S`, [`KeybindDef`](#keybind-def)[]\>\> | The raw scope→keybinds mapping. |

---

## HelpOptions<S>

Options for [KeybindRegistry.getKeybindsForHelp](#keybind-registry).

## Type Parameters

| Type Parameter |
| ------ |
| `S` *extends* `string` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="globalscope"></a> `globalScope?` | `S` | Which scope is the global scope (always appended last). Default: `"global"` if it exists in the registry, otherwise omitted. |
| <a id="related"></a> `related?` | `S`[] | Related sub-mode scopes to include after the primary scope. |
| <a id="scopetitles"></a> `scopeTitles?` | `Partial`\<`Record`\<`S`, `string`\>\> | Human-readable titles for scopes. Falls back to the scope key. |
