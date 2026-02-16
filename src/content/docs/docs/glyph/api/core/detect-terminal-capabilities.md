---
title: 'detectTerminalCapabilities'
---

```ts
function detectTerminalCapabilities(debug?): TerminalCapabilities;
```

Detect which terminal we're running in and what image protocols it supports

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `debug` | `boolean` | `false` |

## Returns

[`TerminalCapabilities`](#terminal-capabilities)

---

## TerminalCapabilities

Terminal capability detection for image protocols

## Properties

| Property | Type |
| ------ | ------ |
| <a id="name"></a> `name` | `string` |
| <a id="supportsiterm2images"></a> `supportsIterm2Images` | `boolean` |
| <a id="supportskittygraphics"></a> `supportsKittyGraphics` | `boolean` |
| <a id="supportssixel"></a> `supportsSixel` | `boolean` |
