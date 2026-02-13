---
title: Getting Started with Glyph
description: Set up your first Glyph TUI project.
---

## Installation

Create a new Glyph project:

```bash
bun create @semos-labs/glyph my-tui-app
cd my-tui-app
```

Or add Glyph to an existing project:

```bash
bun add @semos-labs/glyph
```

## Your First App

Create an `index.tsx` file:

```tsx
import { render, Box, Text } from "@semos-labs/glyph";

function App() {
  return (
    <Box flexDirection="column" padding={1}>
      <Text bold>✨ My First TUI</Text>
      <Text>Built with Glyph</Text>
    </Box>
  );
}

render(<App />);
```

Run it:

```bash
bun index.tsx
```

That's it — you should see your TUI app rendered in the terminal.

## Project Structure

A typical Glyph project looks like:

```
my-tui-app/
├── src/
│   ├── components/    # Reusable UI components
│   ├── screens/       # Full-screen views
│   └── index.tsx      # Entry point
├── package.json
└── tsconfig.json
```

## Next Steps

- Explore the component API *(coming soon)*
- Learn about layout and styling *(coming soon)*
- Build a real app with [Aion](/aion/overview) or [Epist](/epist/overview) as examples
