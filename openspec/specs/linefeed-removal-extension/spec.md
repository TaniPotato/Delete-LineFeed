# linefeed-removal-extension Specification

## Purpose
TBD - created by archiving change refactor-button-placement. Update Purpose after archive.
## Requirements
### Requirement: Provide a stable UI control for line-break removal
The extension SHALL render a single "改行を削除" control on DeepL translator pages without relying on DeepL-specific element ids or layouts.

#### Scenario: Button is available on supported DeepL locales
- **WHEN** a user opens `https://www.deepl.com/translator` or `https://www.deepl.com/ja/translator`
- **THEN** the control appears in a consistent, non-intrusive position (e.g., fixed to the viewport) and does not duplicate if the page rerenders.

### Requirement: Clean clipboard text by removing line breaks
The extension SHALL replace sequences of `\r` and `\n` in the clipboard text with single spaces when the control is activated.

#### Scenario: Clipboard is cleaned on button click
- **GIVEN** the clipboard contains multi-line text
- **WHEN** the user clicks the "改行を削除" control
- **THEN** the clipboard is updated with the same text but with all line breaks collapsed to single spaces.

