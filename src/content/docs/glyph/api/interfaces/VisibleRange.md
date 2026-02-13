[**@semos-labs/glyph**](../index.md)

***

# Interface: VisibleRange

Visible range passed to the render function in virtualized mode.
Contains the start/end indices and viewport metadata.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="end"></a> `end` | `number` | One past the last visible line index |
| <a id="scrolloffset"></a> `scrollOffset` | `number` | Current scroll offset |
| <a id="start"></a> `start` | `number` | First visible line index (0-based) |
| <a id="viewportheight"></a> `viewportHeight` | `number` | Viewport height in lines |
