[**@semos-labs/glyph**](../index.md)

***

# Interface: DialogContextValue

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alert"></a> `alert` | (`content`, `options?`) => `Promise`\<`void`\> | Show an alert dialog. Returns a promise that resolves when dismissed. |
| <a id="confirm"></a> `confirm` | (`content`, `options?`) => `Promise`\<`boolean`\> | Show a confirm dialog. Returns a promise that resolves to true (OK) or false (Cancel). |
