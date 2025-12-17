---
description: Learn from Retrospectives. Read external/past retros and improve rules.
---

1. List available retrospectives (local or from a specified path).
2. Read the selected retrospective.
3. Propose updates to `.agent/rules/` based on findings.

```powershell
# 1. Select Source
$sourcePath = Read-Host "Enter path to retrospectives folder (default: docs/retrospectives)"
if (-not $sourcePath) { $sourcePath = "docs/retrospectives" }

if (Test-Path $sourcePath) {
    $retros = Get-ChildItem $sourcePath -Filter "*.md"
    
    if ($retros.Count -gt 0) {
        Write-Host "Available Retrospectives:" -ForegroundColor Cyan
        $i = 0
        foreach ($r in $retros) {
            Write-Host "[$i] $($r.Name)"
            $i++
        }
        
        $choice = Read-Host "Select Retro to Learn From (0-$(($i-1)))"
        $selectedFile = $retros[[int]$choice]
        
        # 2. Read Content
        Write-Host "`nReading $($selectedFile.Name)..." -ForegroundColor Cyan
        Get-Content $selectedFile.FullName | Select-Object -First 20 # Preview
        
        # 3. Prompt for Action
        Write-Host "`n[Action required from Agent]" -ForegroundColor Yellow
        Write-Host "Please read the full content of $($selectedFile.FullName) and suggest updates to:"
        Write-Host "- development-principles.md"
        Write-Host "- development-workflow.md"
        Write-Host "- workspace-setup.md"
        
        # Note: The agent will need to use `read_file` tool next based on this output.
    } else {
        Write-Host "[WARN] No retrospective files found in $sourcePath." -ForegroundColor Yellow
    }
} else {
    Write-Error "Path not found: $sourcePath"
}
```
