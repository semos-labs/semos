---
title: 'JumpNav'
---

```ts
function JumpNav(__namedParameters): Element;
```

Vim-style quick-jump navigation to any focusable element.

Press the activation key (default **Ctrl+O**) to overlay hint labels
next to every visible focusable element. Then press the hint character(s)
to instantly focus that element.

Trap-aware — automatically scopes hints to the active [FocusScope](focus-scope.md)
trap (e.g. a modal). Place a single `<JumpNav>` at the root of your app.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`JumpNavProps`](jump-nav.md#jump-nav-props) |

## Returns

`Element`

## Example

```tsx
function App() {
  return (
    <JumpNav>
      <Box>
        <Input placeholder="Name" />
        <Button label="Submit" onPress={submit} />
      </Box>
    </JumpNav>
  );
}
```

---

## JumpNavProps

Props for the [JumpNav](jump-nav.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="activationkey"></a> `activationKey?` | `string` | Keybind to activate jump mode (default: "ctrl+o") |
| <a id="children"></a> `children?` | `ReactNode` | - |
| <a id="debug"></a> `debug?` | `boolean` | Enable debug logging |
| <a id="enabled"></a> `enabled?` | `boolean` | Whether jump nav is enabled (default: true) |
| <a id="hintbg"></a> `hintBg?` | [`Color`](../types/color.md) | Color for hint background (default: "yellow") |
| <a id="hintchars"></a> `hintChars?` | `string` | Characters to use for hints (default: "asdfghjklqwertyuiopzxcvbnm") |
| <a id="hintfg"></a> `hintFg?` | [`Color`](../types/color.md) | Color for hint text (default: "black") |
| <a id="hintstyle"></a> `hintStyle?` | [`Style`](../types/style.md) | Style for the hint labels |
