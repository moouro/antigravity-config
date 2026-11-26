# Antigravity Front-End Kit

**Rules, Skills, Agents e 49 snippets** de Intrinsic CSS, acessibilidade WCAG, HTML semântico e JavaScript para criar interfaces autorais no [Google Antigravity](https://antigravity.google/) — sem estética genérica de template de IA.

> **[Explorar o catálogo web e copiar em 1 clique →](https://moouro.github.io/antigravity-config)**

## O que contém

### Kit Agêntico (`.agent/`)

| Tipo | Arquivo | Gatilho | Propósito |
|---|---|---|---|
| **Rule** | `.agent/rules/global-standards.md` | `alwaysApply` | Diretrizes globais anti-"cara de IA", HTML semântico, Intrinsic Web Design e WCAG |
| **Skill** | `.agent/skills/autoral-ui/SKILL.md` | `/autoral-ui` | Processo estruturado para criar ou refatorar interfaces com direção de arte autoral |
| **Skill** | `.agent/skills/anti-ai-writing/SKILL.md` | `/anti-ai-writing` | Escreve, reescreve e audita textos removendo sinais de escrita por IA (`WP:AISIGNS`) |
| **Agent** | `.agent/agents/ui-reviewer.md` | `@ui-reviewer` | Revisor de UI/CSS/HTML focado em contraste, tipografia e substituição de media queries rígidas |

### Snippets & Configurações do Editor

| Arquivo | Conteúdo |
|---|---|
| `snippets/css.json` | 20 snippets CSS (Intrinsic Design + 7 de acessibilidade WCAG `a11y`) |
| `snippets/html.json` | 12 snippets HTML (boilerplate, seções semânticas e CSS inline) |
| `snippets/javascript.json` | 17 snippets JS (console, arrow/async functions, fetch, imports, DOM, loops/arrays) |
| `settings.json` | Configurações opcionais de editor (tema, fontes, Emmet, formatação) |
| `scripts/sync-docs.py` | Sincroniza `.agent/**/*` e `snippets/*.json` → `docs/snippets-data.js` |

## Como usar

### Opção 1 — Copiar direto do catálogo (sem instalar nada)

Acesse **[moouro.github.io/antigravity-config](https://moouro.github.io/antigravity-config)**, filtre por **Kit Agêntico**, **CSS**, **HTML**, **JS** ou **a11y**, e copie qualquer Rule, Skill, Agent ou snippet em 1 clique.

### Opção 2 — Clonar e restaurar o setup completo

```bash
git clone https://github.com/moouro/antigravity-config.git
cd antigravity-config
```

**Restaurar snippets e settings (faz backup automático em `.backup/`):**

```bash
# Windows (PowerShell)
.\scripts\restore.ps1

# Linux / macOS
chmod +x scripts/restore.sh && ./scripts/restore.sh
```

**Ativar o Kit Agêntico no seu projeto:** copie a pasta `.agent/` para a raiz do projeto alvo (ou copie apenas os arquivos desejados).

**Fazer backup das configs do editor e sincronizar o catálogo:**

```bash
# Windows (PowerShell)
.\scripts\backup.ps1

# Linux / macOS
./scripts/backup.sh
```

## Caminhos suportados por SO

Os scripts detectam automaticamente diretórios do **Antigravity IDE 2.0+** (`Antigravity IDE/User`) e o caminho legado (`Antigravity/User`):

| SO | Caminhos verificados |
|---|---|
| Windows | `%APPDATA%\Antigravity IDE\User\` ou `%APPDATA%\Antigravity\User\` |
| macOS | `~/Library/Application Support/Antigravity IDE/User/` ou `.../Antigravity/User/` |
| Linux | `~/.config/Antigravity IDE/User/` ou `~/.config/Antigravity/User/` |

## Pré-requisitos opcionais

- **Google Antigravity** instalado
- **Python 3** (apenas para rodar `scripts/sync-docs.py` ao editar snippets ou `.agent/`)
- **Formatter** (opcional): `settings.json` usa Biome, mas as regras do Kit Agêntico são agnósticas de formatter (funcionam com Biome, Prettier ou padrão do editor)

## Licença

Uso livre. Sinta-se à vontade para copiar, adaptar ou fazer fork — feito por [mouro.dev](https://mouro.dev).
