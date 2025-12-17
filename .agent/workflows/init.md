---
description: Initialize the workspace folder structure and Tech Stack.
---

1. Create the necessary directories and files.
2. Select and Document Tech Stack.

```powershell
# 1. Project Setup
$projectName = Read-Host "Enter Project Name (used for source code folder)"
$projectType = Read-Host "Enter Project Type (single/fullstack)"

# 2. Tech Stack Selection
Write-Host "`nSelect Tech Stack:" -ForegroundColor Cyan
Write-Host "1. Node.js + React (Vite)"
Write-Host "2. Python (FastAPI/Flask) + React"
Write-Host "3. Go + HTML/Templates"
Write-Host "4. Custom (Manual Entry)"
$stackChoice = Read-Host "Enter Choice (1-4)"

$techStack = ""
switch ($stackChoice) {
    "1" { $techStack = "Node.js, Express, React (Vite), CSS Modules" }
    "2" { $techStack = "Python, FastAPI, React (Vite), Tailwind" }
    "3" { $techStack = "Go (Golang), HTML/CSS, Vanilla JS" }
    "4" { $techStack = Read-Host "Enter Tech Stack details" }
    Default { $techStack = "TBD" }
}

# 3. Create Architecture Doc
$archPath = "docs/design/architecture.md"
$archContent = @"
# Architecture & Tech Stack: $projectName

## Overview
Project Type: $projectType

## Tech Stack
$techStack

## Modules
- [ ] Define core modules here...
"@

# Define Common Directories
$adminDirs = @(
    "docs/design",
    "docs/tasks",
    "docs/retrospectives",
    "docs/working_logs",
    "logs"
)

# Define Source Directories based on Type
if ($projectType -eq "fullstack") {
    $srcDirs = @(
        "$projectName/frontend/src",
        "$projectName/frontend/tests",
        "$projectName/backend/src",
        "$projectName/backend/tests"
    )
} else {
    # Default to Single App
    $srcDirs = @(
        "$projectName/app/src",
        "$projectName/app/tests"
    )
}

# Create All Directories
$allDirs = $adminDirs + $sourcesDirs
foreach ($dir in $allDirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Created $dir"
    }
}

# Create Key Files
    "WORKING_LOG.md" = "# Working Log`n`n"
    "logs/.gitkeep" = ""
    ".gitignore" = "logs/*.json`nnode_modules/`ndist/`n.env`n__pycache__/"
}

foreach ($key in $files.Keys) {
    if (-not (Test-Path $key)) {
        Set-Content -Path $key -Value $files[$key] -Encoding utf8
        Write-Host "Created $key"
    }
}

# Handle README.md separately (Enhance if exists)
$readmePath = "README.md"
$readmeContent = "`n# $projectName`n`n## Overview`nProject Type: $projectType`n`n## Tech Stack`n$techStack`n"

if (Test-Path $readmePath) {
    Add-Content -Path $readmePath -Value $readmeContent
    Write-Host "Updated $readmePath"
} else {
    Set-Content -Path $readmePath -Value $readmeContent -Encoding utf8
    Write-Host "Created $readmePath"
}

# Write Tech Stack Doc
if (-not (Test-Path $archPath)) {
    Set-Content -Path $archPath -Value $archContent -Encoding utf8
    Write-Host "Created $archPath"
}
```
