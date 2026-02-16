---
layout: ../../layouts/PrivacyLayout.astro
title: "Aion — Privacy Policy"
description: "Privacy policy for Aion, the terminal calendar client."
product: "Aion"
logo: "/logos/Aion.png"
lastUpdated: "February 16, 2026"
---

## TL;DR

Aion does not collect your personal data. Your calendar events, credentials, and account information stay on your machine. The only data we may collect is **opt-in anonymous usage analytics** to help us understand how the app is used and improve it.

## Your Data Stays on Your Machine

Aion is a local-first application. All data is stored on your device:

- **Calendar events** — cached in a local SQLite database (`~/.local/share/aion/aion.db`)
- **OAuth tokens** — stored locally for Google Calendar accounts
- **CalDAV credentials** — stored in your config file or resolved via `passwordCommand` using your own secret manager
- **Configuration** — stored in `~/.config/aion/config.toml`

We do not operate any servers that store or process your calendar data, credentials, or personal information. Aion communicates directly with your calendar provider (Google Calendar API or your CalDAV server) — we are not a proxy or intermediary.

## Anonymous Usage Analytics

Aion may include **opt-in anonymous usage analytics** to help us understand which features are used, identify bugs, and prioritize development. This is entirely optional.

What analytics may collect:

- App version and platform (e.g. macOS arm64, Linux x64)
- Feature usage events (e.g. "event created", "search used") — no content or personal data
- Error reports and crash data for debugging

What analytics **never** collect:

- Calendar event content, titles, descriptions, or attendees
- Email addresses, contacts, or account information
- Credentials, passwords, or OAuth tokens
- Any personally identifiable information

You can opt out at any time. Analytics are disabled by default and require explicit opt-in.

## Third-Party Services

Aion connects to third-party services only as directed by you:

- **Google Calendar API / Google OAuth** — if you connect a Google account. Subject to [Google's Privacy Policy](https://policies.google.com/privacy)
- **Your CalDAV server** — if you connect a CalDAV account (iCloud, Fastmail, Nextcloud, etc.). Subject to your calendar provider's privacy policy

We have no access to these connections. Authentication happens directly between Aion on your machine and the service provider.

## Google API Services Usage Disclosure

Aion's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## Open Source

Aion is open source and MIT licensed. You can audit the entire codebase to verify these claims: [github.com/semos-labs/aion](https://github.com/semos-labs/aion).

## Contact

Questions about this policy? Email us at [hello@semos.sh](mailto:hello@semos.sh), open an issue on [GitHub](https://github.com/semos-labs/aion/issues), or reach out on [X (@nick_skriabin)](https://x.com/nick_skriabin).
