---
layout: ../../layouts/PrivacyLayout.astro
title: "Attyx — Privacy Policy"
description: "Privacy policy for Attyx, the GPU-accelerated terminal emulator."
product: "Attyx"
logo: "/logos/Attyx.png"
lastUpdated: "February 28, 2026"
---

## TL;DR

Attyx is a local-first application — your terminal sessions, shell history, and configuration stay on your machine. When you use AI features, terminal context (such as recent output or selected text) is sent to our API and forwarded to third-party AI providers (e.g. OpenAI) to generate responses. We also collect **opt-in anonymous usage analytics** to improve the app.

## Your Data Stays on Your Machine

Attyx stores all data locally on your device:

- **Terminal sessions** — rendered locally on your GPU
- **Shell history** — managed by your shell (bash, zsh, fish, etc.), not by Attyx
- **Configuration** — stored in `~/.config/attyx/config.toml`

## AI Features and Data Sharing

When you use AI-powered features (e.g. command suggestions, error explanations, or chat), Attyx sends relevant terminal context to the Semos API, which forwards it to third-party AI providers such as OpenAI to process your request.

What may be sent to AI providers:

- Recent terminal output or selected text that you explicitly submit
- Shell context needed to generate a relevant response (e.g. current command, error messages)

What is **never** sent to AI providers:

- Your full terminal history or scrollback buffer
- Environment variables, credentials, passwords, or SSH keys
- Data from terminal sessions where AI features are not actively used

AI features are optional. You can use Attyx as a standard terminal emulator without enabling any AI functionality. When AI features are enabled, data is transmitted only when you explicitly invoke them.

Third-party AI providers process data according to their own privacy policies:

- **OpenAI** — [openai.com/privacy](https://openai.com/privacy)

We do not store the content of your AI requests or responses on our servers beyond what is needed to process the request.

## Anonymous Usage Analytics

Attyx may include **opt-in anonymous usage analytics** to help us understand which features are used, identify bugs, and prioritize development. This is entirely optional.

What analytics may collect:

- App version and platform (e.g. macOS arm64, Linux x64)
- Feature usage events (e.g. "split pane opened", "theme changed") — no content or personal data
- Error reports and crash data for debugging

What analytics **never** collect:

- Terminal output or command history
- File paths, environment variables, or working directories
- Credentials, passwords, or SSH keys
- Any personally identifiable information

You can opt out at any time. Analytics are disabled by default and require explicit opt-in.

## Open Source

Attyx is open source and MIT licensed. You can audit the entire codebase to verify these claims: [github.com/semos-labs/attyx](https://github.com/semos-labs/attyx).

## Contact

Questions about this policy? Email us at [hello@semos.sh](mailto:hello@semos.sh), open an issue on [GitHub](https://github.com/semos-labs/attyx/issues), or reach out on [X (@nick_skriabin)](https://x.com/nick_skriabin).
