---
title: Getting Started with Epist
description: Install Epist and start managing your email from the terminal — Gmail or IMAP/SMTP.
sidebar:
  order: 2
---

## Installation

### Homebrew (macOS/Linux)

```bash
brew tap semos-labs/tap
brew install epist
```

### Build from Source

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

## Connect Email

Epist supports **Gmail (OAuth)** and **IMAP/SMTP** (any email provider). You can use both simultaneously — mix Gmail and IMAP accounts in a single client.

---

### Option A: IMAP/SMTP (Any Provider)

Add your account to `~/.config/epist/config.toml`:

```toml
[[accounts]]
name = "Work"
email = "me@work.com"
provider = "imap"

[accounts.imap]
host = "imap.work.com"
port = 993
security = "tls"
username = "me@work.com"
password_command = "security find-generic-password -a me@work.com -s epist -w"

[accounts.smtp]
host = "smtp.work.com"
port = 587
security = "starttls"
username = "me@work.com"
password_command = "security find-generic-password -a me@work.com -s epist -w"
```

#### Password options

Pick one method for `password_command`:

| Method | Example |
|--------|---------|
| macOS Keychain | `password_command = "security find-generic-password -a me@work.com -s epist -w"` |
| `pass` (GPG) | `password_command = "pass show email/work"` |
| 1Password CLI | `password_command = "op read op://Personal/WorkEmail/password"` |
| Bitwarden CLI | `password_command = "bw get password work-email"` |
| Environment var | `password_command = "echo $WORK_EMAIL_PASSWORD"` |
| Plain text | `password = "hunter2"` *(not recommended)* |

You can add multiple `[[accounts]]` blocks for multiple IMAP/SMTP accounts.

---

### Option B: Gmail (OAuth)

Epist requires Google Cloud credentials to access Gmail.

#### Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select an existing one)
3. Enable the **Gmail API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Gmail API" and click "Enable"
   - Also enable "Google Calendar API" and "People API" (for contacts)

#### Create OAuth Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - User Type: **External** (or Internal for Workspace)
   - Add your email as a test user
   - Add the following scopes:
     - `gmail.modify` (read/write mail and labels)
     - `gmail.send` (send mail)
     - `calendar.events` (read/write calendar events)
     - `calendar.readonly` (read calendars list)
     - `contacts.readonly` (read contacts)
     - `userinfo.email` and `userinfo.profile` (get user info)
4. Create OAuth client ID:
   - Application type: **Desktop app**
   - Name: "Epist" (or anything you like)
5. Copy the **Client ID** and **Client Secret**

#### Configure Epist

Add your credentials to `~/.config/epist/config.toml`:

```toml
[google]
clientId = "your-client-id.apps.googleusercontent.com"
clientSecret = "your-client-secret"
```

Or use environment variables:

```bash
export EPIST_GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
export EPIST_GOOGLE_CLIENT_SECRET="your-client-secret"
```

#### Connect Gmail

```
:login
```

Follow the OAuth flow in your browser. Epist supports multiple Google accounts — IMAP accounts are loaded automatically from `config.toml`.

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
| `login` | Add Google account (OAuth) |
| `profile` | Manage connected accounts (Gmail + IMAP) |
| `sync` | Force sync with server |
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
