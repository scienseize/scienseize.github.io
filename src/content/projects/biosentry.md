---
title: BioSentry Intelligence
order: 5
kind: Clinical triage
year: '2026'
blurb: An early-warning dashboard for Philippine hospital wards.
images: [/projects/biosentry.png, /projects/biosentry-ward-sim.png, /projects/biosentry-patch.webp]
cover: /projects/biosentry-patch.webp
tools: [FastAPI, React, TypeScript]
links:
  - { label: Dashboard, href: "https://github.com/kitchen-station/BioSentry-Intelligence" }
  - { label: Ward sim, href: "https://github.com/kitchen-station/biosentry-ward-sim" }
---

BioSentry ranks ward patients by their NEWS2 early-warning score, so clinicians know who to see first.

Each clinician gets their own access, and every view of patient data is audited.

Until a hospital is connected, a ward simulator feeds the dashboard. It runs a whole synthetic hospital in the browser, with floors, beds, nurses and patients whose vital signs change over the shift.

The vital signs would come from an adhesive biosensor patch, worn on the chest for 3 to 5 days. I modeled the patch in 3D to show how it fits together.
