---
description: Environment Check. Verify Git, GitHub, and Tech Stack definitions.
---

1. Check for `git` installation and repository status.
2. Check for `gh` (GitHub CLI) availability.
3. Verify that `docs/design/` contains tech stack documentation or `README.md` is populated.
4. Report "Ready to Develop" or list missing requirements.
5. If git is not initialized or remote is missing, prompt to connect.

```powershell
Write-Host "Checking Development Environment..." -ForegroundColor Cyan

# 1. Check Git & Repository
$gitReady = $false
try {
    $gitVersion = git --version
    Write-Host "[OK] Git is installed: $gitVersion" -ForegroundColor Green
    
    if (Test-Path ".git") {
        Write-Host "[OK] Git repository initialized." -ForegroundColor Green
        
        $remote = git remote get-url origin 2>$null
        if ($remote) {
            Write-Host "[OK] Remote 'origin' is set to: $remote" -ForegroundColor Green
            $gitReady = $true
        } else {
            Write-Host "[WARN] No remote repository configured." -ForegroundColor Yellow
        }
    } else {
        Write-Host "[WARN] .git directory not found." -ForegroundColor Yellow
    }
} catch {
    Write-Host "[FAIL] Git is not reachable." -ForegroundColor Red
}

# 2. Check GitHub CLI
$ghReady = $false
try {
    $ghVersion = gh --version
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[OK] GitHub CLI (gh) is installed." -ForegroundColor Green
        $authStatus = gh auth status 2>&1
        if ($authStatus -match "Logged in to") {
             $ghReady = $true
        } else {
             Write-Host "[WARN] Not logged in to GitHub CLI. Run 'gh auth login'." -ForegroundColor Yellow
        }
    }
} catch {
    Write-Host "[WARN] GitHub CLI (gh) not found." -ForegroundColor Yellow
}

# 3. Check Tech Stack
$stackReady = $false
$designDocs = Get-ChildItem "docs/design" -ErrorAction SilentlyContinue
$readme = Get-Content "README.md" -ErrorAction SilentlyContinue | Out-String

if ($designDocs) {
    Write-Host "[OK] Design documentation exists in 'docs/design/'." -ForegroundColor Green
    $stackReady = $true
} elseif ($readme -match "Overview" -or $readme -match "Tech Stack") {
    Write-Host "[OK] README appears to contain project info." -ForegroundColor Green
    $stackReady = $true
} else {
    Write-Host "[WARN] No design docs or detailed README found. Define Tech Stack first!" -ForegroundColor Red
}

# 4. Connect to GitHub (Interactive)
if (-not $gitReady -and $ghReady) {
    $connect = Read-Host "Repository not connected. Create/Connect to GitHub now? (y/n)"
    if ($connect -eq 'y') {
        if (-not (Test-Path ".git")) {
            git init
            Write-Host "Initialized local git repository." -ForegroundColor Green
        }
        
        $repoName = Read-Host "Enter Repo Name (e.g. user/repo or just repo)"
        $createMode = Read-Host "Create new remote repo? (y/n)"
        
        if ($createMode -eq 'y') {
             gh repo create $repoName --public --source=. --remote=origin --push
        } else {
             git remote add origin "https://github.com/$repoName.git"
             Write-Host "Added remote origin." -ForegroundColor Green
        }
    }
} elseif ($gitReady -and $stackReady) {
    Write-Host "`n✅ SYSTEMS GO. Ready for /job or /dev-req." -ForegroundColor Cyan
}
```
