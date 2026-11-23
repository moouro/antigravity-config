# GEMINI.md — Memória Técnica do Projeto

## 1. Visão Geral

O **antigravity-config** é um repositório duplo mantido por `mouro.dev`:

1. **Configurações e Snippets do Google Antigravity:** backup versionado em Git de `settings.json` e 49 snippets (`snippets/css.json`, `snippets/html.json`, `snippets/javascript.json`) com scripts de backup/restore para Windows (PowerShell) e Linux/macOS (Bash), suprindo a ausência de Settings Sync no editor.
2. **Antigravity Snippets (`docs/`):** catálogo web estático publicado via GitHub Pages (`https://moouro.github.io/antigravity-config`) para consultar, filtrar, buscar e copiar os 49 snippets.

---

## 2. Arquitetura e Regras Inegociáveis

- **Stack 100% Vanilla (sem bundler, sem frameworks, sem `node_modules`):**
  - Site em `docs/` servido diretamente como HTML, CSS e JavaScript puros.
  - Sincronização de dados via Python 3 stdlib (`scripts/sync-docs.py`).
- **Fonte Única de Verdade (`snippets/*.json` → `docs/snippets-data.js`):**
  - Nunca duplicar manualmente o catálogo de snippets em `docs/script.js`.
  - Metadados editoriais (nomes curtos, explicações em PT-BR e tags `a11y`) vivem em `docs/snippets-meta.json`, indexados por `${lang}:${prefix}`.
  - `scripts/sync-docs.py` gera `docs/snippets-data.js` (`window.ANTIGRAVITY_SNIPPETS`) com código limpo (`code`) e preview HTML seguro com destaque de tabstops (`codeHtml`), funcionando tanto em HTTP quanto via `file://`.
- **CSS Puro e Intrinsic Web Design:**
  - Arquitetura em `@layer reset, tokens, base, layout, components, utilities`.
  - Priorizar `clamp()`, `minmax()`, `min()`, Container Queries (`@container`) e capability queries (`hover`, `pointer`, `forced-colors`, `prefers-reduced-motion`). Evitar media queries desnecessárias (apenas `@media (width <= 48rem)` para o drawer mobile).
- **Direção Visual (zero estética genérica de IA):**
  - Estética utilitária/editorial (referência: Raycast Snippets, Linear, Vercel Docs).
  - Paleta fixa: fundo `#121214`, superfícies `#18181B` (`hover` `#1C1C1F`, `active` `#1B1C21`), bordas secas `1px solid #27272A` (`strong` `#3F3F46`), texto `#F4F4F5`, secundário `#A1A1AA`, metadados `#85858F` (contraste AA ≥ 4.6:1), e 1 único acento `#7AA2F7` restrito a foco, estados ativos, copiado e tabstops.
  - Tipografia: `Geist` + `Geist Mono`, cantos sutis (`4px / 6px / 8px`), sem brilhos radiais, sem gradientes decorativos, sem sombras pesadas e sem emojis na UI.
- **Compatibilidade Funcional e Acessibilidade:**
  - Manter busca instantânea (`#search-input`), atalho `Ctrl+K` / `Cmd+K`, `Escape` para limpar, filtros combinados (`Todos`, `CSS`, `HTML`, `JS`, `a11y`), contadores dinâmicos e expansão acessível via `<button class="card-header">` com `aria-expanded`/`aria-controls`.
  - Snippets de HTML devem sempre ser escapados no preview (nunca interpretados como DOM).
- **Formatação e Editor (`settings.json`):**
  - Formatter padrão: `biomejs.biome` para JS, TS, JSON, JSONC e CSS (`formatOnSave: true`, `tabSize: 2`); `vscode.html-language-features` para HTML.

---

## 3. Estado Atual

### Configurações e Scripts
- `settings.json` — Tema Atom One Dark, Biome, Maple Mono / Cascadia Code, Emmet com Tab, `tabSize: 2`.
- `snippets/css.json` — 20 snippets (Intrinsic Design + 7 de acessibilidade WCAG com tag `a11y`).
- `snippets/html.json` — 12 snippets (boilerplate, seções semânticas e versões inline de CSS).
- `snippets/javascript.json` — 17 snippets (console, arrow/async functions, fetch, imports, DOM, loops/arrays).
- `scripts/backup.ps1` e `scripts/backup.sh` — Copiam configs/snippets do Antigravity para o repo e executam `scripts/sync-docs.py` automaticamente quando Python está disponível.
- `scripts/restore.ps1` e `scripts/restore.sh` — Aplicam configs do repo no editor com backup automático prévio em `.backup/`.
- `scripts/sync-docs.py` — Parser recursivo de sintaxe VS Code (`$0`, `${N:default}` aninhados, `${N|a,b|}`, `${CURRENT_YEAR}`, escapes `\$`) que gera `docs/snippets-data.js` (49 snippets validados).

### Site (`docs/`)
- `docs/index.html` — Catálogo acima da dobra, hero compacto, busca semântica (`<search>`), barra de filtros reais (`Todos`, `CSS`, `HTML`, `JS`, `a11y`), links diretos para `snippets/*.json` no GitHub, seção `#por-que` após o catálogo e instalação com seletor `Windows` / `macOS · Linux`.
- `docs/style.css` — Refatoração visual minimalista/técnica concluída: paleta utilitária, contraste WCAG AA verificado, grid 4 colunas sem sobreposição em desktop e mobile, micro-interações (`hover`, `:focus-visible`, transição de abertura suave em `grid-template-rows` + `opacity` + `translateY`), drawer mobile isolado com `visibility: hidden`.
- `docs/script.js` — Renderização dinâmica a partir de `window.ANTIGRAVITY_SNIPPETS`, contadores sincronizados, preview do código real ao expandir, cópia independente de prefixo (`.row-copy`) e código completo (`.snippet-copy-code`), busca + filtros combinados e switch de SO na instalação.
- `docs/snippets-meta.json` e `docs/snippets-data.js` — Metadados editoriais e bundle estático gerado.

---

## 4. Próximos Passos Planejados

1. **Concluído — Refatoração visual minimalista/técnica e sincronização de dados:** paleta utilitária, layout de catálogo acima da dobra, micro-interações, fonte única de verdade (`sync-docs.py`) e preview de código com tabstops já aplicados e publicados em `origin/master`.
2. **Próximo — Novas funcionalidades interativas e automação no catálogo:**
   - Navegação por teclado entre linhas do catálogo (`ArrowDown` / `ArrowUp` / `Enter` no estilo command palette) a partir do campo de busca.
   - Deep-link por URL/hash para snippets específicos ou filtros ativos (ex: `?q=grid` ou `?filter=a11y`) para compartilhamento direto.
   - Sincronização opcional da seção "Snippets disponíveis" do `README.md` via `scripts/sync-docs.py` para eliminar a última lista manual do repositório.

---

## 5. Registro da Última Sessão

- **Data:** 2026-11-19 (documentado em 2026-11-23)
- **Commits publicados em `origin/master`:**
  - `7603c73` — `feat(scripts): sincroniza snippets/*.json com o site em docs/`
  - `eb234a1` — `feat(docs): refatora UI do catalogo com filtros, preview de codigo e micro-interacoes`
- **Resumo técnico:**
  - Visual do site refatorado para estética editorial/utilitária (removidos glow roxo, emojis, pílulas saturadas e animações de entrada; adotados `Geist`/`Geist Mono`, paleta `#121214`/`#18181B`/`#27272A`/`#7AA2F7` e contraste AA ajustado em `--text-3: #85858f`).
  - Criado pipeline `snippets/*.json` + `docs/snippets-meta.json` → `scripts/sync-docs.py` → `docs/snippets-data.js`, integrado a `backup.ps1` e `backup.sh`.
  - Catálogo movido para acima da dobra com filtros reais (`Todos`, `CSS`, `HTML`, `JS`, `a11y`), preview de código real com destaque de tabstops, cópia de prefixo/código, switch `Windows`/`macOS · Linux` na instalação e correção de stacking do menu mobile.
  - Validado no navegador em `1440×900` e `375×812` com 0 erros de console, 0 falhas de rede e 0 overflow horizontal.

---

## Manutenção de Memória do Projeto

- Sempre que o usuário pedir para **"salvar progresso"**, **"encerrar sessão"** ou **"atualizar memória"**, atualize este arquivo `GEMINI.md` na raiz do projeto marcando as tarefas concluídas em **Estado Atual**, ajustando os **Próximos Passos** e registrando a data e o resumo técnico das mudanças em **Registro da Última Sessão**.
