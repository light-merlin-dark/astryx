---
'@astryxdesign/core': patch
---

[fix] Components that announce their rendered text (Selector, MultiSelector, Typeahead, CommandPalette, ChatComposer, TokenizerBottomSheet, EmptyState) render again where there is no `document`, such as react-test-renderer or a host's non-DOM test harness. 0.7.5 read `document.readyState` while rendering; a render with no document now counts as part of the page's first load.
@light-merlin-dark
