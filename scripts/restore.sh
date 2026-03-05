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

# Validar que HOME existe e não está vazio
if [ -z "${HOME:-}" ] || [ ! -d "$HOME" ]; then
    echo "ERRO: Variavel HOME nao definida ou invalida."
    exit 1
fi

echo ""
echo "=== Antigravity Config Restore ==="
echo "Destino: $ANTIGRAVITY_DIR"
echo ""

# Confirmação ANTES de qualquer alteração
echo "ATENCAO: Isso vai sobrescrever suas configs atuais do Antigravity."
read -rp "Continuar? (s/N) " confirm
if [[ "$confirm" != "s" && "$confirm" != "S" ]]; then
    echo "Cancelado."
    exit 0
fi

echo ""

# Criar diretórios DEPOIS da confirmação
mkdir -p "$ANTIGRAVITY_DIR/snippets"

# Backup automático das configs existentes antes de sobrescrever
timestamp="$(date +%Y%m%d_%H%M%S)"
backup_dir="$REPO_DIR/.backup/$timestamp"

if [ -f "$ANTIGRAVITY_DIR/settings.json" ]; then
    mkdir -p "$backup_dir/snippets"
    echo "  Salvando backup das configs atuais em .backup/$timestamp/"

    cp "$ANTIGRAVITY_DIR/settings.json" "$backup_dir/settings.json" 2>/dev/null || true

    if [ -d "$ANTIGRAVITY_DIR/snippets" ]; then
        for file in "$ANTIGRAVITY_DIR/snippets"/*.json; do
            [ -f "$file" ] || continue
            cp "$file" "$backup_dir/snippets/" 2>/dev/null || true
        done
    fi

    if [ -f "$ANTIGRAVITY_DIR/keybindings.json" ]; then
        cp "$ANTIGRAVITY_DIR/keybindings.json" "$backup_dir/keybindings.json" 2>/dev/null || true
    fi

    echo "  [OK] Backup salvo"
    echo ""
fi

count=0

# Restaurar settings.json
if [ -f "$REPO_DIR/settings.json" ]; then
    cp "$REPO_DIR/settings.json" "$ANTIGRAVITY_DIR/settings.json"
    echo "  [OK] settings.json"
    count=$((count + 1))
fi

# Restaurar snippets
if [ -d "$REPO_DIR/snippets" ]; then
    for file in "$REPO_DIR/snippets"/*.json; do
        [ -f "$file" ] || continue
        cp "$file" "$ANTIGRAVITY_DIR/snippets/"
        echo "  [OK] snippets/$(basename "$file")"
        count=$((count + 1))
    done
fi

# Restaurar keybindings.json (se existir)
if [ -f "$REPO_DIR/keybindings.json" ]; then
    cp "$REPO_DIR/keybindings.json" "$ANTIGRAVITY_DIR/keybindings.json"
    echo "  [OK] keybindings.json"
    count=$((count + 1))
fi

echo ""
echo "Restore concluido! ($count arquivo(s) restaurados)"
if [ -d "$backup_dir" ]; then
    echo "Backup anterior salvo em: $backup_dir"
fi
echo "Reinicie o Antigravity para aplicar."
echo ""
