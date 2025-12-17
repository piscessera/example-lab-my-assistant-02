---
description: Create a new retrospective document.
---

1. Create a retrospective file based on the template.
```powershell
$phaseName = Read-Host "Enter Phase or Event Name (e.g. sprint-1, critical-bug-fix)"
$date = Get-Date -Format "yyyy-MM-dd"
$retroFileName = "${date}_$phaseName.md"
$retroPath = "docs/retrospectives/$retroFileName"

$retroTemplate = @"
# Retrospective: $phaseName
Date: $date

## 1. Context
- **Target**: $phaseName

## 2. Reflection
- **What Went Well?**:
  - 
- **What Didn't Go Well?**:
  - 
- **What Can We Improve?**:
  - 

## 3. Action Items
- [ ] 

## 4. Universal Lessons
*(General principles, not just specific fixes. e.g., "Safety First" instead of "Don't delete main.dart")*
- 

## Updating Rules & Principles
*(Map lessons to specific Rule Files)*
- **Workflow**:
- **Safety**:
- **Principles**:
"@

if (-not (Test-Path $retroPath)) {
    Set-Content -Path $retroPath -Value $retroTemplate -Encoding utf8
    Write-Host "Created retrospective file: $retroPath"
} else {
    Write-Warning "Retrospective file already exists: $retroPath"
}
```