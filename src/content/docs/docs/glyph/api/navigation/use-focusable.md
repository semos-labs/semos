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
| `options` | [`UseFocusableOptions`](#use-focusable-options) |

## Returns

[`UseFocusableResult`](#use-focusable-result)

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

---

## UseFocusableOptions

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="disabled"></a> `disabled?` | `boolean` | Whether the element is currently disabled (skipped in tab order) |
| <a id="onblur"></a> `onBlur?` | () => `void` | Called when the element loses focus |
| <a id="onfocus"></a> `onFocus?` | () => `void` | Called when the element receives focus |
| <a id="onkeypress"></a> `onKeyPress?` | (`key`) => `boolean` \| `void` | Key handler when focused. Return `true` to consume the key. This runs after priority handlers but before global handlers. |

---

## UseFocusableResult

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="blur"></a> `blur` | () => `void` | Programmatically blur (unfocus) this element |
| <a id="focus"></a> `focus` | () => `void` | Programmatically request focus on this element |
| <a id="focusid"></a> `focusId` | `string` \| `null` | The focus ID (useful for conditional logic) |
| <a id="isfocused"></a> `isFocused` | `boolean` | Whether this element is currently focused |
| <a id="ref"></a> `ref` | (`node`) => `void` | Ref to attach to your focusable element |
