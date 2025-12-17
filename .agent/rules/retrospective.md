---
last_updated: 2025-12-12
version: 1.0.0
trigger: model_decision
description: Template and guidelines for conducting retrospectives to improve processes and rules.
---

# Retrospective Guidelines

## Purpose
The retrospective is a critical reflection process performed after completing a major phase, task, or attempting to resolve a complex issue. Its primary goal is to identify what worked, what didn't, and how to improve our core documentation:
- **Development Principles** (`development-principles.md`)
- **Development Workflow** (`development-workflow.md`)
- **Safety Rules** (`safety-rules.md`)

## When to Conduct
- At the end of a sprint or project phase.
- After a critical bug or failure.
- When existing rules caused friction or lack of clarity.

## Template

### 1. Context
- **Date**: YYYY-MM-DD
- **Target**: [Phase Name / Task ID / Event]

### 2. Reflection
- **What Went Well?**:
  - [Success 1]
  - [Success 2]
- **What Didn't Go Well?**:
  - [Issue 1]: [Root Cause]
  - [Issue 2]: [Root Cause]
- **What Can We Improve?**:
  - [Suggestion 1]

### 3. Action Items
- [ ] Action 1
- [ ] Action 2

## Updating Rules & Principles (Crucial)
If the retrospective identifies a need to update **Development Principles**, **Workflow**, or **Safety Rules**, follow this strict process:

1.  **Draft the Change**: Clearly write down the proposed new rule or modification.
2.  **Justify**: Explain *why* this change prevents future issues or improves efficiency based on the "What Didn't Go Well" section.
3.  **Confirm with User**:
    > **WARNING**: Do NOT automatically update the rule files.
    > You MUST present the proposed changes to the USER and ask for explicit permission to apply them to the rule files.
4.  **Apply**: Only after user approval, update the respective markdown file.
