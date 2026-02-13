---
title: Image
---
```ts
const Image: ForwardRefExoticComponent<ImageProps & RefAttributes<ImageHandle>>;
```

Inline image for terminal UIs.

Displays a placeholder until the user presses Space (or set `autoLoad`).
Supports Kitty and iTerm2 graphics protocols for true inline rendering,
with fallback to OS-level preview. Press Escape to unload.

## Examples

```tsx
<Image src="./logo.png" width={40} height={12} />
```

```tsx
// Auto-load with auto-size
<Image
  src="https://example.com/photo.jpg"
  autoLoad
  autoSize
  maxWidth={60}
  maxHeight={20}
/>
```
