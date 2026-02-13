---
title: Glyph
description: A React-based terminal renderer for building TUI applications.
sidebar:
  label: Overview
  order: 1
---

Glyph is a terminal rendering engine that lets you build rich TUI applications using React components. Flexbox layouts, styling, focus management — everything you'd expect from a UI framework, running entirely in your terminal.

## Features

- **React components** — write your UI with JSX, just like a web app
- **Flexbox layout** — position elements with familiar CSS-like properties
- **Focus management** — keyboard navigation out of the box
- **Styling** — borders, colors, padding, margins
- **TypeScript** — full type safety

## Quick Example

```tsx
import { render, Box, Text } from "@semos-labs/glyph";

function App() {
  return (
    <Box flexDirection="column" padding={1} borderStyle="round">
      <Text bold>Hello from Glyph!</Text>
      <Text color="gray">Your terminal, reimagined.</Text>
    </Box>
  );
}

render(<App />);
```

## Next Steps

→ [Getting Started](/glyph/getting-started) — set up your first Glyph project
