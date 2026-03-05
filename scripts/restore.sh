#!/usr/bin/env bash
# ============================================================
# Antigravity Config Restore (Linux / macOS)
# Restaura configs deste repositório para o Antigravity
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
        echo "ERRO: SO nao suportado ($(uname -s)). Use restore.ps1 no Windows."
        exit 1
        ;;
esac

echo ""
echo "=== Antigravity Config Restore ==="
echo "Destino: $ANTIGRAVITY_DIR"
echo ""

# Confirmação
echo "ATENCAO: Isso vai sobrescrever suas configs atuais do Antigravity."
read -rp "Continuar? (s/N) " confirm
if [[ "$confirm" != "s" && "$confirm" != "S" ]]; then
    echo "Cancelado."
    exit 0
fi

echo ""

# Criar diretórios se não existirem
mkdir -p "$ANTIGRAVITY_DIR/snippets"

# Restaurar settings.json
if [ -f "$REPO_DIR/settings.json" ]; then
    cp "$REPO_DIR/settings.json" "$ANTIGRAVITY_DIR/settings.json"
    echo "  [OK] settings.json"
fi

# Restaurar snippets
if [ -d "$REPO_DIR/snippets" ]; then
    for file in "$REPO_DIR/snippets"/*.json; do
        [ -f "$file" ] || continue
        cp "$file" "$ANTIGRAVITY_DIR/snippets/"
        echo "  [OK] snippets/$(basename "$file")"
    done
fi

# Restaurar keybindings.json (se existir)
if [ -f "$REPO_DIR/keybindings.json" ]; then
    cp "$REPO_DIR/keybindings.json" "$ANTIGRAVITY_DIR/keybindings.json"
    echo "  [OK] keybindings.json"
fi

echo ""
echo "Restore concluido! Reinicie o Antigravity para aplicar."
echo ""
