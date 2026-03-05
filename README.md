# 🚀 Antigravity Config

Configurações do [Google Antigravity](https://developers.google.com/antigravity) — settings, snippets e atalhos, prontas para usar em qualquer máquina.

## 📦 O que contém

| Arquivo | Descrição |
|---|---|
| `settings.json` | Configurações do editor (Biome, fonte, formatação, Emmet) |
| `snippets/css.json` | 20 snippets CSS (Intrinsic Design + Acessibilidade WCAG) |
| `snippets/html.json` | 12 snippets HTML (boilerplate, navbar, card, form…) |
| `snippets/javascript.json` | 17 snippets JS (arrow functions, fetch, DOM…) |

## 🔧 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/moouro/antigravity-config.git
cd antigravity-config
```

### 2. Restaurar (aplicar configs ao Antigravity)

```bash
# Windows (PowerShell)
.\scripts\restore.ps1

# Linux / macOS
chmod +x scripts/restore.sh   # só na primeira vez
./scripts/restore.sh
```

O script faz **backup automático** das suas configs atuais antes de sobrescrever (salvo em `.backup/`).

### 3. Backup (salvar configs atuais no repo)

```bash
# Windows (PowerShell)
.\scripts\backup.ps1

# Linux / macOS
./scripts/backup.sh
```

Depois faça commit:

```bash
git add -A && git commit -m "atualizar configs" && git push
```

## 📍 Caminhos por SO

| SO | Caminho do Antigravity |
|---|---|
| Windows | `%APPDATA%\Antigravity\User\` |
| macOS | `~/Library/Application Support/Antigravity/User/` |
| Linux | `~/.config/Antigravity/User/` |

## ⚠️ Pré-requisitos

- **Google Antigravity** instalado
- **Extensão Biome** instalada no Antigravity (os snippets funcionam sem, mas o formatter precisa)
- **Fontes** (opcional): `Maple Mono` e `Cascadia Code`. Se não tiver, o editor usará `Consolas` ou `monospace` como fallback

## 📋 Snippets disponíveis

### CSS (prefixo → Tab)

`cssvars` · `cssreset` · `flexcenter` · `flexcol` · `grid` · `container` · `mq` · `cq` · `fluidtext` · `aspect` · `glass` · `trans` · `hoverscale` · `sr-only` · `focus-visible` · `reduced-motion` · `skip-link` · `color-scheme` · `high-contrast` · `touch-target`

### HTML (prefixo → Tab)

`html5` · `section` · `navbar` · `card` · `form` · `footer` · `cssvars` · `cssreset` · `flexcenter` · `grid` · `mq` · `glass`

### JavaScript (prefixo → Tab)

`cl` · `clv` · `af` · `afs` · `asyncf` · `fetch` · `imp` · `impd` · `qs` · `qsa` · `ael` · `dcl` · `forof` · `map` · `filter` · `dest` · `tl`

## 📄 Licença

Uso livre. Sinta-se à vontade para fazer fork e adaptar.
