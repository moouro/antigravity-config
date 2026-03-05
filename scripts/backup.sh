#!/usr/bin/env bash
# ============================================================
# Antigravity Config Backup (Linux / macOS)
# Copia configs do Antigravity para este repositório
# ============================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"

# Detectar SO e definir caminho
case "$(uname -s)" in
    Darwin)
        ANTIGRAVITY_DIR="$HOME/Library/Application Support/Antigravity/User"
        ;;
    Linux)
        ANTIGRAVITY_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/Antigravity/User"
        ;;
    *)
        echo "ERRO: SO nao suportado ($(uname -s)). Use backup.ps1 no Windows."
        exit 1
        ;;
esac

echo ""
echo "=== Antigravity Config Backup ==="
echo "Origem: $ANTIGRAVITY_DIR"
echo ""

# Verificar se o diretório existe
if [ ! -d "$ANTIGRAVITY_DIR" ]; then
    echo "ERRO: Diretorio do Antigravity nao encontrado:"
    echo "  $ANTIGRAVITY_DIR"
    exit 1
fi

# Criar diretório de snippets no repo
mkdir -p "$REPO_DIR/snippets"

# Copiar settings.json
if [ -f "$ANTIGRAVITY_DIR/settings.json" ]; then
    cp "$ANTIGRAVITY_DIR/settings.json" "$REPO_DIR/settings.json"
    echo "  [OK] settings.json"
else
    echo "  [--] settings.json nao encontrado, pulando"
fi

# Copiar snippets
if [ -d "$ANTIGRAVITY_DIR/snippets" ]; then
    for file in "$ANTIGRAVITY_DIR/snippets"/*.json; do
        [ -f "$file" ] || continue
        cp "$file" "$REPO_DIR/snippets/"
        echo "  [OK] snippets/$(basename "$file")"
    done
else
    echo "  [--] Pasta de snippets nao encontrada, pulando"
fi

# Copiar keybindings.json (se existir)
if [ -f "$ANTIGRAVITY_DIR/keybindings.json" ]; then
    cp "$ANTIGRAVITY_DIR/keybindings.json" "$REPO_DIR/keybindings.json"
    echo "  [OK] keybindings.json"
fi

echo ""
echo "Backup concluido!"
echo "Agora faca commit e push:"
echo "  git add -A && git commit -m 'atualizar configs' && git push"
echo ""
