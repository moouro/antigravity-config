# GEMINI.md — Memória Técnica do Projeto

## 1. Visão Geral

O **Antigravity Front-End Kit** (`antigravity-config`) é um projeto de vitrine mantido por `mouro.dev` com duas frentes sincronizadas:

1. **Kit Agêntico + Configs/Snippets do Google Antigravity:** Rules, Skills e Agents opinativos em `.agent/` (anti-"cara de IA", Intrinsic Web Design e revisão de UI), além de `settings.json`, 49 snippets (`snippets/css.json`, `snippets/html.json`, `snippets/javascript.json`) e scripts de backup/restore compatíveis com Antigravity IDE 2.0+ e legado.
2. **Catálogo Web (`docs/`):** site estático publicado no GitHub Pages (`https://moouro.github.io/antigravity-config`) para consultar, filtrar, buscar (`Ctrl+K`) e copiar em 1 clique tanto o Kit Agêntico (4 arquivos Markdown com caminho de destino) quanto os 49 snippets.

---

## 2. Arquitetura e Regras Inegociáveis

- **Stack 100% Vanilla (sem bundler, sem frameworks, sem `node_modules`):**
  - Site em `docs/` servido diretamente como HTML, CSS e JavaScript puros.
  - Sincronização de dados via Python 3 stdlib (`scripts/sync-docs.py`).
- **Fonte Única de Verdade (`.agent/**/*` + `snippets/*.json` → `docs/snippets-data.js`):**
  - Nunca duplicar manualmente o catálogo em `docs/script.js`.
  - Metadados editoriais dos snippets (nomes curtos, explicações em PT-BR e tags `a11y`) vivem em `docs/snippets-meta.json`, indexados por `${lang}:${prefix}`.
  - `scripts/sync-docs.py` gera `docs/snippets-data.js` (`window.ANTIGRAVITY_SNIPPETS` com `kit` + `categories`), funcionando tanto em HTTP quanto via `file://`.
- **CSS Puro e Intrinsic Web Design:**
  - Arquitetura em `@layer reset, tokens, base, layout, components, utilities`.
  - Priorizar `clamp()`, `minmax()`, `min()`, Container Queries (`@container`) e capability queries (`hover`, `pointer`, `forced-colors`, `prefers-reduced-motion`). Evitar media queries desnecessárias (apenas `@media (width <= 48rem)` para o drawer mobile).
- **Direção Visual (zero estética genérica de IA):**
  - Estética utilitária/editorial (referência: Raycast Snippets, Linear, Vercel Docs).
  - Paleta fixa: fundo `#121214`, superfícies `#18181B` (`hover` `#1C1C1F`, `active` `#1B1C21`), bordas secas `1px solid #27272A` (`strong` `#3F3F46`), texto `#F4F4F5`, secundário `#A1A1AA`, metadados `#85858F` (contraste AA ≥ 4.6:1), e 1 único acento `#7AA2F7` restrito a foco, estados ativos, copiado, chaves de frontmatter e tabstops.
  - Tipografia: `Geist` + `Geist Mono`, cantos sutis (`4px / 6px / 8px`), sem brilhos radiais, sem gradientes decorativos, sem sombras pesadas e sem emojis na UI.
- **Compatibilidade Funcional, Acessibilidade e Formatter:**
  - Manter busca instantânea (`#search-input`), atalho `Ctrl+K` / `Cmd+K`, `Escape` para limpar, filtros combinados (`Todos`, `Kit Agêntico`, `CSS`, `HTML`, `JS`, `a11y`), contadores dinâmicos e expansão acessível via `<button class="card-header">` com `aria-expanded`/`aria-controls`.
  - Snippets de HTML e arquivos Markdown devem sempre ser escapados no preview (nunca interpretados como DOM).
  - Regras do Kit Agêntico (`.agent/rules/global-standards.md`) são **agnósticas de formatter** (Biome é opcional em `settings.json`).

---

## 3. Estado Atual

### Kit Agêntico (`.agent/`)
- `.agent/rules/global-standards.md` — Rule (`alwaysApply: true`) anti-"cara de IA", HTML semântico, Intrinsic Web Design, WCAG e agnóstica de formatter.
- `.agent/skills/autoral-ui/SKILL.md` — Skill `/autoral-ui` para criação/refatoração de UI autoral.
- `.agent/skills/anti-ai-writing/SKILL.md` — Skill `/anti-ai-writing` (duplo modo: escrever/reescrever + auditar) baseada em `Wikipedia:Signs of AI writing` (`WP:AISIGNS`), em PT-BR + termos originais em EN.
- `.agent/agents/ui-reviewer.md` — Agent `@ui-reviewer` para auditoria de UI, contraste, tipografia e layout intrínseco.

### Configurações e Scripts
- `settings.json` — Tema Atom One Dark, Biome (opcional), Maple Mono / Cascadia Code, Emmet com Tab, `tabSize: 2`.
- `snippets/css.json` (20), `snippets/html.json` (12), `snippets/javascript.json` (17) — 49 snippets totais.
- `scripts/backup.ps1`, `scripts/backup.sh`, `scripts/restore.ps1`, `scripts/restore.sh` — Detectam automaticamente `Antigravity IDE/User` (2.0+) e fallback `Antigravity/User` (legado), com backup prévio em `.backup/` e sync automático via `sync-docs.py`.
- `scripts/sync-docs.py` — Sincroniza `.agent/**/*` (4 recursos) + `snippets/*.json` (49 snippets) → `docs/snippets-data.js` (53 recursos validados).

### Site (`docs/`)
- `docs/index.html` — Reposicionado como **Antigravity Front-End Kit**: catálogo acima da dobra com seção `Kit Agêntico` no topo seguida por CSS/HTML/JS, filtros reais (`Todos`, `Kit Agêntico`, `CSS`, `HTML`, `JS`, `a11y`), narrativa `#por-que` atualizada e `#install` sem quebra mid-word de URL nem card órfão em 775px.
- `docs/style.css` — Estética utilitária/editorial, contraste AA verificado, `.kit-dest`, destaque discreto de Markdown (`.md-key`, `.md-head`), container query `@container (width >= 52rem)` em `.install-section` e scroll horizontal limpo nos comandos.
- `docs/script.js` — Renderização dinâmica de `kit` + `categories` a partir de `window.ANTIGRAVITY_SNIPPETS`, cópia de arquivo Markdown completo em 1 clique no Kit Agêntico, cópia de prefixo/código nos snippets, busca combinada e switch de SO.
- `docs/snippets-meta.json` e `docs/snippets-data.js` — Metadados editoriais e bundle estático gerado (53 recursos).

---

## 4. Próximos Passos Planejados

1. **Concluído — Evolução para Antigravity Front-End Kit:** organização de `.agent/`, sincronização unificada (`sync-docs.py`), reposicionamento do site para vitrine no `mouro.dev`, atualização dos scripts para Antigravity 2.0+ e correção dos detalhes visuais de `#install`.
2. **Próximo — Evoluções opcionais de catálogo e distribuição:**
   - Navegação por teclado entre linhas do catálogo (`ArrowDown` / `ArrowUp` / `Enter`) a partir do campo de busca.
   - Deep-link por URL/query para compartilhar filtros ou buscas diretas (`?filter=kit`, `?q=grid`).
   - Empacotamento opcional como Plugin do Antigravity (`plugin.json`) para instalação em 1 clique no Agent Marketplace.

---

## 5. Registro da Última Sessão

- **Data:** 2026-11-26
- **Resumo técnico:**
  - Reposicionado o projeto para **Antigravity Front-End Kit** visando vitrine em `mouro.dev` e utilidade real para outros devs no ecossistema Antigravity IDE 2.0+.
  - Organizados os 3 arquivos agênticos em `.agent/rules/global-standards.md` (agora agnóstico de formatter), `.agent/skills/autoral-ui/SKILL.md` e `.agent/agents/ui-reviewer.md`, removendo cópias soltas da raiz.
  - Estendido `scripts/sync-docs.py` para ler `.agent/**/*` + `snippets/*.json` e gerar `docs/snippets-data.js` com 52 recursos (3 Kit Agêntico + 49 snippets).
  - Atualizado o site (`docs/index.html`, `docs/script.js`, `docs/style.css`) com seção `Kit Agêntico` no topo do catálogo, filtro dedicado, cópia de arquivo completo em 1 clique com caminho de destino, narrativa `#por-que` atualizada e correções em `#install` (sem quebra de URL no meio da palavra e sem card órfão em 775px).
  - Adicionada a skill `.agent/skills/anti-ai-writing/SKILL.md` (`/anti-ai-writing`) com todos os padrões de `Wikipedia:Signs of AI writing` (`WP:AISIGNS`) em duplo modo (escrever/reescrever + auditar) e sincronizada em `docs/snippets-data.js` (53 recursos: 4 Kit Agêntico + 49 snippets).
  - Atualizados `scripts/backup.ps1`, `scripts/restore.ps1`, `scripts/backup.sh`, `scripts/restore.sh` (detecção automática de `Antigravity IDE/User` + legado) e `README.md`.

---

## Manutenção de Memória do Projeto

- Sempre que o usuário pedir para **"salvar progresso"**, **"encerrar sessão"** ou **"atualizar memória"**, atualize este arquivo `GEMINI.md` na raiz do projeto marcando as tarefas concluídas em **Estado Atual**, ajustando os **Próximos Passos** e registrando a data e o resumo técnico das mudanças em **Registro da Última Sessão**.
