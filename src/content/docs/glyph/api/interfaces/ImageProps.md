---
title: 'ImageProps'
---
Props for the [Image](../variables/Image.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="autoload"></a> `autoLoad?` | `boolean` | Auto-load on mount (default: false - user presses space) |
| <a id="autosize"></a> `autoSize?` | `boolean` | Auto-size the box to fit the image dimensions (default: false). When true, the box resizes to match the image's aspect ratio. Use maxWidth/maxHeight to constrain the size. |
| <a id="disabled"></a> `disabled?` | `boolean` | Whether the component is disabled (skipped in tab order, no key handling) |
| <a id="focusable"></a> `focusable?` | `boolean` | Whether the component is focusable (default: true) |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](Style.md) | Style when focused |
| <a id="height"></a> `height?` | `number` | Fixed height in cells (optional, uses flexbox if not set) |
| <a id="inline"></a> `inline?` | `boolean` | Allow inline rendering in terminal (default: true) |
| <a id="maxheight"></a> `maxHeight?` | `number` | Maximum height in cells when autoSize is true |
| <a id="maxwidth"></a> `maxWidth?` | `number` | Maximum width in cells when autoSize is true |
| <a id="onerror"></a> `onError?` | (`error`) => `void` | Called on error |
| <a id="onstatechange"></a> `onStateChange?` | (`state`) => `void` | Called when image state changes |
| <a id="placeholder"></a> `placeholder?` | `string` | Custom placeholder text (default: image name) |
| <a id="placeholderstyle"></a> `placeholderStyle?` | [`Style`](Style.md) | Style for the placeholder |
| <a id="src"></a> `src` | `string` | Image source - local path or remote URL |
| <a id="style"></a> `style?` | [`Style`](Style.md) | Container style (flexbox) |
| <a id="unloadtrigger"></a> `unloadTrigger?` | `number` | Force unload trigger - increment this value to force the image to unload. Useful when parent component handles Escape or other close actions. Example: <Image unloadTrigger={unloadCount} ... /> |
| <a id="width"></a> `width?` | `number` | Fixed width in cells (optional, uses flexbox if not set) |
