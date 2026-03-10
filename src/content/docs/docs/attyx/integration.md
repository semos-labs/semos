---
title: Integration
description: Control Attyx from scripts, AI agents, and external tools via IPC.
sidebar:
  order: 18
---

Attyx exposes a full IPC interface over Unix sockets. Scripts, AI agents, and external tools can create tabs, split panes, send keystrokes, read screen content, and more — all from the command line.

## How it works

Every running Attyx instance listens on a Unix domain socket at:

```
~/.local/state/attyx/ctl-<pid>.sock
```

The `attyx` binary doubles as both the terminal and the IPC client. When you run a subcommand like `attyx tab create`, it connects to the socket of the most recently active instance and sends the command.

## Global options

All IPC commands accept these flags:

| Flag | Description |
|------|-------------|
| `--target <pid>` | Send to a specific Attyx instance by PID |
| `--json` | Output in JSON format for programmatic use |
| `--help`, `-h` | Show help for any command |

## Tabs

```bash
attyx tab create                         # new shell tab
attyx tab create --cmd htop              # new tab running htop
attyx tab create --cmd "make test" --wait # wait for exit code
attyx tab close                          # close active tab
attyx tab next                           # switch to next tab
attyx tab prev                           # switch to previous tab
attyx tab select 3                       # jump to tab 3 (1-indexed)
attyx tab move left                      # reorder tab left
attyx tab move right                     # reorder tab right
attyx tab rename "build logs"            # set tab title
```

### Options for `tab create`

| Option | Description |
|--------|-------------|
| `--cmd <command>` | Run a command instead of a bare shell. Runs inside a full interactive shell with your PATH and config. The shell stays open after the command exits. |
| `--wait`, `-w` | Wait for the command to exit and return its exit code. Requires `--cmd`. |

## Splits

```bash
attyx split vertical                     # new pane to the right
attyx split horizontal                   # new pane below
attyx split v --cmd claude               # vertical split running claude
attyx split h --cmd htop --wait          # horizontal split, wait for exit
attyx split close                        # close active pane
attyx split rotate                       # rotate split layout
attyx split zoom                         # toggle pane zoom
```

`v` and `h` are aliases for `vertical` and `horizontal`. The `--cmd` and `--wait` options work the same as `tab create`.

## Focus

Move focus between panes. Focus determines which pane receives input from `send-keys` and `send-text`.

```bash
attyx focus up
attyx focus down
attyx focus left
attyx focus right
```

## Sending input

### send-keys

Send keystrokes to the active pane with C-style escape sequence support.

```bash
attyx send-keys "ls -la\n"              # type ls -la and press Enter
attyx send-keys "\x03"                  # Ctrl-C (interrupt)
attyx send-keys "\x04"                  # Ctrl-D (EOF)
attyx send-keys "\x1b"                  # Escape
attyx send-keys "\x1b[A\n"             # Arrow up then Enter
attyx send-keys "q"                     # press q (e.g. quit less)
attyx send-keys "y\n"                   # confirm a prompt
```

#### Escape sequences

| Sequence | Key |
|----------|-----|
| `\n` | Enter / newline |
| `\t` | Tab |
| `\x03` | Ctrl-C |
| `\x04` | Ctrl-D |
| `\x1a` | Ctrl-Z |
| `\x1b` | Escape |
| `\x1b[A` | Arrow up |
| `\x1b[B` | Arrow down |
| `\x1b[C` | Arrow right |
| `\x1b[D` | Arrow left |
| `\x7f` | Backspace |

### send-text

Send raw text to the active pane. Supports the same escape sequences as `send-keys`.

```bash
attyx send-text "hello"                  # write "hello" (no newline)
attyx send-text "echo hello\n"           # write "echo hello" + Enter
```

## Reading screen content

Read the visible text from the active pane.

```bash
attyx get-text                           # plain text, one line per row
attyx get-text --json                    # { "lines": ["row1", "row2", ...] }
```

Trailing whitespace is trimmed per row. Empty trailing rows are omitted.

## Querying state

```bash
attyx list                               # full tab/pane tree
attyx list tabs                          # tab names and indices
attyx list splits                        # panes in active tab
attyx list sessions                      # daemon sessions
attyx list --json                        # any of the above as JSON
```

`panes` is an alias for `splits`.

## Configuration

```bash
attyx reload                             # hot-reload config from disk
attyx theme dracula                      # switch theme
attyx theme "catppuccin-mocha"
```

## Scrolling

```bash
attyx scroll-to top
attyx scroll-to bottom
attyx scroll-to page-up
attyx scroll-to page-down
```

## Popups

Open a floating terminal overlay. Closes when the command exits.

```bash
attyx popup lazygit
attyx popup htop --width 90 --height 90
attyx popup fzf --width 60 --height 40 --border none
attyx popup "k9s" --border heavy
```

| Option | Default | Description |
|--------|---------|-------------|
| `--width`, `-w` | `80` | Width as % of terminal (1-100) |
| `--height` | `80` | Height as % of terminal (1-100) |
| `--border`, `-b` | `rounded` | Border style: `single`, `double`, `rounded`, `heavy`, `none` |

## Sessions

```bash
attyx session list                       # list all sessions
attyx session create                     # create new session
attyx session switch 2                   # switch to session 2
attyx session rename "dev server"        # rename current session
attyx session rename 1 "dev server"      # rename session 1
attyx session kill 3                     # kill session 3
```

## Run (shorthand)

`attyx run` is shorthand for `attyx tab create --cmd`:

```bash
attyx run htop                           # open tab running htop
attyx run "make test" --wait             # run and wait for exit code
attyx run claude                         # open tab running claude
```

## Targeting instances

By default, IPC commands target the most recently active Attyx instance. To target a specific one:

```bash
attyx --target 12345 tab create
```

You can also set the `ATTYX_PID` environment variable. Socket discovery scans `~/.local/state/attyx/` for `ctl-*.sock` files and picks the most recently modified one.

## JSON output

All query commands support `--json` for structured output:

```bash
attyx list --json
attyx list tabs --json
attyx get-text --json
attyx session list --json
```

Errors are returned as `{"error": "message"}`.

## Wait mode

The `--wait` flag on `tab create`, `split vertical`, and `split horizontal` blocks until the command exits and returns its exit code:

```bash
attyx run "make test" --wait && echo "Tests passed"
attyx split v --cmd "cargo build" --wait
```

This is useful for scripting workflows where you need to know if a command succeeded.

## Agent workflow

A typical AI agent or automation script interacts with Attyx like this:

```bash
# 1. Open a pane for the task
attyx split vertical --cmd "your-tool"

# 2. Read the output
attyx get-text

# 3. Send input
attyx send-keys "some input\n"

# 4. Read the result
attyx get-text

# 5. Clean up
attyx split close
```

## All commands

| Command | Description |
|---------|-------------|
| `tab create [--cmd] [--wait]` | Create a new tab |
| `tab close` | Close active tab |
| `tab next` / `tab prev` | Switch tabs |
| `tab select <N>` | Jump to tab N |
| `tab move left\|right` | Reorder tab |
| `tab rename <name>` | Set tab title |
| `split vertical\|horizontal [--cmd] [--wait]` | Split pane |
| `split close` | Close active pane |
| `split rotate` | Rotate layout |
| `split zoom` | Toggle pane zoom |
| `focus up\|down\|left\|right` | Move focus |
| `send-keys <keys>` | Send keystrokes (with escapes) |
| `send-text <text>` | Send raw text |
| `get-text` | Read screen content |
| `list [tabs\|splits\|sessions]` | Query state |
| `reload` | Hot-reload config |
| `theme <name>` | Switch theme |
| `scroll-to top\|bottom\|page-up\|page-down` | Scroll viewport |
| `popup <cmd> [--width] [--height] [--border]` | Open popup |
| `session list\|create\|kill\|switch\|rename` | Manage sessions |
| `run <cmd> [--wait]` | Shorthand for `tab create --cmd` |
