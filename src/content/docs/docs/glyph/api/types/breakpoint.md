---
title: 'Breakpoint'
---

```ts
type Breakpoint = "base" | "sm" | "md" | "lg" | "xl";
```

Named terminal breakpoint.

Breakpoints are **mobile-first** (like Tailwind / Chakra) — the largest
matching breakpoint wins.

| Name   | Columns | Typical use case            |
|--------|---------|-----------------------------|
| `base` | 0 +     | Always applies (default)    |
| `sm`   | 40 +    | Split pane / small terminal |
| `md`   | 80 +    | Standard 80-col terminal    |
| `lg`   | 120 +   | Wide terminal               |
| `xl`   | 160 +   | Ultra-wide                  |

## Example

```tsx
<Box style={{ flexDirection: { base: "column", md: "row" } }} />
```

---

## defaultBreakpoints

```ts
const defaultBreakpoints: Readonly<Record<Breakpoint, number>>;
```

Default column thresholds for each [Breakpoint](breakpoint).

Breakpoints are evaluated **mobile-first** — the largest threshold that
does not exceed the current terminal width wins.

| Breakpoint | Columns |
|------------|---------|
| `base`     | 0       |
| `sm`       | 40      |
| `md`       | 80      |
| `lg`       | 120     |
| `xl`       | 160     |

---

## Responsive<T>

```ts
type Responsive<T> = T | { [K in Breakpoint]?: T };
```

A style value that can change depending on terminal width.

Accepts either a plain value (backward-compatible) **or** an object keyed
by [Breakpoint](breakpoint) names.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Example

```tsx
// Plain value — works exactly like before
padding: 1

// Responsive — different values at different terminal widths
padding: { base: 0, sm: 1, lg: 2 }
```
