---
title: Getting Started with Epist
description: Install Epist and start managing your email from the terminal.
sidebar:
  order: 2
---

## Installation

```bash
# Clone the repository
git clone https://github.com/semos-labs/epist.git
cd epist

# Install dependencies
bun install

# Run the application
bun run start

# Or in development mode with watch
bun run dev
```

## Keybindings

### Navigation

| Key | Action |
|-----|--------|
| `j` / `↓` | Next item |
| `k` / `↑` | Previous item |
| `gg` | First item |
| `G` | Last item |
| `Tab` / `` ` `` | Switch focus between list and view |
| `h` / `←` | Back to list (in view) |
| `l` / `→` | Open email view |
| `Enter` | Open / Select |

### Email Actions

| Key | Action |
|-----|--------|
| `s` | Toggle star |
| `e` | Archive |
| `D` | Delete |
| `u` | Mark as unread |
| `r` | Reply |
| `f` | Forward |
| `c` | Compose new |

### Global

| Key | Action |
|-----|--------|
| `:` | Open command bar |
| `/` | Search emails |
| `?` | Show help |
| `q` | Quit |

## Commands

Type `:` to open the command bar, then enter a command:

| Command | Action |
|---------|--------|
| `inbox` | Go to Inbox |
| `sent` | Go to Sent |
| `drafts` | Go to Drafts |
| `trash` | Go to Trash |
| `starred` | Go to Starred |
| `archive` | Archive current email |
| `delete` | Delete current email |
| `star` | Toggle star |
| `help` | Show keyboard shortcuts |
| `quit` | Exit application |

## Project Structure

```
src/
├── domain/          # Business logic and types
│   ├── email.ts     # Email types and helpers
│   └── time.ts      # Date formatting utilities
├── keybinds/        # Keyboard handling
│   ├── registry.ts  # Centralized keybind definitions
│   └── useKeybinds.tsx
├── state/           # Jotai atoms and actions
│   ├── atoms.ts     # State definitions
│   └── actions.ts   # State mutations
├── ui/              # React components
│   ├── App.tsx      # Main application
│   ├── EmailList.tsx
│   ├── EmailView.tsx
│   ├── StatusBar.tsx
│   ├── CommandPalette.tsx
│   └── HelpDialog.tsx
└── index.tsx        # Entry point
```

## Next Steps

- Epist is under active development — see the [overview](/docs/epist/) for the full feature list and roadmap
