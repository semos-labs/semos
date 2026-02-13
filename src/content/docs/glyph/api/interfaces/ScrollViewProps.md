[**@semos-labs/glyph**](../index.md)

***

# Interface: ScrollViewProps

Props for the [ScrollView](../functions/ScrollView.md) component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` \| (`range`) => `ReactNode` | Children to render. When `virtualize` is true, only visible children are rendered. Can also be a render function `(range: VisibleRange) => ReactNode` for line-based virtualization. |
| <a id="defaultscrolloffset"></a> `defaultScrollOffset?` | `number` | Initial offset for uncontrolled mode |
| <a id="disablekeyboard"></a> `disableKeyboard?` | `boolean` | Disable keyboard scrolling |
| <a id="estimateditemheight"></a> `estimatedItemHeight?` | `number` | Estimated height per child in lines (default: 1). Used for initial scroll calculations before actual heights are measured. |
| <a id="focusable"></a> `focusable?` | `boolean` | Make ScrollView itself focusable. Default: true. Set to false if you want scroll to follow child focus only. |
| <a id="focusedstyle"></a> `focusedStyle?` | [`Style`](Style.md) | Style applied when ScrollView is focused |
| <a id="onscroll"></a> `onScroll?` | (`offset`) => `void` | Callback when scroll offset should change (controlled mode) |
| <a id="overscan"></a> `overscan?` | `number` | Extra lines to render above/below viewport (default: 2) |
| <a id="scrolloffset"></a> `scrollOffset?` | `number` | Controlled scroll offset (rows from top) |
| <a id="scrollstep"></a> `scrollStep?` | `number` | Lines to scroll per arrow key press (default: 1) |
| <a id="scrolltofocus"></a> `scrollToFocus?` | `boolean` | Auto-scroll to focused element (default: true) |
| <a id="showscrollbar"></a> `showScrollbar?` | `boolean` | Show scrollbar when content is scrollable (default: true) |
| <a id="style"></a> `style?` | [`Style`](Style.md) | - |
| <a id="totallines"></a> `totalLines?` | `number` | Total content height in lines (for render function mode). When set with a render function, enables line-based virtualization. |
| <a id="virtualize"></a> `virtualize?` | `boolean` | Enable virtualization. When true, only visible children are rendered. Heights are auto-measured - no need to specify them! |
