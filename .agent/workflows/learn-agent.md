---
description: Learn best practices and rules from another agent workspace (Local or GitHub) using /learn-agent.
---

1.  **Identify Source**: Determine if the target is a local directory or a GitHub repository.
2.  **Fetch Rules**: Retrieve the contents of `.agent/rules` from the source.
3.  **Analyze & Apply**: Compare with local rules and propose/apply updates.
4.  **Update Metadata**: If any changes are applied, update `version` (bump patch) and `last_updated` date in the frontmatter of the modified files.

```powershell
$source = Read-Host "Enter GitHub URL or Local Path to Agent Workspace"

$tempDir = $null
$rulesDir = $null

if ($source -match "^https?://.*github.com.*") {
    Write-Host "Detected GitHub URL. Cloning..." -ForegroundColor Cyan
    $tempDir = Join-Path $env:TEMP "agent-learn-rules-$(Get-Random)"
    # Quiet clone, depth 1
    git clone --depth 1 $source $tempDir
    if ($LASTEXITCODE -eq 0) {
        $rulesDir = Join-Path $tempDir ".agent\rules"
    } else {
        Write-Error "Failed to clone repository."
    }
} elseif (Test-Path $source) {
    if (Test-Path (Join-Path $source ".agent\rules")) {
        $rulesDir = Join-Path $source ".agent\rules"
    } elseif ($source -match "rules$") { 
         # Maybe the user pointed directly to rules dir?
         $rulesDir = $source 
    } else {
         # Assume root, check if valid; attempt to construct path
         $potentialRules = Join-Path $source ".agent\rules"
         if (Test-Path $potentialRules) {
            $rulesDir = $potentialRules
         } else {
            Write-Warning "Path exists but .agent/rules not found immediately."
         }
    }
}

if ($rulesDir -and (Test-Path $rulesDir)) {
    $files = Get-ChildItem $rulesDir -Filter "*.md"
    Write-Host "Found $($files.Count) rule files in $rulesDir" -ForegroundColor Green
    
    foreach ($file in $files) {
        Write-Host "`n--- START FILE: $($file.Name) ---" -ForegroundColor Yellow
        
        # Check for frontmatter in the new file to display version if present
        $content = Get-Content $file.FullName
        $inFrontmatter = $false
        $fmCount = 0
        foreach ($line in $content) {
            if ($line.Trim() -eq "---") {
                $fmCount++
                if ($fmCount -le 2) { Write-Host $line -ForegroundColor DarkGray }
            } elseif ($fmCount -eq 1) {
                if ($line -match "version:|last_updated:") {
                    Write-Host $line -ForegroundColor Magenta 
                } else {
                    Write-Host $line -ForegroundColor DarkGray
                }
            } else {
                # Just output the rest normally (truncated if needed, but for now full)
                break 
            }
        }
        
        $content | Out-String | Write-Host
        Write-Host "--- END FILE: $($file.Name) ---" -ForegroundColor Yellow
    }
    
    Write-Host "`n[Action Required]" -ForegroundColor Cyan
    Write-Host "1. Compare the above content with your local .agent/rules."
    Write-Host "2. If updating local rules, remember to BUMP VERSION and UPDATE DATE in frontmatter."
    
} else {
    Write-Error "Could not locate .agent/rules in the provided source: $source"
}

# Cleanup
if ($tempDir -and (Test-Path $tempDir)) {
    Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue
}
```
