---
title: Popups
description: Floating terminal overlays in Attyx.
sidebar:
  order: 8
---

Popups are floating terminal windows that run a command inside the main Attyx window. Each popup is bound to a hotkey — press it to open, press it again to close. Up to 32 popups can be configured.

## Configuration

Popups use the `[[popup]]` array in your config file:

```toml
[[popup]]
hotkey = "ctrl+shift+g"
command = "lazygit"
width = "80%"
height = "80%"
border = "rounded"
border_color = "#78829a"

[[popup]]
hotkey = "ctrl+shift+t"
command = "htop"
width = "60%"
height = "60%"
border = "heavy"
border_color = "#ff6600"
```

## Options

| Option | Default | Description |
|---|---|---|
| `hotkey` | *(required)* | [Key combo](/docs/attyx/keybindings/#key-combo-syntax) to toggle the popup |
| `command` | *(required)* | Shell command to run |
| `width` | `"80%"` | Popup width as percentage of terminal |
| `height` | `"80%"` | Popup height as percentage of terminal |
| `border` | `"single"` | Border style: `single`, `double`, `rounded`, `heavy`, or `none` |
| `border_color` | `"#78829a"` | Border foreground color (`#RRGGBB`) |

## Border styles

| Style | Description |
|---|---|
| `single` | Single-line box drawing characters (default) |
| `double` | Double-line box drawing characters |
| `rounded` | Rounded corners |
| `heavy` | Heavy/thick box drawing characters |
| `none` | No border |

## Examples

Launch lazygit in a large popup:

```toml
[[popup]]
hotkey = "ctrl+shift+g"
command = "lazygit"
width = "80%"
height = "80%"
border = "rounded"
```

Quick system monitor:

```toml
[[popup]]
hotkey = "ctrl+shift+t"
command = "htop"
width = "60%"
height = "60%"
border = "heavy"
border_color = "#ff6600"
```
