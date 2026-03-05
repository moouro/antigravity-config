# 🚀 Antigravity Config

Minhas configurações do [Google Antigravity](https://developers.google.com/antigravity) — settings, snippets e atalhos.

## 📦 O que contém

| Arquivo | Descrição |
|---|---|
| `settings.json` | Configurações do editor (Biome, fonte, formatação, Emmet) |
| `snippets/css.json` | 20 snippets CSS (Intrinsic Design + Acessibilidade) |
| `snippets/html.json` | 12 snippets HTML (boilerplate, navbar, card, form…) |
| `snippets/javascript.json` | 17 snippets JS (arrow functions, fetch, DOM…) |

## 🔧 Como usar

### Backup (salvar configs atuais)

```bash
# Windows (PowerShell)
.\scripts\backup.ps1

# Linux / macOS
chmod +x scripts/backup.sh   # só na primeira vez
./scripts/backup.sh
```

Depois faça commit:

```bash
git add -A && git commit -m "atualizar configs" && git push
```

### Restaurar (em nova instalação)

```bash
git clone https://github.com/SEU-USER/antigravity-config.git
cd antigravity-config

# Windows (PowerShell)
.\scripts\restore.ps1

# Linux / macOS
chmod +x scripts/restore.sh   # só na primeira vez
./scripts/restore.sh
```

Reinicie o Antigravity para aplicar.

## 📍 Caminhos por SO

| SO | Caminho do Antigravity |
|---|---|
| Windows | `%APPDATA%\Antigravity\User\` |
| macOS | `~/Library/Application Support/Antigravity/User/` |
| Linux | `~/.config/Antigravity/User/` |

## 📋 Snippets disponíveis

### CSS (prefixo → Tab)

`cssvars` · `cssreset` · `flexcenter` · `flexcol` · `grid` · `container` · `mq` · `cq` · `fluidtext` · `aspect` · `glass` · `trans` · `hoverscale` · `sr-only` · `focus-visible` · `reduced-motion` · `skip-link` · `color-scheme` · `high-contrast` · `touch-target`

### HTML (prefixo → Tab)

`html5` · `section` · `navbar` · `card` · `form` · `footer` · `cssvars` · `cssreset` · `flexcenter` · `grid` · `mq` · `glass`

### JavaScript (prefixo → Tab)

`cl` · `clv` · `af` · `afs` · `asyncf` · `fetch` · `imp` · `impd` · `qs` · `qsa` · `ael` · `dcl` · `forof` · `map` · `filter` · `dest` · `tl`
