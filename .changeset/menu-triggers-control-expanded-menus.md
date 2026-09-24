---
'@astryxdesign/core': patch
---

[fix] Give DropdownMenu and Breadcrumbs menu triggers `aria-controls` only while
the menu is expanded, as DropdownMenuSubMenu already does. axe cannot verify a
controls reference on an `aria-haspopup` trigger, so it flagged every closed
menu for manual review.

@light-merlin-dark
