# ============================================================
# Antigravity Config Restore (Windows)
# Restaura configs deste repositório para o Antigravity
# ============================================================

$ErrorActionPreference = "Stop"

$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$REPO_DIR = Split-Path -Parent $SCRIPT_DIR
$ANTIGRAVITY_DIR = Join-Path $env:APPDATA "Antigravity\User"

Write-Host ""
Write-Host "=== Antigravity Config Restore ===" -ForegroundColor Cyan
Write-Host "Destino: $ANTIGRAVITY_DIR" -ForegroundColor White
Write-Host ""

# Criar diretórios se não existirem
if (-not (Test-Path $ANTIGRAVITY_DIR)) {
    New-Item -ItemType Directory -Path $ANTIGRAVITY_DIR -Force | Out-Null
    Write-Host "  Diretorio criado: $ANTIGRAVITY_DIR" -ForegroundColor Yellow
}

$SNIPPETS_DEST = Join-Path $ANTIGRAVITY_DIR "snippets"
if (-not (Test-Path $SNIPPETS_DEST)) {
    New-Item -ItemType Directory -Path $SNIPPETS_DEST -Force | Out-Null
}

# Confirmação
Write-Host "ATENCAO: Isso vai sobrescrever suas configs atuais do Antigravity." -ForegroundColor Yellow
$confirm = Read-Host "Continuar? (s/N)"
if ($confirm -ne "s" -and $confirm -ne "S") {
    Write-Host "Cancelado." -ForegroundColor Red
    exit 0
}

Write-Host ""

# Restaurar settings.json
$settingsSrc = Join-Path $REPO_DIR "settings.json"
if (Test-Path $settingsSrc) {
    Copy-Item $settingsSrc -Destination (Join-Path $ANTIGRAVITY_DIR "settings.json") -Force
    Write-Host "  [OK] settings.json" -ForegroundColor Green
}

# Restaurar snippets
$snippetsSrc = Join-Path $REPO_DIR "snippets"
if (Test-Path $snippetsSrc) {
    $snippetFiles = Get-ChildItem -Path $snippetsSrc -Filter "*.json"
    foreach ($file in $snippetFiles) {
        Copy-Item $file.FullName -Destination (Join-Path $SNIPPETS_DEST $file.Name) -Force
        Write-Host "  [OK] snippets/$($file.Name)" -ForegroundColor Green
    }
}

# Restaurar keybindings.json (se existir)
$keybindingsSrc = Join-Path $REPO_DIR "keybindings.json"
if (Test-Path $keybindingsSrc) {
    Copy-Item $keybindingsSrc -Destination (Join-Path $ANTIGRAVITY_DIR "keybindings.json") -Force
    Write-Host "  [OK] keybindings.json" -ForegroundColor Green
}

Write-Host ""
Write-Host "Restore concluido! Reinicie o Antigravity para aplicar." -ForegroundColor Green
Write-Host ""
