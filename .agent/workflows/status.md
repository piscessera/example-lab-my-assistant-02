---
description: Project Status Check. Summarize details, progress, and current state.
---

1.  Read Project Overview (README, Tech Stack).
2.  Read Active Status (WORKING_LOG).
3.  Check ongoing Git Branch/Issue.
4.  Summarize "What is being done?" vs "What is left?".

```powershell
Write-Host "Gathering Project Status..." -ForegroundColor Cyan

# 1. Project Details
$readme = Get-Content "README.md" -ErrorAction SilentlyContinue | Out-String
if ($readme) {
    if ($readme -match "# (.*)") { Write-Host "Project: $($matches[1].Trim())" -ForegroundColor Green }
    if ($readme -match "Use (.*)") { Write-Host "Tech Stack: $($matches[1].Trim())" }
} else {
    Write-Warning "No README.md found."
}

# 2. Current Progress (Working Log)
$logPath = "WORKING_LOG.md"
if (Test-Path $logPath) {
    $log = Get-Content $logPath -Tail 10
    Write-Host "`n[Current Context]" -ForegroundColor Yellow
    $log | ForEach-Object { Write-Host $_ }
}

# 3. Active Context (Git)
$branch = git branch --show-current
if ($branch) {
    Write-Host "`n[Active Branch] $branch" -ForegroundColor Cyan
    if ($branch -match "feature/(\d+)") {
       $issueId = $matches[1]
       Write-Host "Likely working on Issue #$issueId"
       # Optional: gh issue view $issueId --json title,body
    }
}

# 4. Agent Summary Prompt
Write-Host "`n[Summary Request]" -ForegroundColor Magenta
Write-Host "Based on the above, please summarize:"
Write-Host "1. What are we currently building?"
Write-Host "2. What step of the workflow are we in?"
Write-Host "3. What is the immediate next step?"
```
