# ============================================================
# Antigravity Config Backup (Windows)
# Copia configs do Antigravity para este repositório
# ============================================================

$ErrorActionPreference = "Stop"

$SCRIPT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$REPO_DIR = Split-Path -Parent $SCRIPT_DIR
$ANTIGRAVITY_DIR = Join-Path $env:APPDATA "Antigravity\User"

Write-Host ""
Write-Host "=== Antigravity Config Backup ===" -ForegroundColor Cyan
Write-Host ""

# Verificar se o diretório do Antigravity existe
if (-not (Test-Path $ANTIGRAVITY_DIR)) {
    Write-Host "ERRO: Diretorio do Antigravity nao encontrado:" -ForegroundColor Red
    Write-Host "  $ANTIGRAVITY_DIR" -ForegroundColor Yellow
    exit 1
}

# Criar diretório de snippets no repo se não existir
$SNIPPETS_DIR = Join-Path $REPO_DIR "snippets"
if (-not (Test-Path $SNIPPETS_DIR)) {
    New-Item -ItemType Directory -Path $SNIPPETS_DIR -Force | Out-Null
}

# Copiar settings.json
$settingsSrc = Join-Path $ANTIGRAVITY_DIR "settings.json"
if (Test-Path $settingsSrc) {
    Copy-Item $settingsSrc -Destination (Join-Path $REPO_DIR "settings.json") -Force
    Write-Host "  [OK] settings.json" -ForegroundColor Green
} else {
    Write-Host "  [--] settings.json nao encontrado, pulando" -ForegroundColor Yellow
}

# Copiar snippets
$snippetsSrc = Join-Path $ANTIGRAVITY_DIR "snippets"
if (Test-Path $snippetsSrc) {
    $snippetFiles = Get-ChildItem -Path $snippetsSrc -Filter "*.json"
    foreach ($file in $snippetFiles) {
        Copy-Item $file.FullName -Destination (Join-Path $SNIPPETS_DIR $file.Name) -Force
        Write-Host "  [OK] snippets/$($file.Name)" -ForegroundColor Green
    }
} else {
    Write-Host "  [--] Pasta de snippets nao encontrada, pulando" -ForegroundColor Yellow
}

# Copiar keybindings.json (se existir)
$keybindingsSrc = Join-Path $ANTIGRAVITY_DIR "keybindings.json"
if (Test-Path $keybindingsSrc) {
    Copy-Item $keybindingsSrc -Destination (Join-Path $REPO_DIR "keybindings.json") -Force
    Write-Host "  [OK] keybindings.json" -ForegroundColor Green
}

Write-Host ""
Write-Host "Backup concluido!" -ForegroundColor Green
Write-Host "Agora faca commit e push:" -ForegroundColor Cyan
Write-Host "  git add -A && git commit -m 'atualizar configs' && git push" -ForegroundColor White
Write-Host ""
