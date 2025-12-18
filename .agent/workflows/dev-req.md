---
description: Step 1 - Requirement Analysis. Create GitHub Issue and Branch.
---

1. Analyze the User's Request.
2. Identify the core problem.
3. **GitHub Issue**: Create a new issue to act as the Requirement Document.
4. **Git Branch**: Create a branch linked to the issue.

```powershell
# 1. Gather Info
$title = Read-Host "Enter Task/Requirement Title"
$details = Read-Host "Enter Detailed Requirements (or 'TBD')"

# 2. Create GitHub Issue
Write-Host "Creating GitHub Issue..." -ForegroundColor Cyan
# Capture output, usually a URL like https://github.com/user/repo/issues/12
$issueUrl = gh issue create --title "$title" --body "## Requirements`n$details`n`n## Analysis & Design`n(To be updated)"

if ($issueUrl) {
    # Extract Issue Number from URL (simplified regex)
    $issueNumber = $issueUrl.Split('/')[-1]
    Write-Host "[OK] Created Issue #$issueNumber" -ForegroundColor Green

    # 3. Create Branch linked to Issue
    # Sanitize title for branch name (remove spaces, special chars)
    $safeTitle = $title -replace '[^a-zA-Z0-9]', '-' -replace '-+', '-'
    $branchName = "feature/$issueNumber-$safeTitle".ToLower()

    Try {
        git checkout -b $branchName
        Write-Host "[OK] Switched to branch: $branchName" -ForegroundColor Green
    } Catch {
        Write-Warning "Could not create branch '$branchName'. Check git status."
    }
} else {
    Write-Error "Failed to create GitHub Issue. Check 'gh auth status'."
}
```

// turbo
1. Investigate necessary libraries or patterns.
2. **Verify Third-Party Data**: If using an External API, run `curl` or `fetch` to confirm data structure and availability *before* planning implementation.
3. Consider edge cases and performance.
4. Update the GitHub Issue with Analysis & Design details.

```powershell
# Optional: Update Issue body with Analysis
$issueId = git branch --show-current | Select-String -Pattern "feature/(\d+)-" | % { $_.Matches.Groups[1].Value }
if ($issueId) {
    $analysis = Read-Host "Add Analysis/Design notes to Issue? (Enter to skip)"
    if ($analysis) {
        # Fetch current body, append analysis (Requires more complex scripting, simpler to just add comment)
        gh issue comment $issueId --body "## Analysis & Design`n$analysis"
        Write-Host "Added Analysis to Issue #$issueId" -ForegroundColor Green
    }
}
```

// turbo
1. Create a checklist of small, focused sub-tasks.
2. Ensure tasks are independent where possible.

// turbo
1. List functional requirements (features).
2. List non-functional requirements (performance, style).
