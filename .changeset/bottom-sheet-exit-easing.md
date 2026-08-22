---
'@astryxdesign/core': patch
---

[fix] BottomSheet: the sheet leaves on an exit curve, so closing looks like a close.

Every sheet ran both directions on `--ease-standard`, `cubic-bezier(0.24, 1, 0.4, 1)`. That is a decelerate curve — it spends its speed immediately and coasts — which is right for an entrance and wrong for an exit. Measured on device (iPhone, real Safari), tapping the scrim put the sheet half off-screen in 118ms of the 410ms transition and fully off-screen in 218ms; the remaining ~200ms moved pixels already below the fold. What you saw was the sheet vanishing on the tap, with the dim gone before it. This is the "the bottom sheet closes without animation" report, and it applies to the touch DateInput picker, which is a Bottom Sheet.

The closing state now carries its own accelerating curve, `cubic-bezier(0.4, 0, 1, 1)`, over the shorter `--duration-medium-min` band: the sheet holds for a beat, gathers speed, and is quickest as it leaves the screen — the same shape the platform sheets use. Same page, after: half gone at 251ms, off-screen at 351ms of a 310ms transition. The entrance is untouched.

The scrim leaves with it. Its fade was on the same decelerate token and the longer duration, so it reached ~0 opacity at 117ms and then let an undimmed page sit under a sheet that was still moving. While the sheet is closing the dim runs `linear` (a fade covers no distance, so front-loading its progress just ends it early — the reasoning the touch date picker's surface swap already carries) over the exit's duration, so dim and sheet finish together. `BottomSheetSwitcher` gets the same treatment when its flow closes; a handoff between two sheets is not a close and is unchanged.

@imdreamrunner
