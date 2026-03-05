# ============================================================
# Antigravity Config Restore (Windows)
# Restaura configs deste repositório para o Antigravity
# ============================================================

$ErrorActionPreference = "Stop"

$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$REPO_DIR = Split-Path -Parent $SCRIPT_DIR

# Validar que %APPDATA% existe e não está vazio
if (-not $env:APPDATA -or -not (Test-Path $env:APPDATA)) {
    Write-Host "ERRO: Variavel APPDATA nao definida ou invalida." -ForegroundColor Red
    exit 1
}

$ANTIGRAVITY_DIR = Join-Path $env:APPDATA "Antigravity\User"

Write-Host ""
Write-Host "=== Antigravity Config Restore ===" -ForegroundColor Cyan
Write-Host "Destino: $ANTIGRAVITY_DIR" -ForegroundColor White
Write-Host ""

# Confirmação ANTES de qualquer alteração
Write-Host "ATENCAO: Isso vai sobrescrever suas configs atuais do Antigravity." -ForegroundColor Yellow
$confirm = Read-Host "Continuar? (s/N)"
if ($confirm -ne "s" -and $confirm -ne "S") {
    Write-Host "Cancelado." -ForegroundColor Red
    exit 0
}

Write-Host ""

# Criar diretórios DEPOIS da confirmação
if (-not (Test-Path $ANTIGRAVITY_DIR)) {
    New-Item -ItemType Directory -Path $ANTIGRAVITY_DIR -Force | Out-Null
    Write-Host "  Diretorio criado: $ANTIGRAVITY_DIR" -ForegroundColor Yellow
}

$SNIPPETS_DEST = Join-Path $ANTIGRAVITY_DIR "snippets"
if (-not (Test-Path $SNIPPETS_DEST)) {
    New-Item -ItemType Directory -Path $SNIPPETS_DEST -Force | Out-Null
}

# Backup automático das configs existentes antes de sobrescrever
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = Join-Path $REPO_DIR ".backup\$timestamp"

$hasExistingConfigs = (Test-Path (Join-Path $ANTIGRAVITY_DIR "settings.json"))
if ($hasExistingConfigs) {
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    Write-Host "  Salvando backup das configs atuais em .backup\$timestamp\" -ForegroundColor Cyan

    $settingsBackup = Join-Path $ANTIGRAVITY_DIR "settings.json"
    if (Test-Path $settingsBackup) {
        Copy-Item $settingsBackup -Destination (Join-Path $backupDir "settings.json") -Force
    }

    if (Test-Path $SNIPPETS_DEST) {
        $snippetsBackupDir = Join-Path $backupDir "snippets"
        New-Item -ItemType Directory -Path $snippetsBackupDir -Force | Out-Null
        Get-ChildItem -Path $SNIPPETS_DEST -Filter "*.json" | ForEach-Object {
            Copy-Item $_.FullName -Destination (Join-Path $snippetsBackupDir $_.Name) -Force
        }
    }

    $keybindingsBackup = Join-Path $ANTIGRAVITY_DIR "keybindings.json"
    if (Test-Path $keybindingsBackup) {
        Copy-Item $keybindingsBackup -Destination (Join-Path $backupDir "keybindings.json") -Force
    }

    Write-Host "  [OK] Backup salvo" -ForegroundColor Green
    Write-Host ""
}

$count = 0

# Restaurar settings.json
$settingsSrc = Join-Path $REPO_DIR "settings.json"
if (Test-Path $settingsSrc) {
    Copy-Item $settingsSrc -Destination (Join-Path $ANTIGRAVITY_DIR "settings.json") -Force
    Write-Host "  [OK] settings.json" -ForegroundColor Green
    $count++
}

# Restaurar snippets
$snippetsSrc = Join-Path $REPO_DIR "snippets"
if (Test-Path $snippetsSrc) {
    $snippetFiles = Get-ChildItem -Path $snippetsSrc -Filter "*.json"
    foreach ($file in $snippetFiles) {
        Copy-Item $file.FullName -Destination (Join-Path $SNIPPETS_DEST $file.Name) -Force
        Write-Host "  [OK] snippets/$($file.Name)" -ForegroundColor Green
        $count++
    }
}

# Restaurar keybindings.json (se existir)
$keybindingsSrc = Join-Path $REPO_DIR "keybindings.json"
if (Test-Path $keybindingsSrc) {
    Copy-Item $keybindingsSrc -Destination (Join-Path $ANTIGRAVITY_DIR "keybindings.json") -Force
    Write-Host "  [OK] keybindings.json" -ForegroundColor Green
    $count++
}

Write-Host ""
Write-Host "Restore concluido! ($count arquivo(s) restaurados)" -ForegroundColor Green
if ($hasExistingConfigs) {
    Write-Host "Backup anterior salvo em: $backupDir" -ForegroundColor Cyan
}
Write-Host "Reinicie o Antigravity para aplicar." -ForegroundColor Yellow
Write-Host ""
