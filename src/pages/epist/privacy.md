---
layout: ../../layouts/PrivacyLayout.astro
title: "Epist — Privacy Policy"
description: "Privacy policy for Epist, the terminal email client."
product: "Epist"
logo: "/logos/Epist.png"
lastUpdated: "February 16, 2026"
---

## TL;DR

Epist does not collect your personal data. Your emails, credentials, and account information stay on your machine. The only data we may collect is **opt-in anonymous usage analytics** to help us understand how the app is used and improve it.

## Your Data Stays on Your Machine

Epist is a local-first application. All data is stored on your device:

- **Emails** — cached in a local SQLite database (`~/.local/share/epist/epist.db`)
- **OAuth tokens** — stored locally for Gmail accounts
- **IMAP/SMTP credentials** — stored in your config file or resolved via `password_command` using your own secret manager
- **Configuration** — stored in `~/.config/epist/config.toml`

We do not operate any servers that store or process your email, credentials, or personal data. Epist communicates directly with your email provider (Gmail API or your IMAP/SMTP server) — we are not a proxy or intermediary.

## Anonymous Usage Analytics

Epist may include **opt-in anonymous usage analytics** to help us understand which features are used, identify bugs, and prioritize development. This is entirely optional.

What analytics may collect:

- App version and platform (e.g. macOS arm64, Linux x64)
- Feature usage events (e.g. "compose opened", "search used") — no content or personal data
- Error reports and crash data for debugging

What analytics **never** collect:

- Email content, subjects, or metadata
- Email addresses, contacts, or account information
- Credentials, passwords, or OAuth tokens
- Any personally identifiable information

You can opt out at any time. Analytics are disabled by default and require explicit opt-in.

## Third-Party Services

Epist connects to third-party services only as directed by you:

- **Gmail API / Google OAuth** — if you connect a Gmail account. Subject to [Google's Privacy Policy](https://policies.google.com/privacy)
- **Your IMAP/SMTP server** — if you connect an IMAP account. Subject to your email provider's privacy policy

We have no access to these connections. Authentication happens directly between Epist on your machine and the service provider.

## Google API Services Usage Disclosure

Epist's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## Open Source

Epist is open source and MIT licensed. You can audit the entire codebase to verify these claims: [github.com/semos-labs/epist](https://github.com/semos-labs/epist).

## Contact

Questions about this policy? Email us at [hello@semos.sh](mailto:hello@semos.sh), open an issue on [GitHub](https://github.com/semos-labs/epist/issues), or reach out on [X (@nick_skriabin)](https://x.com/nick_skriabin).
