---
title: Select
---
```ts
const Select: ForwardRefExoticComponent<SelectProps & RefAttributes<SelectHandle>>;
```

Dropdown select with keyboard navigation, type-to-filter, and scrolling.

Opens on **Space** or **Enter**. Close with **Escape** or **Tab**.
Type to filter when open (if `searchable` is enabled).

Automatically detects whether to open upward or downward based on
available space, unless you override with `openDirection`.

## Examples

```tsx
const [color, setColor] = useState<string>();

<Select
  items={[
    { label: "Red",   value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue",  value: "blue" },
  ]}
  value={color}
  onChange={setColor}
  placeholder="Pick a color"
/>
```

```tsx
// Force dropdown to always open upward
<Select items={items} value={v} onChange={setV} openDirection="up" />
```
