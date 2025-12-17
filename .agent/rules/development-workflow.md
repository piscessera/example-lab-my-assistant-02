---
last_updated: 2025-12-12
version: 1.0.0
trigger: always_on
description: Standard development workflow steps from requirement to documentation.
---

# Development Workflow

Follow this structured workflow for every development task to ensure quality and consistency.

## Shortcode Usage
- **Individual Steps**: You can execute any single step by using its shortcode (e.g., `/dev-req`).
- **Chained Steps**: You can execute multiple steps in sequence by listing shortcodes separated by spaces (e.g., `/dev-req /dev-plan todolist with no database`).
- **Shortcodes**:
  1. `/dev-req` (Steps 1-4: Requirement -> Analyze -> Task -> DoD)
  2. `/dev-plan` (Step 5: Plan)
  3. `/dev-go`  (Steps 6-9: Develop -> Test -> Doc -> Log)

## 1. Requirement
- **Goal**: Clearly understand what needs to be built or solved.
- **Actions**:
  - Read and analyze the user request.
  - Ask clarifying questions if requirements are ambiguous.
  - Identify the core problem and the desired outcome.
  - **GitHub Issue**: Title must follow Conventional Commits (e.g., feat: Home Screen with Calendar, feat(home): add font controls).
  - **Git Branch**: Create a new branch following the format: `feature/[running_number]-[req-summarize-meanful-naming]`.

## 2. Analyze & Research & Design
- **Goal**: Plan the solution before writing code.
- **Actions**:
  - **Research**: Investigate necessary libraries, documentation, or existing patterns.
  - **Analyze**: Consider potential edge cases and performance implications.
  - **Design**: 
    - Architecture: detailed component hierarchy, data flow, or API structure.
    - UI/UX: Design mocks or layout plans (if applicable).

## 3. Breakdown Tasks
- **Goal**: Split the work into manageable, logical units.
- **Actions**:
  - Create a list of small, focused sub-tasks.
  - **Task File Naming**: If creating efficient task files, use format docs/tasks/task-[id]-[description].md.
  - **Task File Content**: Must include sections for **Requirement**, **Analysis**, **Design**, **Research** (if applicable), and **Plan**.
  - Ensure each task is independent where possible.
  - Estimate the complexity of each task.

## 4. Acceptance Criteria
- **Goal**: Define what "Done" means.
- **Actions**:
  - List specific conditions that must be met for the task to be considered complete.
  - Include functional requirements (it works) and non-functional requirements (performance, style).

## 5. Implement Plan
- **Goal**: Create a roadmap for execution.
- **Actions**:
  - Outline the step-by-step implementation order.
  - Identify dependencies between steps.
  - Review the plan against safety rules (e.g., is it reversible? is it safe?).

## 6. Develop
- **Goal**: Write high-quality, maintainable code.
- **Actions**:
  - Write code following the **Development Principles** (Code Quality, Git Workflow, Formatting).
  - Implement one sub-task at a time.
  - Commit often with meaningful messages.

## 7. Testing & Verification
- **Goal**: Ensure the solution works as expected in the real world.
- **Actions**:
  - **Unit Testing**: Test individual functions/components.
  - **Integration Testing**: Test how components work together.
  - **Manual Verification**: Verify the critical path (happy flow) manually.
  - **Runtime Verification**: **CRITICAL** - Ensure the application (or feature) launches and runs successfully. A successful build is NOT enough.
  - **Continuous Analysis**: Run static analysis/linter tools frequently (not just at the end) to catch deprecated code or errors early.
  - **Validation**: Check against the **Acceptance Criteria**.

## 8. Documentation
- **Goal**: Make the code easy to understand and use.
- **Actions**:
  - Add inline comments for complex logic.
  - Update `README.md` or other documentation files if features change.
  - Document any new environment variables or setup steps.

## 9. Working Log & Review
- **Goal**: Track progress and prepare for review.
- **Actions**:
  - Update the working log file continuously.
  - Use the template defined in **Development Principles**.
  - **Visual Evidence**: Capture screenshots or videos of the running feature (especially for UI).
  - **Pull Request**: Create a Pull Request to `main` upon completion, attaching the Visual Evidence.

