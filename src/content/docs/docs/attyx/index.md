---
title: Attyx
description: A deterministic, VT-compatible terminal emulator written in Zig.
sidebar:
  label: Overview
  order: 1
---

Attyx is a deterministic, VT-compatible terminal emulator written in **Zig**. It features GPU-accelerated rendering with Metal on macOS and OpenGL on Linux — fast, correct, and configurable.

## Features

- **Deterministic VT-compatible engine** — predictable, reproducible terminal behavior
- **GPU-accelerated rendering** — Metal on macOS, OpenGL on Linux
- **Full SGR support** — 16, 256, and 24-bit true color
- **Scrollback buffer** — configurable size with efficient memory usage
- **Mouse support** — X10 and SGR mouse encoding, text selection
- **In-terminal search** — incremental search with smart-case matching
- **TOML + CLI configuration** — human-readable config with hot reload
- **Cross-platform** — macOS and Linux
- **Unicode support** — proper wide-character handling
- **Alternate screen buffer** — full support for TUI applications
- **Hyperlinks** — OSC 8 clickable URLs in terminal output
- **IME support** — input method editor for CJK and other languages
- **Bracketed paste mode** — safe pasting with shell awareness
- **Kitty graphics protocol** — display images and rich visual content in the terminal
- **Kitty keyboard protocol** — unambiguous key reporting with modifier keys, key release events, and full disambiguation
- **Background transparency + blur** — opacity control with blur effects
- **Reflow on resize** — preserves text wrapping when terminal size changes
- **Scroll regions** — DECSTBM top/bottom margins for scrolling areas
- **Synchronized output** — deferred rendering for smooth TUI updates
- **Session logging** — bounded ring buffer of session events
- **Cursor trail** — optional cursor trail effect

## Architecture

```
Raw bytes → Parser → Action → State.apply() → Grid
```

Attyx is built in layers:

| Layer | Description |
|-------|-------------|
| **Terminal engine** (`src/term/`) | Pure, deterministic core — parser, state, grid |
| **Config** (`src/config/`) | TOML config loading and CLI parsing |
| **App** (`src/app/`) | PTY bridge and OS integration |
| **Renderer** (`src/render/`) | GPU + font rendering (Metal / OpenGL) |
| **Headless** (`src/headless/`) | Test harness and golden snapshot tests |

The terminal engine is fully deterministic — given the same byte stream, it always produces the same grid state. This makes it testable and reproducible.

## Next Steps

> [Configuration](/docs/attyx/configuration/) — TOML config file and hot reload

> [CLI](/docs/attyx/cli/) — command-line flags

> [VT Compatibility](/docs/attyx/vt-compatibility/) — supported escape sequences

> [Building from Source](/docs/attyx/building/) — build, run, and test

## Alpha

Attyx is currently in alpha. Expect breaking changes as we iterate toward a stable release.
