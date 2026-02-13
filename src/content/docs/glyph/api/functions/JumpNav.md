[**@semos-labs/glyph**](../index.md)

***

# Function: JumpNav()

```ts
function JumpNav(__namedParameters): Element;
```

Vim-style quick-jump navigation to any focusable element.

Press the activation key (default **Ctrl+O**) to overlay hint labels
next to every visible focusable element. Then press the hint character(s)
to instantly focus that element.

Trap-aware — automatically scopes hints to the active [FocusScope](FocusScope.md)
trap (e.g. a modal). Place a single `<JumpNav>` at the root of your app.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`JumpNavProps`](../interfaces/JumpNavProps.md) |

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
