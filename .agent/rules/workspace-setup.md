---
last_updated: 2025-12-12
version: 1.0.0
trigger: model_decision
description: Recommended workspace structure and file organization guidelines.
---

# Workspace Setup Guidelines

This document outlines the recommended folder structure and file organization based on the project's [Development Principles](./development-principles.md) and [Workflow](./development-workflow.md).

## Recommended Structure

The workspace is divided into a root-level documentation/management layer and a dedicated project directory for source code.

```text
/
 .agent/                 # Agent configuration and rules
    rules/              # Active rule definitions
 docs/                   # Documentation & Planning
    design/             # [Workflow] Architecture, Designs
    tasks/              # [Workflow] Task breakdown
    retrospectives/     # [Retrospective] Lessons learned
    working_logs/       # [Workflow] Archived logs
 logs/                   # [Logging] System & Activity logs
 [project_name]/         # <--- SOURCE CODE ROOT
    app/                # (Option: Single App)
       src/
       tests/
    frontend/           # (Option: Full Stack) Client-side
       src/
       tests/
    backend/            # (Option: Full Stack) Server-side
        src/
        tests/
 WORKING_LOG.md          # [Workflow] Active working log (Timeline & Status)
 README.md               # [Documentation] Setup & Usage instructions
 .gitignore              # [Safety] Security & Cleanliness exclusions
```

## Key Files & Directories

### 1. Working Log (`WORKING_LOG.md` & `docs/working_logs/`)
- **Purpose**: Tracks daily activity, decisions, and progress.
- **Location**: 
  - `WORKING_LOG.md`: Root directory (Active/Current context only).
  - `docs/working_logs/YYYY-MM-DD.md`: Archived logs.
- **Rotation Strategy**: To prevent the root file from becoming too large, archive old entries to `docs/working_logs/` periodically (e.g., daily, weekly, or after task completion).
- **Reference**: See *Development Principles #7*.

### 2. Task Management (`docs/tasks/`)
- **Purpose**: specific task definitions.
- **Content**:
  - Requirement
  - Acceptance Criteria
  - Implementation Plan
- **Reference**: See *Development Workflow*.

### 3. Retrospectives (`docs/retrospectives/`)
- **Purpose**: Stores retrospective records after major phases.
- **Reference**: See *Retrospective Guidelines*.
- **Naming**: `YYYY-MM-DD_[PhaseName].md`.

### 4. Code Organization
- **Purpose**: Enforce clean architecture.
- **Separation**:
  - For **Full Stack**: Use `frontend/` and `backend/`.
  - For **Single App**: Use clear separation within `src/` (e.g., `src/core`, `src/ui`).
- **Reference**: See *Development Principles #3*.

### 5. Logs (`logs/`)
- **Purpose**: Storage for structured JSON logs.
- **Note**: Ensure this directory is added to `.gitignore`.
