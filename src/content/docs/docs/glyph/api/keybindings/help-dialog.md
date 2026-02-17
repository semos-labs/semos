---
title: 'HelpDialog'
---

```ts
function HelpDialog<S>(__namedParameters): Element;
```

Full-screen help dialog that displays keybinds from a [KeybindRegistry](../create-keybind-registry#keybind-registry).

The dialog auto-registers a toggle keybind (default `?`) so users can
open it without any extra wiring. Keybinds are grouped by scope,
filtered in real-time, and displayed inside a scrollable overlay.

## Type Parameters

| Type Parameter |
| ------ |
| `S` *extends* `string` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`HelpDialogProps`](#properties)\<`S`\> |

## Returns

`Element`

## Examples

```tsx
import { HelpDialog, createKeybindRegistry } from "@semos-labs/glyph";

const registry = createKeybindRegistry({
  global: [
    { key: "?", display: "?", description: "Show help", action: "help", command: "help" },
    { key: "q", display: "q", description: "Quit", action: "quit", command: "quit" },
  ],
  list: [
    { key: "j", display: "j / ↓", description: "Next item", action: "next" },
  ],
});

function App() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <Box style={{ flexDirection: "column", flexGrow: 1 }}>
      <MyContent />
      <HelpDialog
        registry={registry}
        context="list"
        helpOptions={{ scopeTitles: { global: "Global", list: "List" } }}
        open={showHelp}
        onClose={() => setShowHelp(false)}
        toggleKey="?"
      />
    </Box>
  );
}
```

```tsx
// Disable the built-in toggle keybind and manage it yourself
<HelpDialog
  registry={registry}
  context="editor"
  open={helpVisible}
  onClose={() => setHelpVisible(false)}
  toggleKey={null}
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
| <a id="backdropstyle"></a> `backdropStyle?` | [`Style`](../../core/style) | Optional style overrides for the backdrop overlay. |
| <a id="children"></a> `children?` | `ReactNode` | Optional additional content rendered below the keybind list. |
| <a id="context"></a> `context` | `S` | The currently active scope (determines which keybinds are shown first). Additional scopes (including global) are appended automatically. |
| <a id="filterplaceholder"></a> `filterPlaceholder?` | `string` | Placeholder text for the filter input. Default: `"Filter shortcuts…"`. |
| <a id="height"></a> `height?` | `number` \| `` `${number}%` `` | Height of the dialog card. Default: `"80%"`. |
| <a id="helpoptions"></a> `helpOptions?` | [`HelpOptions`](../create-keybind-registry#help-options)\<`S`\> | Options forwarded to [KeybindRegistry.getKeybindsForHelp](../create-keybind-registry#keybind-registry), including scope titles and related scopes. |
| <a id="keycolumnwidth"></a> `keyColumnWidth?` | `number` | Width of the shortcut key column (columns). Default: `12`. |
| <a id="onclose"></a> `onClose` | () => `void` | Called when the dialog should close (e.g. Escape pressed). |
| <a id="open"></a> `open` | `boolean` | Whether the help dialog is currently visible. When `false`, nothing is rendered. |
| <a id="registry"></a> `registry` | [`KeybindRegistry`](../create-keybind-registry#keybind-registry)\<`S`\> | The keybind registry to display help from. |
| <a id="style"></a> `style?` | [`Style`](../../core/style) | Optional style overrides for the dialog card. |
| <a id="title"></a> `title?` | `string` | Title shown at the top of the dialog. Default: `"Keyboard Shortcuts"`. |
| <a id="togglekey"></a> `toggleKey?` | `string` \| `null` | Key combo that toggles the dialog open / closed. Default: `"?"`. Set to `""` or `null` to disable the built-in keybind (you'll manage toggling yourself). |
| <a id="width"></a> `width?` | `number` | Width of the dialog card (columns). Default: `48`. |
