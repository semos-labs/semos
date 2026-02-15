---
title: 'ResolvedStyle'
---

```ts
type ResolvedStyle = { [K in keyof Style]: [NonNullable<Style[K]>] extends [Responsive<infer T>] ? T | undefined : Style[K] };
```

Style with all [Responsive](../breakpoint#responsive) values resolved to their concrete types.

Produced by the responsive resolution pass and consumed by the internal
layout (Yoga) and paint systems. You normally don't need this type
directly — use [Style](../style) instead.
