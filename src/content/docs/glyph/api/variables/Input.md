---
title: Input
---
```ts
const Input: ForwardRefExoticComponent<InputProps & RefAttributes<InputHandle>>;
```

Text input with full keyboard editing, cursor navigation, and optional masking.

Supports both controlled (`value` + `onChange`) and uncontrolled (`defaultValue`)
modes. Multiline editing is opt-in via the `multiline` prop.

**Keyboard shortcuts** (when focused):
| Key | Action |
|---|---|
| ← / → | Move cursor |
| Home / End | Start / end of line |
| Ctrl+A / Ctrl+E | Start / end of line |
| Ctrl+W | Delete word backward |
| Ctrl+K | Delete to end of line |
| Alt+← / Alt+→ | Move by word |
| Alt+Backspace | Delete word backward |
| Up / Down | Navigate visual lines (multiline / wrapped) |

## Examples

```tsx
const [name, setName] = useState("");

<Input
  value={name}
  onChange={setName}
  placeholder="Your name"
  style={{ border: "round", paddingX: 1 }}
  focusedStyle={{ borderColor: "cyan" }}
/>
```

```tsx
// Masked phone input
import { masks } from "@semos-labs/glyph";

<Input
  value={phone}
  onChange={setPhone}
  onBeforeChange={masks.usPhone}
  placeholder="(555) 555-5555"
/>
```
