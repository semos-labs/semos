---
title: 'defaultBreakpoints'
---

```ts
const defaultBreakpoints: Readonly<Record<Breakpoint, number>>;
```

Default column thresholds for each [Breakpoint](../../core/style#breakpoint).

Breakpoints are evaluated **mobile-first** — the largest threshold that
does not exceed the current terminal width wins.

| Breakpoint | Columns |
|------------|---------|
| `base`     | 0       |
| `sm`       | 40      |
| `md`       | 80      |
| `lg`       | 120     |
| `xl`       | 160     |
