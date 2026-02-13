---
title: 'Checkbox'
---
```ts
const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<CheckboxHandle>>;
```

Toggle checkbox with label. Activated via Space or Enter.

## Example

```tsx
const [agreed, setAgreed] = useState(false);

<Checkbox
  checked={agreed}
  onChange={setAgreed}
  label="I agree to the terms"
  focusedStyle={{ bg: "cyan", color: "black" }}
/>
```
