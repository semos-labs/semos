---
title: Keybindings
description: Rebind hotkeys and configure keyboard shortcuts in Attyx.
sidebar:
  order: 3
---

All hotkeys in Attyx can be rebound via the `[keybindings]` table in your config file. Changes apply immediately on [hot reload](/docs/attyx/configuration/#hot-reload).

## Configuration

```toml
[keybindings]
search_toggle = "ctrl+f"
search_next = "ctrl+g"
search_prev = "ctrl+shift+g"
scroll_page_up = "shift+page_up"
scroll_page_down = "shift+page_down"
scroll_to_top = "shift+home"
scroll_to_bottom = "shift+end"
config_reload = "ctrl+shift+r"
new_window = "ctrl+shift+n"
close_window = "ctrl+shift+w"
```

## Disabling a keybinding

Bind an action to `"none"` to disable it:

```toml
[keybindings]
debug_toggle = "none"
```

## Key combo syntax

Format: `modifier+key`

**Modifiers:** `ctrl`, `shift`, `alt` (or `option`), `super` (or `cmd`)

**Keys:** `a`–`z`, `0`–`9`, `f1`–`f12`, `enter`, `tab`, `escape`, `backspace`, `delete`, `insert`, `space`, `page_up`, `page_down`, `home`, `end`, `up`, `down`, `left`, `right`

Combine multiple modifiers with `+`:

```
ctrl+shift+r
super+shift+g
alt+enter
```

## Default keybindings

### General

| Action | macOS | Linux |
|---|---|---|
| `config_reload` | `ctrl+shift+r` | `ctrl+shift+r` |
| `command_palette` | `super+shift+p` | `ctrl+shift+p` |
| `new_window` | `ctrl+shift+n` | `ctrl+shift+n` |
| `close_window` | `ctrl+shift+w` | `ctrl+shift+w` |

### Search

| Action | macOS | Linux |
|---|---|---|
| `search_toggle` | `super+f` | `ctrl+f` |
| `search_next` | `super+g` | `ctrl+g` |
| `search_prev` | `super+shift+g` | `ctrl+shift+g` |

### Copy / Paste

| Action | macOS | Linux |
|---|---|---|
| `copy` | *(system menu)* | `ctrl+shift+c` |
| `paste` | *(system menu)* | `ctrl+shift+v` |
| `copy_mode` | `ctrl+shift+space` | `ctrl+shift+space` |

### Scrolling

| Action | macOS | Linux |
|---|---|---|
| `scroll_page_up` | `shift+page_up` | `shift+page_up` |
| `scroll_page_down` | `shift+page_down` | `shift+page_down` |
| `scroll_to_top` | `shift+home` | `shift+home` |
| `scroll_to_bottom` | `shift+end` | `shift+end` |

### Tabs

| Action | macOS | Linux |
|---|---|---|
| `new_tab` | `super+t` | `ctrl+shift+t` |
| `close_tab` | `super+w` | `ctrl+shift+w` |
| `next_tab` | `ctrl+tab` | `ctrl+tab` |
| `prev_tab` | `ctrl+shift+tab` | `ctrl+shift+tab` |
| `tab_1`–`tab_9` | `super+1`–`super+9` | `alt+1`–`alt+9` |

### Sessions

| Action | macOS | Linux |
|---|---|---|
| `session_new` | `super+shift+n` | `ctrl+shift+n` |
| `session_picker` | `super+shift+s` | `ctrl+shift+s` |
