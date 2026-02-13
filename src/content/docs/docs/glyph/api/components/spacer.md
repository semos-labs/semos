---
title: 'Spacer'
---

```ts
function Spacer(__namedParameters): Element;
```

Flexible spacer that pushes siblings apart.

Renders an invisible `Box` with `flexGrow`. Drop it between elements
in a row or column to push them to opposite edges, or use multiple
spacers to distribute space evenly.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`SpacerProps`](spacer#spacer-props) |

## Returns

`Element`

## Example

```tsx
// Push "Save" to the right edge
<Box style={{ flexDirection: "row" }}>
  <Text>Title</Text>
  <Spacer />
  <Button label="Save" onPress={save} />
</Box>
```

---

## SpacerProps

Props for the [Spacer](spacer) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="size"></a> `size?` | `number` | Flex grow factor. Default `1`. Set higher values to take proportionally more space. |
