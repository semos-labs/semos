---
title: CLI
description: Attyx command-line flags.
sidebar:
  order: 3
---

All [configuration options](/docs/attyx/configuration/) can also be set via CLI flags. Flags override the config file.

```
attyx [flags]
```

## Terminal

| Flag | Description |
|------|-------------|
| `--rows <N>` | Terminal rows (default: 24) |
| `--cols <N>` | Terminal columns (default: 80) |
| `--cmd <command...>` | Override shell command |

## Config

| Flag | Description |
|------|-------------|
| `--config <path>` | Load config from a specific file |
| `--no-config` | Skip reading config file from disk |
| `--print-config` | Print merged config and exit |

## Font

| Flag | Description |
|------|-------------|
| `--font-family <string>` | Font family |
| `--font-size <int>` | Font size in points |
| `--cell-width <value>` | Cell width: pixels (e.g. `10`) or percent (e.g. `"110%"`) |
| `--cell-height <value>` | Cell height: pixels (e.g. `20`) or percent (e.g. `"115%"`) |

## Appearance

| Flag | Description |
|------|-------------|
| `--theme <string>` | Theme name |
| `--background-opacity <float>` | Background opacity 0.0–1.0 |
| `--background-blur <int>` | Blur radius when opacity < 1 |
| `--decorations` / `--no-decorations` | Show/hide window title bar |
| `--padding <int>` | Window padding on all sides |
| `--padding-x <int>` | Left + right padding |
| `--padding-y <int>` | Top + bottom padding |
| `--padding-left <int>` | Left padding |
| `--padding-right <int>` | Right padding |
| `--padding-top <int>` | Top padding |
| `--padding-bottom <int>` | Bottom padding |

## Cursor

| Flag | Description |
|------|-------------|
| `--cursor-shape <shape>` | `block`, `beam`, or `underline` |
| `--cursor-blink` / `--no-cursor-blink` | Enable/disable cursor blinking |
| `--cursor-trail` / `--no-cursor-trail` | Enable/disable cursor trail |

## Behavior

| Flag | Description |
|------|-------------|
| `--shell <path>` | Shell program |
| `--scrollback-lines <int>` | Scrollback buffer lines |
| `--reflow` / `--no-reflow` | Enable/disable reflow on resize |
| `--log-level <level>` | `err`, `warn`, `info`, `debug`, `trace` |
| `--log-file <path>` | Append logs to file |

## Help

| Flag | Description |
|------|-------------|
| `--help`, `-h` | Show help |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **Ctrl+Shift+R** | Reload config |
| **Ctrl+F** | Open in-terminal search |
