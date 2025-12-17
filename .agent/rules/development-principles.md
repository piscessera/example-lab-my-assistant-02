---
last_updated: 2025-12-12
version: 1.0.0
trigger: always_on
description: Development principles and best practices for code quality, workflow, architecture, and testing.
---

# Development Principles

## 1. Code Quality
- **Avoid Over-engineering**: Keep solutions simple and direct. Do not anticipate future needs that are not currently required.
- **Maintainability**: Write code that is easy to understand and maintain.
- **File Size Limit**:
  - Code files should not exceed **1,000 LOC (Lines of Code)**.
  - If a file exceeds this limit, refactor and split it into smaller, logical modules.
- **Function/Method Size**: Keep functions and methods small and focused on a single responsibility.
- **Testability**: Ensure every function and method is designed to be testable.

## 2. Git Workflow
- **Commit Frequency**: Commit often to save progress and create a granular history.
- **Commit Messages**: 
  - Follow the **Conventional Commits** specification (v1.0.0).
  - Format: `<type>[optional scope]: <description>`
  - Types:
    - `feat`: New feature
    - `fix`: Bug fix
    - `docs`: Documentation only
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `perf`: A code change that improves performance
    - `test`: Adding missing tests or correcting existing tests
    - `build`, `ci`, `chore`: Build system, CI configuration, or maintenance tasks
  - Example: `feat(auth): implement user login API`
  - Reference: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- **Branch Management**: Use **Git Flow** for branch management (e.g., `feature/`, `bugfix/`, `release/`, `hotfix/`, `develop`, `main`).
- **Security**: **NEVER** commit secrets (API keys, database tokens, passwords) to Git. Use environment variables.

## 3. Architecture
- **Tech Stack & Design**: 
  - Refer to `docs/design/` for specific technical stack details, architecture diagrams, and design decisions.
  - Follow the folder structure defined in `workspace-setup.md`.
- **Pattern**: Use **Client-Server Architecture**.
- **Separation of Concerns**:
  - **Full Stack**:
    - Manage **Frontend** and **Backend** as distinct entities involved in `[project_name]/frontend` and `[project_name]/backend`.
    - **Frontend**: Separate UI Logic from Business Logic; isolate API layer.
    - **Backend**: Layered architecture (Controller, Service, Data Access).
  - **Single Application** (Frontend-only / Backend-only):
    - Maintain clear separation of duties within `[project_name]/app/src/` (e.g., `src/ui` vs `src/core` or `src/controllers` vs `src/services`).
    - **Modular Design**: Ensure components/modules are loosely coupled.
- **Logging**:
  - **Storage**: Log user activity and system events to separate files. Manage file sizes (rotation/retention) to prevent disk overflow.
  - **Format**: Use **Structure JSON** for logs to ensure machine readability and parsing.
  - **Best Practices** (Ref: [Sematext](https://sematext.com/blog/log-formatting-8-best-practices-for-better-readability/)):
    - **Timestamp**: Use ISO 8601 format (e.g., `YYYY-MM-DDTHH:mm:ssZ`).
    - **Levels**: Use string log levels (`DEBUG`, `INFO`, `WARN`, `ERROR`).
    - **Context**: Include relevant fields like `user_id`, `request_id`, `source` (application, class/method).
    - **Fields**: Use standardized field names.
    - **Versioning**: Include build version or commit hash in logs.

## 4. Testing
- **Pre-Completion Checklist**: Before marking a task as done, ensure:
  1. **Build**: The application builds successfully without errors.
  2. **Critical Path**: The "happy flow" (critical path) is tested and working.
  3. **Acceptance Criteria**: The feature meets all defined acceptance criteria for the task.
  4. **Responsive Check**: Verify UI behavior on different screen sizes (mobile, tablet, desktop) to ensure no overflows or layout breaks.

## 5. Error Handling
- **No Empty Catches**: Never swallow exceptions with an empty `catch` block.
- **Logging**: Always log the error (with stack trace for system errors) or propagate it to the caller.
- **User Feedback**:
  - Show clear, friendly messages to the user in the UI.
  - **Never** expose raw system errors or stack traces to the user (e.g., in alerts or page elements).

## 6. Dependency Management
- **Versioning**: Use **specific version numbers** (e.g., `1.2.3`) in `package.json` (remove `^` or `~` caret/tilde if strict stability is required, or follow project policy).
- **Stability**: Explicitly prefer **Stable** or **LTS** versions of libraries. Avoid "latest", "beta", or "edge" unless absolutely required for a specific feature.
- **Updates**: Do not update dependencies implicitly. Update explicitly and test.

## 7. Working Log
- **Activity Logging**: Always log what is being worked on.
- **Template**: Keep it concise but informative.
  - Example:
    ```
    Date: YYYY-MM-DD
    Task: [Task Name/ID]
    Status: [In Progress/Completed/Blocked]
    Timeline:
      - [Time]: [Short summary of activity]
      - [Time]: [Short summary of activity]
    Notes: [Brief summary of changes, decisions, or issues]
    ```

