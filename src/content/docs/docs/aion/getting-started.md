---
title: Getting Started with Aion
description: Install Aion and connect your calendar — Google Calendar or CalDAV.
sidebar:
  order: 2
---

## Installation

### Homebrew (macOS/Linux)

```bash
brew tap nick-skriabin/tap
brew install aion
```

### Download Binary

Grab the latest release for your platform from the [Releases page](https://github.com/semos-labs/aion/releases):

| Platform | Binary |
|----------|--------|
| macOS (Apple Silicon) | `aion-darwin-arm64` |
| macOS (Intel) | `aion-darwin-x64` |
| Linux (x64) | `aion-linux-x64` |
| Linux (ARM64) | `aion-linux-arm64` |

```bash
# Make executable
chmod +x aion-darwin-arm64

# Move to PATH
sudo mv aion-darwin-arm64 /usr/local/bin/aion

# Run
aion
```

### Build from Source

```bash
git clone https://github.com/semos-labs/aion.git
cd aion
bun install

# Run in development
bun dev

# Build binary for current platform
bun run build
# Binary will be at ./dist/aion
```

## Connect a Calendar

Aion supports **Google Calendar** and **CalDAV** (iCloud, Fastmail, Nextcloud, Radicale, etc.). You can use both at the same time with multiple accounts.

---

### Option A: CalDAV (iCloud, Fastmail, Nextcloud, etc.)

Add your CalDAV account to `~/.config/aion/config.toml`:

```toml
[[caldav]]
name = "iCloud"
email = "me@icloud.com"
serverUrl = "https://caldav.icloud.com"
username = "me@icloud.com"
passwordCommand = "security find-generic-password -a me@icloud.com -s aion-caldav -w"
```

Or use the interactive dialog:

```
:caldav
```

#### Provider URLs

| Provider | Server URL |
|----------|-----------|
| **iCloud** | `https://caldav.icloud.com` |
| **Fastmail** | `https://caldav.fastmail.com/dav/calendars` |
| **Nextcloud** | `https://your-server.com/remote.php/dav` |
| **Radicale** | `https://your-server.com/radicale` |
| **Google** (via CalDAV) | `https://apidata.googleusercontent.com/caldav/v2` |

> **Tip:** For iCloud, use an [app-specific password](https://support.apple.com/en-us/102654) — not your Apple ID password.

#### Password commands

`passwordCommand` runs via `sh -c` and uses the trimmed stdout as the password:

| Method | Example |
|--------|---------|
| macOS Keychain | `passwordCommand = "security find-generic-password -a me@icloud.com -s aion-caldav -w"` |
| `pass` (GPG) | `passwordCommand = "pass show calendar/icloud"` |
| 1Password CLI | `passwordCommand = "op read op://Personal/iCloud/password"` |
| Bitwarden CLI | `passwordCommand = "bw get password icloud-caldav"` |
| Environment var | `passwordCommand = "echo $CALDAV_PASSWORD"` |

---

### Option B: Google Calendar (OAuth)

#### Set Up Google Cloud Credentials

Aion requires your own Google Cloud credentials to access Google Calendar.

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select an existing one)
3. Enable the **Google Calendar API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Calendar API"
   - Click "Enable"

#### Create OAuth Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - User Type: **External** (or Internal for Workspace)
   - Add your email as a test user
   - Add the following scopes:
     - `https://www.googleapis.com/auth/calendar.events`
     - `https://www.googleapis.com/auth/calendar.readonly`
     - `https://www.googleapis.com/auth/userinfo.email`
     - `https://www.googleapis.com/auth/userinfo.profile`
4. Create OAuth client ID:
   - Application type: **Desktop app**
   - Name: "Aion" (or anything you like)
5. Copy the **Client ID** and **Client Secret**

#### Configure Aion

Add your credentials to `~/.config/aion/config.toml`:

```toml
[google]
clientId = "your-client-id.apps.googleusercontent.com"
clientSecret = "your-client-secret"
```

Or use environment variables:

```bash
export AION_GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
export AION_GOOGLE_CLIENT_SECRET="your-client-secret"
```

#### Connect Google Calendar

Launch Aion and run the login command:

```
:login
```

Follow the OAuth flow in your browser. Aion supports multiple Google accounts.

## Basic Navigation

| Key | Action |
|-----|--------|
| `j` / `k` | Move down / up |
| `h` / `l` | Previous / next day |
| `Tab` / `` ` `` | Cycle focus between panes |
| `gg` / `G` | Jump to first / last item |
| `n` | Jump to now |
| `Ctrl+G` | Go to date (natural language) |
| `Enter` / `Space` | Open event details |
| `Ctrl+N` | Create new event |
| `e` | Edit event |
| `D` | Delete event |
| `/` | Search events |
| `:` | Open command palette |
| `?` | Show context-aware help |
| `q` | Quit |

## Next Steps

- See the full [keybindings and commands reference](/docs/aion/) for everything Aion can do
- Customize your theme via `~/.config/aion/config.toml`
