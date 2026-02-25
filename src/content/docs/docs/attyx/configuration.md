---
title: Configuration
description: Configure Attyx with TOML and hot reload.
sidebar:
  order: 2
---

Attyx is configured via a TOML file and/or CLI flags. CLI flags take precedence over the config file.

**Config file location:**
- `$XDG_CONFIG_HOME/attyx/attyx.toml` (default: `~/.config/attyx/attyx.toml`)

**Precedence:** defaults < config file < CLI flags

## Font

```toml
[font]
family = "JetBrains Mono"
size = 14
cell_width = "100%"    # percentage or fixed pixels
cell_height = 20       # percentage or fixed pixels
fallback = ["Symbols Nerd Font Mono", "Noto Color Emoji"]
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `family` | string | `"JetBrains Mono"` | Font family name |
| `size` | integer | `14` | Font size in points |
| `cell_width` | string or int | `"100%"` | Cell width — percentage (`"110%"`) or fixed pixels |
| `cell_height` | string or int | `"100%"` | Cell height — percentage (`"115%"`) or fixed pixels |
| `fallback` | string[] | `[]` | Fallback font families |

## Theme

```toml
[theme]
name = "default"
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | string | `"default"` | Theme name |

## Scrollback

```toml
[scrollback]
lines = 20000
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `lines` | integer | `20000` | Scrollback buffer size in lines. Set to `0` to disable. |

## Reflow

```toml
[reflow]
enabled = true
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | boolean | `true` | Reflow text when terminal is resized |

## Cursor

```toml
[cursor]
shape = "block"
blink = true
trail = false
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `shape` | string | `"block"` | `"block"`, `"beam"`, or `"underline"` |
| `blink` | boolean | `true` | Enable cursor blinking |
| `trail` | boolean | `false` | Enable cursor trail effect |

## Program

```toml
[program]
shell = "/bin/zsh"
args = ["-l"]
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `shell` | string | `$SHELL` or `/bin/sh` | Shell program to run |
| `args` | string[] | `[]` | Extra arguments passed to the shell |

## Logging

```toml
[logging]
level = "info"
file = "/tmp/attyx.log"
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `level` | string | `"info"` | `"err"`, `"warn"`, `"info"`, `"debug"`, or `"trace"` |
| `file` | string | — | Append logs to this file |

## Background

```toml
[background]
opacity = 1.0
blur = 30
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `opacity` | float | `1.0` | Background opacity, `0.0` (transparent) to `1.0` (opaque) |
| `blur` | integer | `30` | Blur radius. Only applies when `opacity < 1.0`. |

## Window

```toml
[window]
decorations = true
padding = 0
padding_x = 0
padding_y = 0
padding_left = 0
padding_right = 0
padding_top = 0
padding_bottom = 0
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `decorations` | boolean | `true` | Show window title bar |
| `padding` | integer | `0` | Padding on all sides |
| `padding_x` | integer | `0` | Left + right padding |
| `padding_y` | integer | `0` | Top + bottom padding |
| `padding_left` | integer | `0` | Left padding |
| `padding_right` | integer | `0` | Right padding |
| `padding_top` | integer | `0` | Top padding |
| `padding_bottom` | integer | `0` | Bottom padding |

## Hot Reload

Send `SIGUSR1` or press **Ctrl+Shift+R** to reload the config at runtime.

**Reloads immediately:** cursor shape, cursor blink, scrollback lines, font family, font size, cell width, cell height

**Requires restart:** background opacity, background blur, logging level, logging file
