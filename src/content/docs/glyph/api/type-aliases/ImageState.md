---
title: ImageState
---
```ts
type ImageState = "placeholder" | "loading" | "loaded" | "error" | "preview";
```

Lifecycle state of the [Image](../variables/Image.md) component.
- `"placeholder"` — waiting for user to press Space to load
- `"loading"` — image data is being fetched / decoded
- `"loaded"` — rendered inline via Kitty / iTerm2 protocol
- `"error"` — loading failed
- `"preview"` — opened via OS-level preview (Quick Look / xdg-open)
