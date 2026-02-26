---
title: Themes
description: Built-in themes and custom color schemes in Attyx.
sidebar:
  order: 6
---

Attyx ships with built-in themes and supports custom TOML theme files.

## Built-in themes

- `default`
- `catppuccin-mocha`

Set the theme in your config:

```toml
[theme]
name = "catppuccin-mocha"
```

## Custom themes

Custom themes follow the same TOML format as built-in themes. Define a `[colors]` table for foreground, background, and cursor colors, and a `[palette]` table for ANSI colors 0-15.

See `themes/default.toml` in the [Attyx repository](https://github.com/semos-labs/attyx) for the full structure.

### Example

```toml
[colors]
foreground = "#cdd6f4"
background = "#1e1e2e"
cursor = "#f5e0dc"

[palette]
black = "#45475a"
red = "#f38ba8"
green = "#a6e3a1"
yellow = "#f9e2af"
blue = "#89b4fa"
magenta = "#f5c2e7"
cyan = "#94e2d5"
white = "#bac2de"
bright_black = "#585b70"
bright_red = "#f38ba8"
bright_green = "#a6e3a1"
bright_yellow = "#f9e2af"
bright_blue = "#89b4fa"
bright_magenta = "#f5c2e7"
bright_cyan = "#94e2d5"
bright_white = "#a6adc8"
```

Theme changes apply on [hot reload](/docs/attyx/configuration/#hot-reload).
