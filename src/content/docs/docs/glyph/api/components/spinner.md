---
title: 'Spinner'
---

```ts
function Spinner(__namedParameters): Element;
```

Animated spinner indicator.

Uses braille dot characters by default, cycling at 80 ms per frame.
Supply custom `frames` for different animation styles.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`SpinnerProps`](spinner#spinner-props) |

## Returns

`Element`

## Examples

```tsx
<Spinner label="Loading..." style={{ color: "cyan" }} />
```

```tsx
// Custom frames
<Spinner frames={["◐", "◓", "◑", "◒"]} intervalMs={120} />
```

---

## SpinnerProps

Props for the [Spinner](spinner) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="frames"></a> `frames?` | `string`[] | Animation frames. Defaults to braille dots. |
| <a id="intervalms"></a> `intervalMs?` | `number` | Interval between frames in ms. Default 80. |
| <a id="label"></a> `label?` | `string` | Optional label text next to the spinner. |
| <a id="style"></a> `style?` | [`Style`](../../types/style) | Style applied to the spinner character. |
