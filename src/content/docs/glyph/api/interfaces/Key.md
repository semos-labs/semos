---
title: 'Key'
---
Parsed key press information.

Received by [useInput](../functions/useInput.md) handlers, `onKeyPress` callbacks,
and [Keybind](../functions/Keybind.md) matching.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="alt"></a> `alt?` | `boolean` | `true` when Alt / Option is held. |
| <a id="ctrl"></a> `ctrl?` | `boolean` | `true` when Ctrl is held. |
| <a id="meta"></a> `meta?` | `boolean` | `true` when Meta / Cmd / Super / Win is held. |
| <a id="name"></a> `name` | `string` | Key name (`"a"`, `"return"`, `"escape"`, `"up"`, `"space"`, …). |
| <a id="sequence"></a> `sequence` | `string` | Raw byte sequence from the terminal. |
| <a id="shift"></a> `shift?` | `boolean` | `true` when Shift is held. |
