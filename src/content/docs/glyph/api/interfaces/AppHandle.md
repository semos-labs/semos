---
title: AppHandle
---
Handle returned by [render](../functions/render.md), used to control the application lifecycle.

## Methods

### exit()

```ts
exit(code?): void;
```

Exit the process with an optional exit code.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `code?` | `number` |

#### Returns

`void`

***

### unmount()

```ts
unmount(): void;
```

Tear down the React tree and clean up terminal state.

#### Returns

`void`
