[**@semos-labs/glyph**](../index.md)

***

# Variable: Button

```ts
const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<ButtonHandle>>;
```

Focusable button that triggers an action on Enter or Space.

## Examples

```tsx
<Button
  label="Save"
  onPress={() => save()}
  style={{ border: "round", paddingX: 2 }}
  focusedStyle={{ bg: "cyan", color: "black" }}
/>
```

```tsx
// Using children for custom content
<Button onPress={handleClick}>
  <Text style={{ bold: true }}>🚀 Launch</Text>
</Button>
```
