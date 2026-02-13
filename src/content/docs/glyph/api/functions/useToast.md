[**@semos-labs/glyph**](../index.md)

***

# Function: useToast()

```ts
function useToast(): (toast) => void;
```

Push toast notifications from anywhere inside a [ToastHost](ToastHost.md).

## Returns

A function that accepts a toast payload (without `id`).

```ts
(toast): void;
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `toast` | `Omit`\<[`Toast`](../interfaces/Toast.md), `"id"`\> |

### Returns

`void`

## Example

```tsx
const toast = useToast();

toast({ message: "Saved!", variant: "success" });
toast({ title: "Error", message: "Network failure", variant: "error", durationMs: 5000 });
```
