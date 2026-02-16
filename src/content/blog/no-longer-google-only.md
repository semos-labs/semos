---
title: "Aion and Epist Are No Longer Google-Only"
description: "Aion now supports CalDAV (iCloud, Fastmail, Nextcloud, and more). Epist now supports IMAP/SMTP alongside Gmail. Your terminal, your provider."
date: 2026-02-16
tags: ["aion", "epist", "caldav", "imap", "update"]
---

When I first built Aion and Epist, they were Google-only. Google Calendar API for Aion, Gmail API for Epist. That was fine for me — I use Google for everything. But I kept hearing the same thing: "This looks amazing, but I use iCloud / Fastmail / Outlook / self-hosted / ..."

Fair point. So I fixed it.

## Aion: CalDAV Support

Aion now speaks CalDAV. That means iCloud, Fastmail, Nextcloud, Radicale, Baïkal — basically any calendar server that implements the standard. You can mix Google Calendar and CalDAV accounts in the same client, see all your events on one timeline.

### How it works

Under the hood, Aion uses [tsdav](https://github.com/natelindev/tsdav) for the CalDAV protocol and [ical.js](https://github.com/kewisch/ical.js) for parsing and generating iCalendar data. Events from CalDAV accounts get normalized into the same internal model as Google Calendar events — so the UI doesn't care where your events come from. Same timeline, same colors, same keyboard shortcuts.

The sync engine handles both protocols in parallel. Google accounts use incremental sync tokens, CalDAV accounts use `ctag`/`etag` diffing. Both sync every 30 seconds in the background, and you can always force a sync with `:sync`.

### Setup

You can add CalDAV accounts two ways:

**Interactive dialog** — just type `:caldav` and pick a provider preset (iCloud, Fastmail, Nextcloud, etc.) or enter your server URL manually.

**Config file** — add accounts directly to `~/.config/aion/config.toml`:

```toml
[[caldav]]
name = "iCloud"
email = "me@icloud.com"
serverUrl = "https://caldav.icloud.com"
username = "me@icloud.com"
passwordCommand = "security find-generic-password -a me@icloud.com -s aion-caldav -w"
```

Passwords are handled via `passwordCommand` — a shell command that returns your password on stdout. This means you can use macOS Keychain, `pass`, 1Password CLI, Bitwarden, or whatever you already have. No plaintext passwords in config files (though that's supported too if you're into that).

One thing to note for iCloud users: you need an [app-specific password](https://support.apple.com/en-us/102654), not your regular Apple ID password.

## Epist: IMAP/SMTP Support

Epist was built on the Gmail API — which is excellent for Gmail users but useless for everyone else. Now it also supports standard IMAP/SMTP. Any email provider that speaks IMAP works: Outlook, Yahoo, iCloud Mail, Fastmail, Proton Mail (via Bridge), Zoho, self-hosted — you name it.

### The provider abstraction

This was probably the most interesting engineering challenge. Gmail and IMAP are fundamentally different:

- Gmail has labels, IMAP has folders. Gmail threads are native, IMAP threads need to be synthesized from `References` and `In-Reply-To` headers. Gmail has server-side search, IMAP has... well, it depends on the server.

So I built a `MailProvider` interface that both backends implement. The rest of the app — sync engine, state management, UI — talks to this interface and never touches protocol-specific code directly. IMAP folders and flags get mapped onto a virtual label model that mirrors Gmail's:

- `\Inbox` → `INBOX`
- `\Sent` → `SENT`
- `\Flagged` → `STARRED`
- Custom IMAP folders → their path as label IDs

Threading on IMAP is done client-side by chaining `References` and `In-Reply-To` headers into synthetic thread IDs. Not perfect for every edge case, but surprisingly good in practice.

Under the hood, IMAP uses [ImapFlow](https://imapflow.com) and SMTP uses [Nodemailer](https://nodemailer.com) — both battle-tested libraries.

### Setup

Like Aion, you have two options:

**Interactive dialog** — Epist has a built-in IMAP setup wizard. It auto-detects server settings for common providers when you enter your email address. Outlook, Yahoo, iCloud, Fastmail, Proton — it knows the hosts and ports already.

**Config file** — add accounts to `~/.config/epist/config.toml`:

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
password_command = "pass show email/work"

[accounts.smtp]
host = "smtp.work.com"
port = 587
security = "starttls"
username = "me@work.com"
password_command = "pass show email/work"
```

Same `password_command` approach as Aion — works with any secret manager. And you can mix Gmail and IMAP accounts freely. Your personal Gmail next to your work IMAP, all in one client.

## What stays the same

Everything else. Vim keybindings, the visual timeline in Aion, thread view in Epist, search, command palette, themes — all identical regardless of your backend. That was the whole point. The protocol shouldn't dictate the experience.

Google-specific features (Meet link generation in Aion, Gmail labels with colored dots in Epist) still work for Google accounts. CalDAV and IMAP accounts get their own equivalents — calendar colors from the server, IMAP folders with auto-discovered special-use flags.

## Try it

Both updates are live now:

```bash
# Aion v0.1.14
brew tap semos-labs/tap
brew install aion
# or: brew upgrade aion

# Epist v0.1.5
brew install epist
# or: brew upgrade epist
```

Check the docs for setup guides:
- [Aion — Getting Started](/docs/aion/getting-started/)
- [Epist — Getting Started](/docs/epist/getting-started/)

Or grab binaries from GitHub: [Aion releases](https://github.com/semos-labs/aion/releases) · [Epist releases](https://github.com/semos-labs/epist/releases)

Your terminal, your email provider, your calendar server. No lock-in.
