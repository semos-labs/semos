---
title: '@semos-labs/glyph'
---
## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [BorderStyle](type-aliases/BorderStyle.md) | Border drawing style for [Style.border](interfaces/Style.md#border). |
| [Color](type-aliases/Color.md) | Color value accepted by all style properties. |
| [DimensionValue](type-aliases/DimensionValue.md) | Dimension value in terminal cells or a percentage string. - `number` — absolute cells - `"50%"` — percentage of parent |
| [HexColor](type-aliases/HexColor.md) | Hex color string (e.g. `"#ff00ff"`). |
| [ImageState](type-aliases/ImageState.md) | Lifecycle state of the [Image](variables/Image.md) component. - `"placeholder"` — waiting for user to press Space to load - `"loading"` — image data is being fetched / decoded - `"loaded"` — rendered inline via Kitty / iTerm2 protocol - `"error"` — loading failed - `"preview"` — opened via OS-level preview (Quick Look / xdg-open) |
| [InputType](type-aliases/InputType.md) | Input type for value validation. |
| [NamedColor](type-aliases/NamedColor.md) | Named ANSI terminal color. |
| [RGBColor](type-aliases/RGBColor.md) | RGB color as an object with 0-255 channels. |
| [TextAlign](type-aliases/TextAlign.md) | Horizontal text alignment. |
| [ToastPosition](type-aliases/ToastPosition.md) | Screen corner where toasts are displayed. |
| [ToastVariant](type-aliases/ToastVariant.md) | Visual variant for a toast notification. |
| [WrapMode](type-aliases/WrapMode.md) | Text wrapping mode for [Style.wrap](interfaces/Style.md#wrap). - `"wrap"` — soft-wrap at container edge - `"truncate"` — cut off silently - `"ellipsis"` — cut off with `…` - `"none"` — no wrapping |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AlertOptions](interfaces/AlertOptions.md) | - |
| [AnsiStyle](interfaces/AnsiStyle.md) | - |
| [AppHandle](interfaces/AppHandle.md) | Handle returned by [render](functions/render.md), used to control the application lifecycle. |
| [BoxProps](interfaces/BoxProps.md) | Props for the [Box](variables/Box.md) component. |
| [ButtonHandle](interfaces/ButtonHandle.md) | Handle for Button |
| [ButtonProps](interfaces/ButtonProps.md) | Props for the [Button](variables/Button.md) component. |
| [CheckboxHandle](interfaces/CheckboxHandle.md) | Handle for Checkbox — exposes checked state |
| [CheckboxProps](interfaces/CheckboxProps.md) | Props for the [Checkbox](variables/Checkbox.md) component. |
| [ConfirmOptions](interfaces/ConfirmOptions.md) | - |
| [DialogContextValue](interfaces/DialogContextValue.md) | - |
| [DialogHostProps](interfaces/DialogHostProps.md) | - |
| [FocusableElement](interfaces/FocusableElement.md) | Descriptor for a single focusable element in the registry. |
| [FocusableHandle](interfaces/FocusableHandle.md) | Base handle shared by all focusable elements |
| [FocusRegistryValue](interfaces/FocusRegistryValue.md) | Return type of [useFocusRegistry](functions/useFocusRegistry.md). |
| [FocusScopeProps](interfaces/FocusScopeProps.md) | Props for the [FocusScope](functions/FocusScope.md) component. |
| [ImageHandle](interfaces/ImageHandle.md) | Handle for Image |
| [ImageProps](interfaces/ImageProps.md) | Props for the [Image](variables/Image.md) component. |
| [InputHandle](interfaces/InputHandle.md) | Handle for Input — exposes current value |
| [InputProps](interfaces/InputProps.md) | Props for the [Input](variables/Input.md) component. |
| [JumpNavProps](interfaces/JumpNavProps.md) | Props for the [JumpNav](functions/JumpNav.md) component. |
| [Key](interfaces/Key.md) | Parsed key press information. |
| [KeybindProps](interfaces/KeybindProps.md) | Props for the [Keybind](functions/Keybind.md) component. |
| [LayoutRect](interfaces/LayoutRect.md) | Computed layout rectangle for a node (returned by [useLayout](functions/useLayout.md)). |
| [ListHandle](interfaces/ListHandle.md) | Handle for List — exposes selected index |
| [ListItemInfo](interfaces/ListItemInfo.md) | Information passed to each item's render function. |
| [ListProps](interfaces/ListProps.md) | Props for the [List](variables/List.md) component. |
| [MaskOptions](interfaces/MaskOptions.md) | Input mask utilities for Glyph Input component. |
| [MenuItem](interfaces/MenuItem.md) | A single item in a [Menu](functions/Menu.md). |
| [MenuProps](interfaces/MenuProps.md) | Props for the [Menu](functions/Menu.md) component. |
| [PortalProps](interfaces/PortalProps.md) | Props for the [Portal](functions/Portal.md) component. |
| [ProgressProps](interfaces/ProgressProps.md) | Props for the [Progress](functions/Progress.md) component. |
| [RadioHandle](interfaces/RadioHandle.md) | Handle for Radio — exposes selected value |
| [RadioItem](interfaces/RadioItem.md) | A single option inside a [Radio](variables/Radio.md) group. |
| [RadioProps](interfaces/RadioProps.md) | Props for the [Radio](variables/Radio.md) group component. |
| [RenderOptions](interfaces/RenderOptions.md) | Options for the top-level [render](functions/render.md) function. |
| [ScrollViewProps](interfaces/ScrollViewProps.md) | Props for the [ScrollView](functions/ScrollView.md) component. |
| [SelectHandle](interfaces/SelectHandle.md) | Handle for Select — exposes current selected value |
| [SelectItem](interfaces/SelectItem.md) | A single option inside a [Select](variables/Select.md) dropdown. |
| [SelectProps](interfaces/SelectProps.md) | Props for the [Select](variables/Select.md) component. |
| [SpacerProps](interfaces/SpacerProps.md) | Props for the [Spacer](functions/Spacer.md) component. |
| [SpinnerProps](interfaces/SpinnerProps.md) | Props for the [Spinner](functions/Spinner.md) component. |
| [Style](interfaces/Style.md) | Unified style object for all Glyph elements. |
| [StyledSegment](interfaces/StyledSegment.md) | - |
| [TerminalCapabilities](interfaces/TerminalCapabilities.md) | Terminal capability detection for image protocols |
| [TextHandle](interfaces/TextHandle.md) | Handle for Text (when focusable) |
| [TextProps](interfaces/TextProps.md) | Props for the [Text](variables/Text.md) component. |
| [Toast](interfaces/Toast.md) | A single toast notification. |
| [ToastHostProps](interfaces/ToastHostProps.md) | Props for the [ToastHost](functions/ToastHost.md) component. |
| [UseFocusableOptions](interfaces/UseFocusableOptions.md) | - |
| [UseFocusableResult](interfaces/UseFocusableResult.md) | - |
| [VisibleRange](interfaces/VisibleRange.md) | Visible range passed to the render function in virtualized mode. Contains the start/end indices and viewport metadata. |

## Functions

| Function | Description |
| ------ | ------ |
| [createMask](functions/createMask.md) | Creates a mask handler for use with Input's onBeforeChange prop. |
| [detectTerminalCapabilities](functions/detectTerminalCapabilities.md) | Detect which terminal we're running in and what image protocols it supports |
| [DialogHost](functions/DialogHost.md) | Host component for dialogs. Place this at the root of your app. Provides the useDialog hook to children. |
| [FocusScope](functions/FocusScope.md) | Confines keyboard focus to a sub-tree. |
| [JumpNav](functions/JumpNav.md) | Vim-style quick-jump navigation to any focusable element. |
| [Keybind](functions/Keybind.md) | Declarative keyboard shortcut handler (renders nothing). |
| [Menu](functions/Menu.md) | Pre-styled menu built on top of [List](variables/List.md). |
| [parseAnsi](functions/parseAnsi.md) | Parse a string with ANSI escape codes into styled segments. |
| [Portal](functions/Portal.md) | Renders children as a fullscreen absolute overlay on top of the main tree. |
| [Progress](functions/Progress.md) | Horizontal progress bar with determinate and indeterminate modes. |
| [render](functions/render.md) | Mount a React element into the terminal and start the render loop. |
| [ScrollView](functions/ScrollView.md) | Scrollable container with optional built-in virtualization. |
| [Spacer](functions/Spacer.md) | Flexible spacer that pushes siblings apart. |
| [Spinner](functions/Spinner.md) | Animated spinner indicator. |
| [stripAnsi](functions/stripAnsi.md) | Strip all ANSI escape codes from a string. Useful for measuring visible width. |
| [supportsInlineImages](functions/supportsInlineImages.md) | Check if the terminal supports any inline image protocol |
| [ToastHost](functions/ToastHost.md) | Container that renders toast notifications for its children. |
| [useApp](functions/useApp.md) | Access application-level utilities: exit, terminal dimensions. |
| [useDialog](functions/useDialog.md) | Hook to show alert and confirm dialogs. Must be used within a DialogHost. |
| [useFocus](functions/useFocus.md) | Low-level hook that registers a node in the focus system and tracks whether it is currently focused. |
| [useFocusable](functions/useFocusable.md) | Hook to make any element focusable with keyboard support. |
| [useFocusRegistry](functions/useFocusRegistry.md) | Access all registered focusable elements and navigation helpers. |
| [useInput](functions/useInput.md) | Subscribe to raw keyboard input. |
| [useLayout](functions/useLayout.md) | Subscribe to the computed layout of a node. |
| [useToast](functions/useToast.md) | Push toast notifications from anywhere inside a [ToastHost](functions/ToastHost.md). |

## Variables

| Variable | Description |
| ------ | ------ |
| [Box](variables/Box.md) | Generic layout container — the building block of every Glyph UI. |
| [Button](variables/Button.md) | Focusable button that triggers an action on Enter or Space. |
| [Checkbox](variables/Checkbox.md) | Toggle checkbox with label. Activated via Space or Enter. |
| [Image](variables/Image.md) | Inline image for terminal UIs. |
| [Input](variables/Input.md) | Text input with full keyboard editing, cursor navigation, and optional masking. |
| [List](variables/List.md) | Keyboard-navigable list with vim-style bindings. |
| [masks](variables/masks.md) | Pre-built mask patterns for common use cases. |
| [Radio](variables/Radio.md) | Single-select radio group with keyboard navigation. |
| [Select](variables/Select.md) | Dropdown select with keyboard navigation, type-to-filter, and scrolling. |
| [Text](variables/Text.md) | Renders styled text in the terminal. |
