---
last_updated: 2025-12-12
version: 1.0.0
trigger: always_on
description: Safety rules and guidelines for agent operations.
---

# Safety Rules

## General Principles
- **Prioritize Safety and Reversibility**: All operations should be planned with safety and reversibility in mind.
- **Ask for Confirmation**: Always ask for user confirmation when performing potentially destructive actions (overwriting files, deleting resources, changing system configurations).

## Command Execution
- **Never use force flags**: Never use -f or --force in any command.
- **Avoid destructive defaults**: Do not use dangerous or destructive commands and options.
- **Handle confirmation**: If a command requires confirmation, handle it appropriately by prompting the user or using interactive modes (like m -i), but NEVER automatically force yes (e.g., -y should be used with extreme caution and never for destructive actions without prior user approval, and -f is strictly forbidden).

## Repository Management
- **No upstream interactions**: Never create issues or pull requests on upstream repositories. Operations should be confined to the user's fork or repository unless explicitly instructed otherwise.

## Git and GitHub Operations
- **No force pushes**: Never use --force or -f in git operations (e.g., git push --force).
- **PR Merging**: Never merge a pull request without explicit user permission.

## File Operations
- **No recursive forced deletion**: Never use m -rf.
- **Interactive deletion**: Use m -i to allow for user interactive confirmation when deleting files.
- **Confirm deletions**: Always ask for confirmation before deleting files.

## Package Management
- **No forced installs**: Never use --force when installing packages.
- **Specific updates only**: Never run a blanket update (e.g., 
pm update, pip upgrade) without specifying the specific package to update.

## Scaffolding & Initialization
- **Scaffolding Safety**: Before running any initialization or scaffolding command (e.g., create, init), **check for existing critical files** (entry points, configs) to prevent accidental overwrites.

