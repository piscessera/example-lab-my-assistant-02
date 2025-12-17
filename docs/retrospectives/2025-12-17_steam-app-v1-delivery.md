# Retrospective: steam-app-v1-delivery
Date: 2025-12-17

## 1. Context
- **Target**: Steam Free Games Web App (Feat #1)

## 2. Reflection
- **What Went Well?**:
  - React + Vite setup was smooth.
  - Dark theme UI looked Professional.
  - Successfully pivoted from CheapShark to Steam Proxy when data was missing.
  - Implemented visual evidence collection (`docs/evidence`).
  - **Process Improvement**: Updated `init` workflow to *enhance* rather than *overwrite* existing `README.md`, preserving user context (Feedback Loop).


- **What Didn't Go Well?**:
  - Initial API choice (CheapShark) returned no data, wasting time.
  - Steam Search JSON `price` field was empty/undocumented, leading to "$Paid" placeholder issue.
  - ID parsing from Logo URL was discovered late (broken links).

- **What Can We Improve?**:
  - **Data Verification First**: Run `curl` to inspect JSON structure *before* writing the Service layer.
  - **Graceful Fallbacks**: If price is missing, don't show "$Paid", show "Free" or nothing. Default to checking `json=1` structure deeply.

## 3. Action Items
- [x] Switch to HTML Scraping via Proxy (Done).
- [ ] Add explicit "Scraping" warning/disclaimer in README.

## 4. Universal Lessons
- **Verify Third-Party APIs**: 'Free' != '100% Discount' in API terms.
- **Fail Gracefully**: UI should handle missing data (prices/IDs) without breaking or showing debug text ("$Paid").
- **Evidence is Key**: Screenshots helped prove the "No Data" issue to the User quickly.

## Updating Rules & Principles
- **Workflow**: Add "Verify API Data" step to Analysis phase.
- **Principles**: "No Placeholders in UI" -> If data missing, hide element or show user-friendly state.
