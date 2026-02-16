---
title: 'StatusBar'
---

```ts
function StatusBar(__namedParameters): Element;
```

Unified status bar with optional command palette, search, and message system.

Wraps application content in a column layout with the bar pinned at the
bottom. Descendants can call [useStatusBar](../use-status-bar) to post messages that
appear in the bar.

**Command mode** (optional) — activated by pressing `commandKey` (default
`":"`). Shows a filterable command palette built from the provided
[KeybindRegistry](../../keybindings/create-keybind-registry#keybind-registry). Requires `commands` and `onCommand` props.

**Search mode** (optional) — activated by pressing `searchKey` (default
`"/"`). Calls `onSearch` as the user types. Requires `onSearch` prop.

**Messages** — call `useStatusBar().showMessage()` from anywhere in the
tree to display temporary status messages (success, error, progress, etc.).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`StatusBarProps`](#properties) |

## Returns

`Element`

## Examples

```tsx
import { StatusBar, useStatusBar, createKeybindRegistry } from "@semos-labs/glyph";

const registry = createKeybindRegistry({
  global: [
    { key: "q", display: "q", description: "Quit", action: "quit", command: "quit" },
    { key: "?", display: "?", description: "Help", action: "help", command: "help" },
  ],
});

function App() {
  return (
    <StatusBar
      commands={registry}
      onCommand={(action) => dispatch(action)}
      onSearch={(q) => search(q)}
      right={<Text bold>12:30</Text>}
      status={<Text dim>Ready</Text>}
    >
      <Box style={{ flexGrow: 1 }}>
        <MainContent />
      </Box>
    </StatusBar>
  );
}
```

```tsx
// Post messages from anywhere in the tree
function SaveButton() {
  const bar = useStatusBar();

  const save = async () => {
    bar.showMessage({ text: "Saving…", type: "progress", durationMs: 0 });
    await doSave();
    bar.showMessage({ text: "Saved!", type: "success" });
  };

  return <Button label="Save" onPress={save} />;
}
```

---

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | Application content. Rendered above the status bar in a column layout. Descendants can call [useStatusBar](../use-status-bar) to post messages. |
| <a id="commandkey"></a> `commandKey?` | `string` | Key that activates command mode. Default `":"`. |
| <a id="commandplaceholder"></a> `commandPlaceholder?` | `string` | Placeholder text for the command input. Default `"Type a command…"`. |
| <a id="commands"></a> `commands?` | [`KeybindRegistry`](../../keybindings/create-keybind-registry#keybind-registry)\<`any`\> | Keybind registry — enables command mode. When provided, pressing `commandKey` opens a command palette with filterable commands extracted from the registry. |
| <a id="messageduration"></a> `messageDuration?` | `number` | Default auto-dismiss duration for messages in ms. Default `3000`. |
| <a id="oncommand"></a> `onCommand?` | (`action`, `args?`) => `void` | Called when a command is executed from the palette. |
| <a id="onsearch"></a> `onSearch?` | (`query`) => `void` | Called as the user types in search mode. Providing this callback enables search mode (activated by `searchKey`). |
| <a id="onsearchdismiss"></a> `onSearchDismiss?` | () => `void` | Called when search mode is dismissed (Escape). |
| <a id="onsearchnavigate"></a> `onSearchNavigate?` | (`direction`) => `void` | Called when Up/Down is pressed in search mode. |
| <a id="onsearchsubmit"></a> `onSearchSubmit?` | (`query`) => `void` | Called when Enter is pressed in search mode. |
| <a id="right"></a> `right?` | `ReactNode` | Content rendered on the right side of the bar. Supports any single-line content (clock, auth indicator, key hints, etc.). |
| <a id="searchkey"></a> `searchKey?` | `string` | Key that activates search mode. Default `"/"`. |
| <a id="searchplaceholder"></a> `searchPlaceholder?` | `string` | Placeholder text for the search input. Default `"Search…"`. |
| <a id="status"></a> `status?` | `ReactNode` | Default content shown on the left side when idle and no message is active. Typically contextual info like "next event" or "selected file". |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Style applied to the status bar row. |

---

## StatusBarMessage

A message displayed in the status bar.

## Example

```tsx
const bar = useStatusBar();
bar.showMessage({ text: "Saved!", type: "success" });
bar.showMessage({ text: "Syncing…", type: "progress", durationMs: 0 });
```

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="durationms"></a> `durationMs?` | `number` | Auto-dismiss duration in ms. Overrides the component-level `messageDuration` for this message. Set `0` to persist until manually cleared. |
| <a id="text"></a> `text` | `string` | Message text. |
| <a id="type"></a> `type?` | [`MessageType`](#message-type) | Visual variant. Default `"info"`. |

---

## StatusBarContextValue

Value exposed by the StatusBar context.

## Methods

### clearMessage()

```ts
clearMessage(): void;
```

Immediately clear the current message.

#### Returns

`void`

***

### showMessage()

```ts
showMessage(message): void;
```

Display a message in the status bar.
Pass a string for a simple info message or a [StatusBarMessage](#status-bar-message) for full control.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` \| [`StatusBarMessage`](#status-bar-message) |

#### Returns

`void`

---

## MessageType

```ts
type MessageType = "info" | "success" | "warning" | "error" | "progress";
```

Visual type for a status bar message.
