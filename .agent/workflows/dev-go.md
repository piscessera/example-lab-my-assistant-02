---
description: Step 6 - Develop. Code, Log, and PR.
---

1. Review Development Principles (Code Quality, Git).
2. Implement one sub-task at a time.
3. Commit often with Conventional Commits.

// turbo
1. Perform Unit Testing.
2. Perform Integration Testing.
3. Validate against Acceptance Criteria.

// turbo
1. Add inline comments.
2. Update README.md (if features changed).
3. Document new environment variables or setup steps.

// turbo
1. Update WORKING_LOG.md (Local).
2. **GitHub Update**: Add working log to Issue.
3. **Pull Request**: Create PR and close Issue.

```powershell
# Get Issue ID from Branch Name
$branch = git branch --show-current
if ($branch -match "feature/(\d+)-") {
    $issueId = $matches[1]
    Write-Host "Detected Issue #$issueId from branch." -ForegroundColor Cyan
} else {
    $issueId = Read-Host "Could not detect Issue ID. Enter Issue # manually (or leave blank to skip linking)"
}

# 1. Update GitHub Issue with Log
$logUpdate = Read-Host "Enter Working Log Entry for Issue (e.g. 'Completed API endpoints, moving to tests')"
if ($issueId -and $logUpdate) {
    gh issue comment $issueId --body "## Working Log Update`n$logUpdate"
    Write-Host "[OK] Added log to Issue #$issueId" -ForegroundColor Green
}

# 2. Create Pull Request
$createPR = Read-Host "Create Pull Request now? (y/n)"
if ($createPR -eq 'y') {
    $title = Read-Host "Enter PR Title"
    $body = Read-Host "Enter PR Description"
    
    # Push current branch
    git push -u origin HEAD
    
    if ($LASTEXITCODE -eq 0) {
        # Construct body with "Closes #ID" to auto-close issue on merge.
        $fullBody = "$body`n`nCloses #$issueId"
        
        # Create PR using GitHub CLI
        gh pr create --title "$title" --body "$fullBody" --base main
        Write-Host "[OK] PR Created and linked to #$issueId" -ForegroundColor Green
    } else {
        Write-Error "Failed to push branch. PR creation aborted."
    }
}
```
