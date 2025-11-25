## 1. Implementation
- [x] Review current content script insertion points and identify stable mount options independent of DeepL DOM ids.
- [x] Implement container-based injection under a stable root (e.g., `body`) with guard to avoid duplicate rendering.
- [x] Ensure styling keeps the control visible and unobtrusive across viewport sizes and DeepL locales.

## 2. Validation
- [x] Manual check on `https://www.deepl.com/translator` and `https://www.deepl.com/ja/translator` to confirm the button renders and clipboard line-break removal works.
