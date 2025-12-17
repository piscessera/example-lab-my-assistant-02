---
description: Collect user feedback to improve agent performance and rules.
---
1. Collect feedback from the user.
2. Save user feedback to `docs/retrospectives/feedback_log.md`.
3. Analyze if immediate rule updates are needed.

```powershell
$feedbackType = Read-Host "Type of Feedback (1: Rule Update, 2: Correction, 3: General)"
$typeStr = switch ($feedbackType) { "1" {"Rule Update"} "2" {"Correction"} "3" {"General"} Default {"General"} }

$content = Read-Host "Enter your feedback"

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$entry = "## [$timestamp] Type: $typeStr`n$content`n`n"

$logDir = "docs/retrospectives"
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir -Force | Out-Null }

$logFile = "$logDir/feedback_log.md"

if (-not (Test-Path $logFile)) {
    New-Item -ItemType File -Path $logFile -Force | Out-Null
    Set-Content -Path $logFile -Value "# Feedback Log`n`n"
}

Add-Content -Path $logFile -Value $entry
Write-Host "✅ Feedback saved to $logFile" -ForegroundColor Green
Write-Host "💡 To implement changes, use /retro or edit .agent/rules/ directly." -ForegroundColor Cyan
```
