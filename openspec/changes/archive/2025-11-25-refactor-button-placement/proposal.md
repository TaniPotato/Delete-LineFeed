# Change: More robust button placement for clipboard line-break remover

## Why
- Current button injection depends on DeepL's internal DOM id (`product-navigation-mobile-bar-translator-link`), which is brittle against layout changes and can fail silently if the element is missing.
- The extension should remain usable even when DeepL's structure changes.

## What Changes
- Mount the "改行を削除" control in a self-contained container attached to a stable root (e.g., `body`) instead of targeting DeepL-specific nodes.
- Preserve existing clipboard line-break removal behavior and styling while ensuring single-instance rendering and non-intrusive placement.

## Impact
- Affected specs: `linefeed-removal-extension`
- Affected code: `content.js`, `style.css`
