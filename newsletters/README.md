# Semos Newsletters

Weekly newsletters sent through [Kit](https://kit.com) via GitHub Actions.

## Writing a newsletter

Create a new markdown file in this directory. Use the date as filename: `YYYY-MM-DD.md`.

### Frontmatter

```yaml
---
subject: "Semos Weekly — What's new in Glyph v0.5"
preview: "Character-level diffing, new components, and more."
draft: false
---
```

- **subject** (required) — Email subject line
- **preview** (required) — Preview text shown in inbox before opening
- **draft** (optional) — Set to `true` to prevent accidental sending

### Content

Write the body in markdown. It gets converted to a styled HTML email automatically.

Keep it short. People skim emails.

## Sending

### From GitHub Actions (recommended)

Go to **Actions → Send Newsletter → Run workflow** and enter the filename (e.g. `2026-02-17.md`).

The workflow will:
1. Read the markdown file
2. Convert it to styled HTML
3. Create a Kit broadcast and send it to all subscribers

### Locally (for testing)

```bash
# Preview the HTML output (doesn't send)
bun run newsletter:preview newsletters/2026-02-17.md

# Actually send (requires KIT_API_SECRET env var)
bun run newsletter:send newsletters/2026-02-17.md
```

## Required secrets

Add these to your GitHub repo secrets:

- **`KIT_API_SECRET`** — Your Kit API secret (Settings → Developer → API)
