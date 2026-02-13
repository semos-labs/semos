---
title: 'useFocusable'
---
```ts
function useFocusable(options?): UseFocusableResult;
```

Hook to make any element focusable with keyboard support.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`UseFocusableOptions`](../interfaces/UseFocusableOptions.md) |

## Returns

[`UseFocusableResult`](../interfaces/UseFocusableResult.md)

## Example

```tsx
function CustomPicker({ onSelect }) {
  const { ref, isFocused, focus } = useFocusable({
    onKeyPress: (key) => {
      if (key.name === "return") {
        onSelect();
        return true;
      }
      return false;
    },
  });

  return (
    <Box
      ref={ref}
      focusable
      style={{ 
        border: "round",
        borderColor: isFocused ? "cyan" : "gray" 
      }}
    >
      <Text>Custom Picker</Text>
    </Box>
  );
}
```
