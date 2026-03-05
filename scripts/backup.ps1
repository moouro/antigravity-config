# ============================================================
# Antigravity Config Backup (Windows)
# Copia configs do Antigravity para este repositório
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

# Validar que o caminho é realmente dentro de APPDATA (segurança)
$resolvedPath = (Resolve-Path $env:APPDATA).Path
if (-not $ANTIGRAVITY_DIR.StartsWith($resolvedPath)) {
    Write-Host "ERRO: Caminho do Antigravity fora do APPDATA. Abortando." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== Antigravity Config Backup ===" -ForegroundColor Cyan
Write-Host "Origem: $ANTIGRAVITY_DIR" -ForegroundColor White
Write-Host ""

# Verificar se o diretório do Antigravity existe
if (-not (Test-Path $ANTIGRAVITY_DIR)) {
    Write-Host "ERRO: Diretorio do Antigravity nao encontrado:" -ForegroundColor Red
    Write-Host "  $ANTIGRAVITY_DIR" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Certifique-se de que o Antigravity esta instalado." -ForegroundColor Yellow
    exit 1
}

# Criar diretório de snippets no repo se não existir
$SNIPPETS_DIR = Join-Path $REPO_DIR "snippets"
if (-not (Test-Path $SNIPPETS_DIR)) {
    New-Item -ItemType Directory -Path $SNIPPETS_DIR -Force | Out-Null
}

$count = 0

# Copiar settings.json
$settingsSrc = Join-Path $ANTIGRAVITY_DIR "settings.json"
if (Test-Path $settingsSrc) {
    Copy-Item $settingsSrc -Destination (Join-Path $REPO_DIR "settings.json") -Force
    Write-Host "  [OK] settings.json" -ForegroundColor Green
    $count++
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
        $count++
    }
} else {
    Write-Host "  [--] Pasta de snippets nao encontrada, pulando" -ForegroundColor Yellow
}

# Copiar keybindings.json (se existir)
$keybindingsSrc = Join-Path $ANTIGRAVITY_DIR "keybindings.json"
if (Test-Path $keybindingsSrc) {
    Copy-Item $keybindingsSrc -Destination (Join-Path $REPO_DIR "keybindings.json") -Force
    Write-Host "  [OK] keybindings.json" -ForegroundColor Green
    $count++
}

Write-Host ""
if ($count -eq 0) {
    Write-Host "Nenhum arquivo encontrado para backup." -ForegroundColor Yellow
} else {
    Write-Host "Backup concluido! ($count arquivo(s) copiados)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Agora faca commit e push:" -ForegroundColor Cyan
    Write-Host "  git add -A && git commit -m 'atualizar configs' && git push" -ForegroundColor White
}
Write-Host ""
