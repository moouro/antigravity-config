// Arquivo gerado automaticamente por scripts/sync-docs.py a partir de .agent/**/* e snippets/*.json
window.ANTIGRAVITY_SNIPPETS = {
  "kit": [
    {
      "id": "global-standards",
      "kind": "rule",
      "kindLabel": "Rule",
      "name": "Global Standards",
      "trigger": "alwaysApply",
      "path": ".agent/rules/global-standards.md",
      "description": "Padrões globais de código limpo, CSS intrínseco e design autoral sem clichês de IA.",
      "code": "---\ndescription: Padrões globais de código limpo, CSS intrínseco e design autoral sem clichês de IA.\nalwaysApply: true\n---\n\n# Diretrizes Globais de Desenvolvimento e UI\n\n## Anti-Padrões Visuais (\"Cara de IA\" Proibido)\n\n- NUNCA gere interfaces com fundos roxos/azuis neon genéricos, excesso de glassmorphism gratuito, sombras difusas pesadas ou cards idênticos em grid de 3 colunas sem hierarquia.\n- Evite textos clichês de marketing (\"Revolucione seu fluxo\", \"Potencializado por IA\", emojis excessivos em títulos).\n- Prefira estética editorial e funcional: alto contraste tipográfico, espaçamento generoso (whitespace), bordas sutis de `1px solid`, superfícies neutras bem definidas (ex.: `#121214` / `#18181B` no dark mode ou `#FAFAFA` / `#FFFFFF` no light mode) e no máximo 1 cor de destaque intencional.\n\n## Arquitetura Front-End & CSS\n\n- Priorize HTML5 semântico (`<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`) e acessibilidade WCAG (estados `:focus-visible`, `prefers-reduced-motion`, contraste mínimo AA, labels reais).\n- Adote **Intrinsic Web Design**: prefira layouts fluidos com `clamp()`, CSS Grid (`repeat(auto-fit, minmax(min(100%, 280px), 1fr))`), Flexbox com `gap` fluido e Container Queries (`@container`) em vez de dezenas de media queries rígidas.\n- Use CSS Variables (`--*`) organizadas em tokens semânticos (cores, escala tipográfica fluida, espaçamentos e raios de borda).\n- Respeite o formatter configurado no projeto (Biome, Prettier ou padrão nativo do editor), mantendo aspas consistentes, zero imports não utilizados e código enxuto.\n",
      "codeHtml": "<span class=\"cm\">---</span>\n<span class=\"md-key\">description</span>: Padrões globais de código limpo, CSS intrínseco e design autoral sem clichês de IA.\n<span class=\"md-key\">alwaysApply</span>: true\n<span class=\"cm\">---</span>\n\n<span class=\"md-head\"># Diretrizes Globais de Desenvolvimento e UI</span>\n\n<span class=\"md-head\">## Anti-Padrões Visuais (\"Cara de IA\" Proibido)</span>\n\n- NUNCA gere interfaces com fundos roxos/azuis neon genéricos, excesso de glassmorphism gratuito, sombras difusas pesadas ou cards idênticos em grid de 3 colunas sem hierarquia.\n- Evite textos clichês de marketing (\"Revolucione seu fluxo\", \"Potencializado por IA\", emojis excessivos em títulos).\n- Prefira estética editorial e funcional: alto contraste tipográfico, espaçamento generoso (whitespace), bordas sutis de `1px solid`, superfícies neutras bem definidas (ex.: `#121214` / `#18181B` no dark mode ou `#FAFAFA` / `#FFFFFF` no light mode) e no máximo 1 cor de destaque intencional.\n\n<span class=\"md-head\">## Arquitetura Front-End &amp; CSS</span>\n\n- Priorize HTML5 semântico (`&lt;main&gt;`, `&lt;nav&gt;`, `&lt;article&gt;`, `&lt;section&gt;`, `&lt;header&gt;`, `&lt;footer&gt;`) e acessibilidade WCAG (estados `:focus-visible`, `prefers-reduced-motion`, contraste mínimo AA, labels reais).\n- Adote **Intrinsic Web Design**: prefira layouts fluidos com `clamp()`, CSS Grid (`repeat(auto-fit, minmax(min(100%, 280px), 1fr))`), Flexbox com `gap` fluido e Container Queries (`@container`) em vez de dezenas de media queries rígidas.\n- Use CSS Variables (`--*`) organizadas em tokens semânticos (cores, escala tipográfica fluida, espaçamentos e raios de borda).\n- Respeite o formatter configurado no projeto (Biome, Prettier ou padrão nativo do editor), mantendo aspas consistentes, zero imports não utilizados e código enxuto.",
      "lines": 19
    },
    {
      "id": "autoral-ui",
      "kind": "skill",
      "kindLabel": "Skill",
      "name": "Autoral UI",
      "trigger": "/autoral-ui",
      "path": ".agent/skills/autoral-ui/SKILL.md",
      "description": "Cria ou refatora interfaces web modernas com direção de arte autoral, tokens CSS fluidos, HTML semântico e zero estética genérica de IA.",
      "code": "---\nname: autoral-ui\ndescription: Cria ou refatora interfaces web modernas com direção de arte autoral, tokens CSS fluidos, HTML semântico e zero estética genérica de IA.\n---\n\n# Processo de Criação de Interface Autoral\n\nQuando esta skill for acionada, execute rigorosamente estas etapas antes de escrever componentes:\n\n1. **Direção Estética Intencional**\n   - Defina uma personalidade visual clara antes do código (ex.: Editorial Minimalista, Suíço/Tipográfico, Utilitário Técnico estilo Linear/Raycast, ou Brutalismo Limpo).\n   - Escolha uma paleta restrita: 2 tons de superfície, 2 tons de texto (primário e secundário), 1 cor de borda sutil e 1 cor de acento.\n\n2. **Fundações CSS (`tokens.css` e `reset.css`)**\n   - Crie tokens usando `clamp()` para tipografia fluida (`--text-xs` até `--text-3xl`) e espaçamentos (`--space-xs` até `--space-2xl`).\n   - Inclua `color-scheme: light dark`, `focus-visible` acessível e suporte a `prefers-reduced-motion`.\n\n3. **Construção Semântica**\n   - Escreva HTML limpo, sem `<div>` aninhadas desnecessárias (\"div soup\").\n   - Use atributos ARIA apenas quando o HTML nativo não cobrir a semântica.\n\n4. **Validação Visual (se Chrome DevTools estiver ativo)**\n   - Após gerar a interface, verifique se há quebra de overflow horizontal em 360px e 1440px e ajuste os tokens fluidos se necessário.\n",
      "codeHtml": "<span class=\"cm\">---</span>\n<span class=\"md-key\">name</span>: autoral-ui\n<span class=\"md-key\">description</span>: Cria ou refatora interfaces web modernas com direção de arte autoral, tokens CSS fluidos, HTML semântico e zero estética genérica de IA.\n<span class=\"cm\">---</span>\n\n<span class=\"md-head\"># Processo de Criação de Interface Autoral</span>\n\nQuando esta skill for acionada, execute rigorosamente estas etapas antes de escrever componentes:\n\n1. **Direção Estética Intencional**\n   - Defina uma personalidade visual clara antes do código (ex.: Editorial Minimalista, Suíço/Tipográfico, Utilitário Técnico estilo Linear/Raycast, ou Brutalismo Limpo).\n   - Escolha uma paleta restrita: 2 tons de superfície, 2 tons de texto (primário e secundário), 1 cor de borda sutil e 1 cor de acento.\n\n2. **Fundações CSS (`tokens.css` e `reset.css`)**\n   - Crie tokens usando `clamp()` para tipografia fluida (`--text-xs` até `--text-3xl`) e espaçamentos (`--space-xs` até `--space-2xl`).\n   - Inclua `color-scheme: light dark`, `focus-visible` acessível e suporte a `prefers-reduced-motion`.\n\n3. **Construção Semântica**\n   - Escreva HTML limpo, sem `&lt;div&gt;` aninhadas desnecessárias (\"div soup\").\n   - Use atributos ARIA apenas quando o HTML nativo não cobrir a semântica.\n\n4. **Validação Visual (se Chrome DevTools estiver ativo)**\n   - Após gerar a interface, verifique se há quebra de overflow horizontal em 360px e 1440px e ajuste os tokens fluidos se necessário.",
      "lines": 23
    },
    {
      "id": "anti-ai-writing",
      "kind": "skill",
      "kindLabel": "Skill",
      "name": "Anti-AI Writing",
      "trigger": "/anti-ai-writing",
      "path": ".agent/skills/anti-ai-writing/SKILL.md",
      "description": "Escreve, reescreve e audita textos técnicos, docs, artigos, copy e PRs removendo sinais de escrita gerada por IA com base no guia Wikipedia:Signs of AI writing (WP:AISIGNS).",
      "code": "---\nname: anti-ai-writing\ndescription: Escreve, reescreve e audita textos técnicos, docs, artigos, copy e PRs removendo sinais de escrita gerada por IA com base no guia Wikipedia:Signs of AI writing (WP:AISIGNS).\n---\n\n# Anti-AI Writing (`WP:AISIGNS`)\n\nSkill de duplo modo baseada no catálogo de campo **Wikipedia:Signs of AI writing** (*WikiProject AI Cleanup*). Use para escrever ou reescrever com voz humana direta, ou para auditar textos existentes em português e inglês.\n\n**Princípio central:** nenhum padrão isolado prova autoria de IA. O problema aparece no **acúmulo** de tiques lexicais, estruturais e de formatação. Sempre preserve fatos verificáveis e a voz real do autor.\n\n---\n\n## Modos de operação\n\n### Modo 1 — Escrever ou Reescrever\n1. Corte inflação de importância, preâmbulos de chatbot, disclaimers defensivos e conclusões em formato de roteiro.\n2. Troque verbos pomposos por verbos simples (`é`, `tem`, `fez`, `usou` / `is`, `has`, `wrote`, `used`).\n3. Quebre trios artificiais (*regra de três*), paralelismos negativos (`não apenas X, mas também Y`) e gerúndios genéricos no fim da frase.\n4. Substitua atribuições vagas (`especialistas dizem`) por fatos concretos ou corte a afirmação.\n5. Varie o ritmo das frases sem cair no extremo de frases telegráficas idênticas de 8–20 palavras.\n\n### Modo 2 — Auditar texto existente\nAo receber um texto para auditoria, devolva:\n1. **Trechos sinalizados:** cite o trecho exato, a categoria do padrão encontrado e por que soa artificial.\n2. **Verificação de falsos positivos:** descarte alertas se houver apenas 1 traço isolado ou se cair na seção de indicadores ineficazes.\n3. **Versão reescrita:** aplique as correções mantendo o sentido original, sem inventar fatos novos.\n\n---\n\n## 1. Padrões de conteúdo (`WP:AIWTW`)\n\n- **Inflação de importância, legado e tendências:** transformar fatos comuns em marcos históricos ou culturais.\n  - *Evitar (PT/EN):* `serve como`, `é um testemunho de`, `papel crucial/pivotal/vital`, `ressalta a importância`, `reflete tendências mais amplas`, `marca uma virada`, `cenário em evolução`, `marca indelével`, `profundamente enraizado` · `stands/serves as`, `testament/reminder`, `pivotal/crucial/vital role`, `underscores/highlights its importance`, `evolving landscape`, `indelible mark`, `deeply rooted`, `forms part of the wider`.\n- **Alegar que o tema \"moldou discussões\":** enquadrar assuntos como catalisadores de debates amplos (quase sempre em trio).\n  - *Evitar:* `moldou conversas/debates sobre X, Y e Z` · `shaped conversations/discussions/debate about`.\n- **Ênfase artificial em notoriedade, cobertura e cadastros:** listar veículos de mídia por categoria ou frisar que registros oficiais \"identificam\" o sujeito.\n  - *Evitar:* `cobertura independente`, `veículos locais/nacionais`, `publicações especializadas`, `registros identificam X como`, `mantém forte presença digital` · `independent coverage`, `media outlets`, `trade publications`, `databases/records identify ... as`, `maintains a strong digital presence`.\n- **Análises superficiais com gerúndio (`-ing`) no final da frase:** anexar sínteses vazias sobre impacto ou significado.\n  - *Evitar:* `...destacando`, `...garantindo`, `...refletindo`, `...contribuindo para`, `...fomentando`, `...aprimorando`, `insights valiosos` · `highlighting`, `underscoring`, `ensuring`, `reflecting`, `fostering`, `enhancing`, `valuable insights`, `align/resonate with`.\n- **Conexões vagas:** dizer que algo está \"associado\" em vez de nomear o papel real (`foi CEO`, `escreveu`, `manteve`).\n  - *Evitar:* `associado a`, `em conexão com`, `conectado a` · `associated with`, `in connection with`, `connected to`.\n- **Atribuições vagas (*weasel words*):** invocar autoridades genéricas sem fonte ou exagerar a quantidade de fontes.\n  - *Evitar:* `relatórios do setor`, `observadores citam`, `especialistas afirmam`, `alguns críticos argumentam`, `várias fontes`, `tais como` antes de listas exaustivas · `industry reports`, `observers have cited`, `experts argue`, `some critics argue`.\n- **Conclusões em formato de roteiro (\"Desafios e Futuro\"):** fechar seções ou artigos com contraste formulaico e otimismo genérico.\n  - *Evitar:* `Apesar de seus..., enfrenta diversos desafios...`, `Desafios e Legado`, `Perspectivas Futuras` · `Despite these challenges`, `Challenges and Legacy`, `Future Outlook`, seções `\"X and Y\"` como `Awards and recognition`.\n\n---\n\n## 2. Linguagem, vocabulário e gramática\n\n- **Alta densidade de \"vocabulário de IA\"** (especialmente quando várias palavras aparecem juntas):\n  - *Geral / 2023–2025:* `além disso` (no início da frase), `alinhar-se com`, `ostenta`, `impulsionado`, `crucial`, `mergulho profundo`, `aprofundar-se`, `enfatizando`, `duradouro`, `aprimorar`, `fomentar`, `destacar`, `interação complexa`, `intrincado`, `cenário`/`panorama`, `meticulosamente`, `pivotal`, `robusto`, `exibir`, `tapeçaria`, `testemunho`, `ressaltar`, `valioso`, `vibrante` · `Additionally`, `align with`, `boasts`, `bolstered`, `crucial`, `deep dive`, `delve`, `emphasizing`, `enduring`, `enhance`, `fostering`, `garner`, `highlight`, `interplay`, `intricate`, `landscape`, `meticulous/ly`, `pivotal`, `robust`, `showcase`, `tapestry`, `testament`, `underscore`, `valuable`, `vibrant`.\n  - *Modelos 2026+:* excesso de `challenge`, `clearer`, `dependable`, `echoed`, `foster`, `leverage`, `matters`, `multifaceted`, `practical`, `prioritize`, `quietly`, `steady`, `universally` (e equivalentes como `alavancar`, `multifacetado`, `silenciosamente`, `priorizar`), somado a cadência monótona de frases muito curtas (8–20 palavras) só com ponto e vírgula.\n  - *Grok:* `causal`, `empirical`, `correlate`, `underscore`.\n- **Fuga de cópulas simples (`é` / `tem`):** substituir `é`/`tem` por verbos promocionais ou definições artificiais.\n  - *Evitar:* `serve como`, `atua como`, `representa um`, `ostenta um`, `refere-se a` (para entidades concretas), `detém a distinção de` · `serves/stands/functions/operates as`, `boasts/features/maintains/offers`, `refers to`, `holds the distinction of being`.\n- **Paralelismos negativos (`WP:AIPARALLEL`):** dramatizar usando contrastes simétricos.\n  - *Evitar:* `Não apenas X, mas também Y` · `Não é X, é Y` (`sem X, sem Y, apenas Z`) · `Y em vez de X` usado repetidamente · `Not just X, but also Y`, `It's not X, it's Y`, `Y rather than X`.\n- **Regra de três (`WP:RO3`):** agrupar quase todo exemplo, adjetivo ou cláusula em trios (`X, Y e Z`). Use 1, 2 ou 4 itens quando for o número real.\n\n---\n\n## 3. Estilo e formatação\n\n- **Title Case em títulos de seção:** use sentence case (`Como configurar o ambiente`, não `Como Configurar o Ambiente`).\n- **Excesso de negrito:** destaque no máximo termos-chave reais; não negrite frases inteiras ou metade de cada parágrafo.\n- **Listas verticais com cabeçalho em negrito inline:** evite empilhar tudo como `- **Rótulo**: explicação` quando prosa corrida ou lista simples comunica melhor.\n- **Níveis de heading quebrados:** não repita H1 (`#`) no corpo do documento.\n- **Emojis decorativos em títulos e listas:** corte `✨`, `🚀`, `🖊️`, `🔥`, `💡` no início de headings ou itens.\n- **Aspas inconsistentes:** respeite o padrão do repositório (aspas retas `\"\"` / `''` em código, docs técnicas e Markdown limpo).\n\n---\n\n## 4. Comunicação vazada, hedging e placeholders\n\n- **Falas de chatbot coladas no documento:** remova preâmbulos, despedidas e instruções ao autor.\n  - *Evitar:* `Claro!`, `Com certeza!`, `Espero que isso ajude`, `Aqui está um...`, `Gostaria que eu...`, `Fique à vontade para...`, comentários `<!-- expandir depois -->` · `Certainly!`, `Of course!`, `You're absolutely right!`, `I hope this helps`, `Here is a...`, `Would you like...`.\n- **Disclaimers defensivos (*hedging*):** evite narrar a falta de informação ou ditar como o leitor deve interpretar fontes.\n  - *Evitar:* `Embora os detalhes sejam limitados...`, `com base nas informações disponíveis`, `não está amplamente documentado`, `mantém perfil discreto`, `deve ser tratado como... em vez de...`, `por si só não estabelece...`, `é importante notar` · `While specific details are limited`, `based on available information`, `maintains a low profile`, `does not by itself establish`, `important to note`.\n- **Placeholders esquecidos:** verifique sempre se não sobrou `[Nome]`, `[Ano]`, `(Se disponível)`, `2026-XX-XX`, `INSERT_URL_HERE` ou `https://example.com/...`.\n\n---\n\n## 5. Markup, citações, PRs e comentários técnicos\n\n- **Artefatos de markup e tokens internos:** remova sintaxe Markdown vazada em texto puro/HTML/wiki (`**`, `---`, ```` ``` ````) e tokens de plataforma (`contentReference[oaicite:...]`, setas `↩`).\n- **Links, referências e parâmetros de rastreio:**\n  - Nunca invente URLs, DOIs, ISBNs ou números de página.\n  - Remova parâmetros de rastreamento de chatbots (`?utm_source=chatgpt.com`, `?utm_source=openai`, `?utm_source=copilot.com`, `referrer=grok.com`).\n  - Não deixe referências declaradas sem uso no corpo do texto.\n- **Commits, PRs e comentários de revisão (equivalente a `WP:AISUMMARY` / `WP:AICOMMENT`):**\n  - *Evitar tom de \"atendimento ao cliente\":* `Peço desculpas por qualquer inconveniente`, `Revisei cuidadosamente`, `Se houver pontos específicos, por favor aponte`.\n  - *Evitar resumos procedurais vazios:* `Refinado e aprimorado em conformidade com as boas práticas, preservando a clareza e o fluxo` · `ensured adherence to`, `refined`, `enhanced`, `streamlined`, `while preserving`, `avoided`.\n  - *Preferir:* dizer diretamente **o que mudou e por quê** (`fix: corrige overflow no bloco de código em 375px`).\n\n---\n\n## 6. Indicadores históricos (modelos 2022–2026)\n\nAinda comuns em textos antigos ou prompts mal direcionados:\n- **Tom de folheto turístico / press release:** `aninhado em`, `no coração de`, `inovador`, `renomado`, `ampla gama`, `compromisso com` · `nestled`, `in the heart of`, `groundbreaking`, `renowned`, `diverse array`, `commitment to`.\n- **Avisos de corte de treinamento e recusas:** `até minha última atualização`, `como um modelo de linguagem de IA` · `as of my last knowledge update`, `as an AI language model`.\n- **Resumo mecânico no final:** `Em resumo`, `Em conclusão`, `No geral` · `In summary`, `In conclusion`, `Overall`.\n- **Travessão (`—`) em excesso ou ausente demais:** evitar usar ` — ` em toda frase no lugar de vírgula, parênteses ou dois-pontos — mas também não eliminar toda pontuação variada.\n- **Variação elegante forçada (*elegant variation*):** não troque o nome de um conceito por sinônimos artificiais a cada frase só para evitar repetição.\n- **Cortes abruptos** no meio da frase ou datas de acesso inconsistentes.\n\n---\n\n## 7. Sinais de escrita humana (o que buscar)\n\n- Verbos comuns e diretos: `escreveu`, `mudou`, `usou`, `tentou`, `morreu` (`wrote`, `moved`, `used`, `tried`, `died`) em vez de equivalentes empolados (`redigiu`, `realocou`, `utilizou`, `empreendeu`).\n- Construções naturais: `há um`, `tem um`, `um dos melhores`, `foi o primeiro`, qualificadores simples (`muito`, `talvez`, `tende a`).\n- Especificidade concreta (números reais, nomes exatos, restrições reais) em vez de adjetivos abstratos.\n\n---\n\n## 8. Falsos positivos (NÃO usar como prova de IA)\n\nAo auditar textos de terceiros, **não** marque como IA apenas por:\n1. Gramática impecável.\n2. Mistura de tom técnico/formal e casual.\n3. Prosa seca ou direta (IA tende a ser prolixa e positiva, não seca).\n4. Vocabulário formal em geral (o sinal é a repetição do léxico específico da seção 2).\n5. Uma palavra de transição isolada (`Além disso`, `Portanto`).\n6. Ausência de fontes ou formatação limpa gerada por editores visuais.\n",
      "codeHtml": "<span class=\"cm\">---</span>\n<span class=\"md-key\">name</span>: anti-ai-writing\n<span class=\"md-key\">description</span>: Escreve, reescreve e audita textos técnicos, docs, artigos, copy e PRs removendo sinais de escrita gerada por IA com base no guia Wikipedia:Signs of AI writing (WP:AISIGNS).\n<span class=\"cm\">---</span>\n\n<span class=\"md-head\"># Anti-AI Writing (`WP:AISIGNS`)</span>\n\nSkill de duplo modo baseada no catálogo de campo **Wikipedia:Signs of AI writing** (*WikiProject AI Cleanup*). Use para escrever ou reescrever com voz humana direta, ou para auditar textos existentes em português e inglês.\n\n**Princípio central:** nenhum padrão isolado prova autoria de IA. O problema aparece no **acúmulo** de tiques lexicais, estruturais e de formatação. Sempre preserve fatos verificáveis e a voz real do autor.\n\n---\n\n<span class=\"md-head\">## Modos de operação</span>\n\n<span class=\"md-head\">### Modo 1 — Escrever ou Reescrever</span>\n1. Corte inflação de importância, preâmbulos de chatbot, disclaimers defensivos e conclusões em formato de roteiro.\n2. Troque verbos pomposos por verbos simples (`é`, `tem`, `fez`, `usou` / `is`, `has`, `wrote`, `used`).\n3. Quebre trios artificiais (*regra de três*), paralelismos negativos (`não apenas X, mas também Y`) e gerúndios genéricos no fim da frase.\n4. Substitua atribuições vagas (`especialistas dizem`) por fatos concretos ou corte a afirmação.\n5. Varie o ritmo das frases sem cair no extremo de frases telegráficas idênticas de 8–20 palavras.\n\n<span class=\"md-head\">### Modo 2 — Auditar texto existente</span>\nAo receber um texto para auditoria, devolva:\n1. **Trechos sinalizados:** cite o trecho exato, a categoria do padrão encontrado e por que soa artificial.\n2. **Verificação de falsos positivos:** descarte alertas se houver apenas 1 traço isolado ou se cair na seção de indicadores ineficazes.\n3. **Versão reescrita:** aplique as correções mantendo o sentido original, sem inventar fatos novos.\n\n---\n\n<span class=\"md-head\">## 1. Padrões de conteúdo (`WP:AIWTW`)</span>\n\n- **Inflação de importância, legado e tendências:** transformar fatos comuns em marcos históricos ou culturais.\n  - *Evitar (PT/EN):* `serve como`, `é um testemunho de`, `papel crucial/pivotal/vital`, `ressalta a importância`, `reflete tendências mais amplas`, `marca uma virada`, `cenário em evolução`, `marca indelével`, `profundamente enraizado` · `stands/serves as`, `testament/reminder`, `pivotal/crucial/vital role`, `underscores/highlights its importance`, `evolving landscape`, `indelible mark`, `deeply rooted`, `forms part of the wider`.\n- **Alegar que o tema \"moldou discussões\":** enquadrar assuntos como catalisadores de debates amplos (quase sempre em trio).\n  - *Evitar:* `moldou conversas/debates sobre X, Y e Z` · `shaped conversations/discussions/debate about`.\n- **Ênfase artificial em notoriedade, cobertura e cadastros:** listar veículos de mídia por categoria ou frisar que registros oficiais \"identificam\" o sujeito.\n  - *Evitar:* `cobertura independente`, `veículos locais/nacionais`, `publicações especializadas`, `registros identificam X como`, `mantém forte presença digital` · `independent coverage`, `media outlets`, `trade publications`, `databases/records identify ... as`, `maintains a strong digital presence`.\n- **Análises superficiais com gerúndio (`-ing`) no final da frase:** anexar sínteses vazias sobre impacto ou significado.\n  - *Evitar:* `...destacando`, `...garantindo`, `...refletindo`, `...contribuindo para`, `...fomentando`, `...aprimorando`, `insights valiosos` · `highlighting`, `underscoring`, `ensuring`, `reflecting`, `fostering`, `enhancing`, `valuable insights`, `align/resonate with`.\n- **Conexões vagas:** dizer que algo está \"associado\" em vez de nomear o papel real (`foi CEO`, `escreveu`, `manteve`).\n  - *Evitar:* `associado a`, `em conexão com`, `conectado a` · `associated with`, `in connection with`, `connected to`.\n- **Atribuições vagas (*weasel words*):** invocar autoridades genéricas sem fonte ou exagerar a quantidade de fontes.\n  - *Evitar:* `relatórios do setor`, `observadores citam`, `especialistas afirmam`, `alguns críticos argumentam`, `várias fontes`, `tais como` antes de listas exaustivas · `industry reports`, `observers have cited`, `experts argue`, `some critics argue`.\n- **Conclusões em formato de roteiro (\"Desafios e Futuro\"):** fechar seções ou artigos com contraste formulaico e otimismo genérico.\n  - *Evitar:* `Apesar de seus..., enfrenta diversos desafios...`, `Desafios e Legado`, `Perspectivas Futuras` · `Despite these challenges`, `Challenges and Legacy`, `Future Outlook`, seções `\"X and Y\"` como `Awards and recognition`.\n\n---\n\n<span class=\"md-head\">## 2. Linguagem, vocabulário e gramática</span>\n\n- **Alta densidade de \"vocabulário de IA\"** (especialmente quando várias palavras aparecem juntas):\n  - *Geral / 2023–2025:* `além disso` (no início da frase), `alinhar-se com`, `ostenta`, `impulsionado`, `crucial`, `mergulho profundo`, `aprofundar-se`, `enfatizando`, `duradouro`, `aprimorar`, `fomentar`, `destacar`, `interação complexa`, `intrincado`, `cenário`/`panorama`, `meticulosamente`, `pivotal`, `robusto`, `exibir`, `tapeçaria`, `testemunho`, `ressaltar`, `valioso`, `vibrante` · `Additionally`, `align with`, `boasts`, `bolstered`, `crucial`, `deep dive`, `delve`, `emphasizing`, `enduring`, `enhance`, `fostering`, `garner`, `highlight`, `interplay`, `intricate`, `landscape`, `meticulous/ly`, `pivotal`, `robust`, `showcase`, `tapestry`, `testament`, `underscore`, `valuable`, `vibrant`.\n  - *Modelos 2026+:* excesso de `challenge`, `clearer`, `dependable`, `echoed`, `foster`, `leverage`, `matters`, `multifaceted`, `practical`, `prioritize`, `quietly`, `steady`, `universally` (e equivalentes como `alavancar`, `multifacetado`, `silenciosamente`, `priorizar`), somado a cadência monótona de frases muito curtas (8–20 palavras) só com ponto e vírgula.\n  - *Grok:* `causal`, `empirical`, `correlate`, `underscore`.\n- **Fuga de cópulas simples (`é` / `tem`):** substituir `é`/`tem` por verbos promocionais ou definições artificiais.\n  - *Evitar:* `serve como`, `atua como`, `representa um`, `ostenta um`, `refere-se a` (para entidades concretas), `detém a distinção de` · `serves/stands/functions/operates as`, `boasts/features/maintains/offers`, `refers to`, `holds the distinction of being`.\n- **Paralelismos negativos (`WP:AIPARALLEL`):** dramatizar usando contrastes simétricos.\n  - *Evitar:* `Não apenas X, mas também Y` · `Não é X, é Y` (`sem X, sem Y, apenas Z`) · `Y em vez de X` usado repetidamente · `Not just X, but also Y`, `It's not X, it's Y`, `Y rather than X`.\n- **Regra de três (`WP:RO3`):** agrupar quase todo exemplo, adjetivo ou cláusula em trios (`X, Y e Z`). Use 1, 2 ou 4 itens quando for o número real.\n\n---\n\n<span class=\"md-head\">## 3. Estilo e formatação</span>\n\n- **Title Case em títulos de seção:** use sentence case (`Como configurar o ambiente`, não `Como Configurar o Ambiente`).\n- **Excesso de negrito:** destaque no máximo termos-chave reais; não negrite frases inteiras ou metade de cada parágrafo.\n- **Listas verticais com cabeçalho em negrito inline:** evite empilhar tudo como `- **Rótulo**: explicação` quando prosa corrida ou lista simples comunica melhor.\n- **Níveis de heading quebrados:** não repita H1 (`#`) no corpo do documento.\n- **Emojis decorativos em títulos e listas:** corte `✨`, `🚀`, `🖊️`, `🔥`, `💡` no início de headings ou itens.\n- **Aspas inconsistentes:** respeite o padrão do repositório (aspas retas `\"\"` / `''` em código, docs técnicas e Markdown limpo).\n\n---\n\n<span class=\"md-head\">## 4. Comunicação vazada, hedging e placeholders</span>\n\n- **Falas de chatbot coladas no documento:** remova preâmbulos, despedidas e instruções ao autor.\n  - *Evitar:* `Claro!`, `Com certeza!`, `Espero que isso ajude`, `Aqui está um...`, `Gostaria que eu...`, `Fique à vontade para...`, comentários `&lt;!-- expandir depois --&gt;` · `Certainly!`, `Of course!`, `You're absolutely right!`, `I hope this helps`, `Here is a...`, `Would you like...`.\n- **Disclaimers defensivos (*hedging*):** evite narrar a falta de informação ou ditar como o leitor deve interpretar fontes.\n  - *Evitar:* `Embora os detalhes sejam limitados...`, `com base nas informações disponíveis`, `não está amplamente documentado`, `mantém perfil discreto`, `deve ser tratado como... em vez de...`, `por si só não estabelece...`, `é importante notar` · `While specific details are limited`, `based on available information`, `maintains a low profile`, `does not by itself establish`, `important to note`.\n- **Placeholders esquecidos:** verifique sempre se não sobrou `[Nome]`, `[Ano]`, `(Se disponível)`, `2026-XX-XX`, `INSERT_URL_HERE` ou `https://example.com/...`.\n\n---\n\n<span class=\"md-head\">## 5. Markup, citações, PRs e comentários técnicos</span>\n\n- **Artefatos de markup e tokens internos:** remova sintaxe Markdown vazada em texto puro/HTML/wiki (`**`, `---`, ```` ``` ````) e tokens de plataforma (`contentReference[oaicite:...]`, setas `↩`).\n- **Links, referências e parâmetros de rastreio:**\n  - Nunca invente URLs, DOIs, ISBNs ou números de página.\n  - Remova parâmetros de rastreamento de chatbots (`?utm_source=chatgpt.com`, `?utm_source=openai`, `?utm_source=copilot.com`, `referrer=grok.com`).\n  - Não deixe referências declaradas sem uso no corpo do texto.\n- **Commits, PRs e comentários de revisão (equivalente a `WP:AISUMMARY` / `WP:AICOMMENT`):**\n  - *Evitar tom de \"atendimento ao cliente\":* `Peço desculpas por qualquer inconveniente`, `Revisei cuidadosamente`, `Se houver pontos específicos, por favor aponte`.\n  - *Evitar resumos procedurais vazios:* `Refinado e aprimorado em conformidade com as boas práticas, preservando a clareza e o fluxo` · `ensured adherence to`, `refined`, `enhanced`, `streamlined`, `while preserving`, `avoided`.\n  - *Preferir:* dizer diretamente **o que mudou e por quê** (`fix: corrige overflow no bloco de código em 375px`).\n\n---\n\n<span class=\"md-head\">## 6. Indicadores históricos (modelos 2022–2026)</span>\n\nAinda comuns em textos antigos ou prompts mal direcionados:\n- **Tom de folheto turístico / press release:** `aninhado em`, `no coração de`, `inovador`, `renomado`, `ampla gama`, `compromisso com` · `nestled`, `in the heart of`, `groundbreaking`, `renowned`, `diverse array`, `commitment to`.\n- **Avisos de corte de treinamento e recusas:** `até minha última atualização`, `como um modelo de linguagem de IA` · `as of my last knowledge update`, `as an AI language model`.\n- **Resumo mecânico no final:** `Em resumo`, `Em conclusão`, `No geral` · `In summary`, `In conclusion`, `Overall`.\n- **Travessão (`—`) em excesso ou ausente demais:** evitar usar ` — ` em toda frase no lugar de vírgula, parênteses ou dois-pontos — mas também não eliminar toda pontuação variada.\n- **Variação elegante forçada (*elegant variation*):** não troque o nome de um conceito por sinônimos artificiais a cada frase só para evitar repetição.\n- **Cortes abruptos** no meio da frase ou datas de acesso inconsistentes.\n\n---\n\n<span class=\"md-head\">## 7. Sinais de escrita humana (o que buscar)</span>\n\n- Verbos comuns e diretos: `escreveu`, `mudou`, `usou`, `tentou`, `morreu` (`wrote`, `moved`, `used`, `tried`, `died`) em vez de equivalentes empolados (`redigiu`, `realocou`, `utilizou`, `empreendeu`).\n- Construções naturais: `há um`, `tem um`, `um dos melhores`, `foi o primeiro`, qualificadores simples (`muito`, `talvez`, `tende a`).\n- Especificidade concreta (números reais, nomes exatos, restrições reais) em vez de adjetivos abstratos.\n\n---\n\n<span class=\"md-head\">## 8. Falsos positivos (NÃO usar como prova de IA)</span>\n\nAo auditar textos de terceiros, **não** marque como IA apenas por:\n1. Gramática impecável.\n2. Mistura de tom técnico/formal e casual.\n3. Prosa seca ou direta (IA tende a ser prolixa e positiva, não seca).\n4. Vocabulário formal em geral (o sinal é a repetição do léxico específico da seção 2).\n5. Uma palavra de transição isolada (`Além disso`, `Portanto`).\n6. Ausência de fontes ou formatação limpa gerada por editores visuais.",
      "lines": 127
    },
    {
      "id": "ui-reviewer",
      "kind": "agent",
      "kindLabel": "Agent",
      "name": "UI Reviewer",
      "trigger": "@ui-reviewer",
      "path": ".agent/agents/ui-reviewer.md",
      "description": "Revisa interfaces, CSS e HTML em busca de clichês visuais de IA, problemas de responsividade, contraste e semântica.",
      "code": "---\nname: ui-reviewer\ndescription: Revisa interfaces, CSS e HTML em busca de clichês visuais de IA, problemas de responsividade, contraste e semântica.\nmodel: claude-sonnet-5-5\n---\n\nVocê é um Diretor de Arte e Engenheiro Front-End sênior especializado em Intrinsic Web Design e tipografia.\nAo revisar qualquer código ou página:\n\n1. Aponte imediatamente elementos que pareçam \"template genérico de IA\" e sugira ajustes exatos de CSS (valores de padding, contraste, hierarquia de fonte e bordas).\n2. Substitua media queries desnecessárias por soluções intrínsecas (`clamp()`, `minmax()`, Container Queries).\n3. Seja direto: liste o arquivo, o problema visual/técnico e aplique a correção limpa.\n",
      "codeHtml": "<span class=\"cm\">---</span>\n<span class=\"md-key\">name</span>: ui-reviewer\n<span class=\"md-key\">description</span>: Revisa interfaces, CSS e HTML em busca de clichês visuais de IA, problemas de responsividade, contraste e semântica.\n<span class=\"md-key\">model</span>: claude-sonnet-5-5\n<span class=\"cm\">---</span>\n\nVocê é um Diretor de Arte e Engenheiro Front-End sênior especializado em Intrinsic Web Design e tipografia.\nAo revisar qualquer código ou página:\n\n1. Aponte imediatamente elementos que pareçam \"template genérico de IA\" e sugira ajustes exatos de CSS (valores de padding, contraste, hierarquia de fonte e bordas).\n2. Substitua media queries desnecessárias por soluções intrínsecas (`clamp()`, `minmax()`, Container Queries).\n3. Seja direto: liste o arquivo, o problema visual/técnico e aplique a correção limpa.",
      "lines": 12
    }
  ],
  "categories": [
    {
      "id": "css",
      "label": "CSS",
      "file": "snippets/css.json",
      "items": [
        {
          "name": "CSS Variables (Intrinsic)",
          "prefix": "cssvars",
          "description": "Design tokens com Fluid Typography e Spacing",
          "explanation": "Cria um sistema de design completo com variáveis CSS na <code>:root</code>. Inclui cores (primary, secondary, bg, surface, text), tipografia fluida usando <code>clamp()</code> para escalar automaticamente entre telas, espaçamento fluido com a mesma técnica, fontes, bordas e sombras. Ideal como ponto de partida para qualquer projeto.",
          "code": ":root {\n  /* Cores */\n  --color-primary: #6C63FF;\n  --color-secondary: #FF6584;\n  --color-bg: #0f0f23;\n  --color-surface: #1a1a2e;\n  --color-text: #e0e0e0;\n  --color-text-muted: #a0a0b0;\n\n  /* Fluid Typography — clamp(min, preferred, max) */\n  --fs-sm: clamp(0.875rem, 0.8rem + 0.25vw, 1rem);\n  --fs-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);\n  --fs-lg: clamp(1.25rem, 1rem + 1vw, 1.75rem);\n  --fs-xl: clamp(1.5rem, 1rem + 2vw, 2.5rem);\n  --fs-2xl: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);\n\n  /* Fluid Spacing */\n  --space-xs: clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem);\n  --space-sm: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);\n  --space-md: clamp(1rem, 0.8rem + 1vw, 1.5rem);\n  --space-lg: clamp(1.5rem, 1rem + 2vw, 3rem);\n  --space-xl: clamp(2rem, 1.5rem + 3vw, 5rem);\n\n  /* Tipografia */\n  --font-main: 'Inter', sans-serif;\n  --font-heading: 'Outfit', sans-serif;\n\n  /* Bordas */\n  --radius-sm: 4px;\n  --radius-md: 8px;\n  --radius-lg: 16px;\n  --radius-full: 999px;\n\n  /* Sombras */\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);\n  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.2);\n}",
          "codeHtml": ":root {\n  <span class=\"cm\">/* Cores */</span>\n  --color-primary: <mark class=\"ts\">#6C63FF</mark>;\n  --color-secondary: <mark class=\"ts\">#FF6584</mark>;\n  --color-bg: <mark class=\"ts\">#0f0f23</mark>;\n  --color-surface: <mark class=\"ts\">#1a1a2e</mark>;\n  --color-text: <mark class=\"ts\">#e0e0e0</mark>;\n  --color-text-muted: <mark class=\"ts\">#a0a0b0</mark>;\n\n  <span class=\"cm\">/* Fluid Typography — clamp(min, preferred, max) */</span>\n  --fs-sm: clamp(0.875rem, 0.8rem + 0.25vw, 1rem);\n  --fs-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);\n  --fs-lg: clamp(1.25rem, 1rem + 1vw, 1.75rem);\n  --fs-xl: clamp(1.5rem, 1rem + 2vw, 2.5rem);\n  --fs-2xl: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);\n\n  <span class=\"cm\">/* Fluid Spacing */</span>\n  --space-xs: clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem);\n  --space-sm: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);\n  --space-md: clamp(1rem, 0.8rem + 1vw, 1.5rem);\n  --space-lg: clamp(1.5rem, 1rem + 2vw, 3rem);\n  --space-xl: clamp(2rem, 1.5rem + 3vw, 5rem);\n\n  <span class=\"cm\">/* Tipografia */</span>\n  --font-main: 'Inter', sans-serif;\n  --font-heading: 'Outfit', sans-serif;\n\n  <span class=\"cm\">/* Bordas */</span>\n  --radius-sm: 4px;\n  --radius-md: 8px;\n  --radius-lg: 16px;\n  --radius-full: 999px;\n\n  <span class=\"cm\">/* Sombras */</span>\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);\n  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.2);\n}",
          "lines": 38
        },
        {
          "name": "CSS Reset",
          "prefix": "cssreset",
          "description": "CSS Reset moderno e completo",
          "explanation": "Reset moderno que elimina inconsistências entre navegadores. Aplica <code>box-sizing: border-box</code> a tudo, remove margens/paddings padrão, configura <code>scroll-behavior: smooth</code>, define a fonte base com <code>var(--font-main)</code>, e reseta imagens, links e listas. Base essencial antes de qualquer estilização.",
          "code": "*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: var(--font-main, 'Inter', sans-serif);\n  line-height: 1.6;\n  color: var(--color-text, #e0e0e0);\n  background: var(--color-bg, #0f0f23);\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  max-width: 100%;\n  display: block;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul, ol {\n  list-style: none;\n}",
          "codeHtml": "*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: var(--font-main, 'Inter', sans-serif);\n  line-height: 1.6;\n  color: var(--color-text, #e0e0e0);\n  background: var(--color-bg, #0f0f23);\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  max-width: 100%;\n  display: block;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul, ol {\n  list-style: none;\n}",
          "lines": 32
        },
        {
          "name": "Flexbox Center",
          "prefix": "flexcenter",
          "description": "Centralizar com Flexbox",
          "explanation": "Centraliza um elemento horizontal e verticalmente com apenas 3 propriedades: <code>display: flex</code>, <code>justify-content: center</code> e <code>align-items: center</code>. Útil para centralizar ícones em botões, conteúdo em hero sections, modais, etc.",
          "code": "display: flex;\njustify-content: center;\nalign-items: center;",
          "codeHtml": "display: flex;\njustify-content: center;\nalign-items: center;",
          "lines": 3
        },
        {
          "name": "Flex Column",
          "prefix": "flexcol",
          "description": "Flexbox em coluna com gap fluido",
          "explanation": "Cria um layout em coluna com flex e adiciona espaçamento entre os itens usando <code>gap</code> com variável fluida. Perfeito para organizar formulários, sidebars, listas verticais de cards e qualquer layout em coluna.",
          "code": "display: flex;\nflex-direction: column;\ngap: var(--space-md, 1rem);",
          "codeHtml": "display: flex;\nflex-direction: column;\ngap: var(--space-md, <mark class=\"ts\">1rem</mark>);",
          "lines": 3
        },
        {
          "name": "Grid Intrinsic",
          "prefix": "grid",
          "description": "Grid responsivo sem media queries",
          "explanation": "Grid que se auto-adapta sem precisar de media queries! Usa <code>repeat(auto-fit, minmax(min(100%, 280px), 1fr))</code> — o truque do <code>min(100%, x)</code> evita overflow em telas menores que o mínimo. Os itens crescem e diminuem automaticamente conforme o espaço disponível.",
          "code": "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));\ngap: var(--space-md, 1.5rem);",
          "codeHtml": "display: grid;\ngrid-template-columns: repeat(<mark class=\"ts\">auto-fit</mark>, minmax(min(100%, <mark class=\"ts\">280px</mark>), 1fr));\ngap: var(--space-md, <mark class=\"ts\">1.5rem</mark>);",
          "lines": 3
        },
        {
          "name": "Container Intrinsic",
          "prefix": "container",
          "description": "Container que substitui max-width + padding",
          "explanation": "Substitui o padrão antigo de <code>max-width</code> + <code>padding</code> + <code>margin: 0 auto</code> por uma única linha: <code>width: min(100% - 3rem, 1200px)</code>. O <code>min()</code> garante padding lateral automático e limita a largura máxima. Muito mais elegante.",
          "code": "width: min(100% - 3rem, 1200px);\nmargin-inline: auto;",
          "codeHtml": "width: min(100% - <mark class=\"ts\">3rem</mark>, <mark class=\"ts\">1200px</mark>);\nmargin-inline: auto;",
          "lines": 2
        },
        {
          "name": "Media Query",
          "prefix": "mq",
          "description": "Media query responsiva (macro layout)",
          "explanation": "Template rápido para media query com breakpoint em <code>768px</code>. Ideal para ajustes de macro layout — alternar entre colunas e linhas, esconder/mostrar elementos, ou mudar tamanhos de fonte em telas menores.",
          "code": "@media (max-width: 768px) {\n  \n}",
          "codeHtml": "@media (max-width: <mark class=\"ts\">768px</mark>) {\n  \n}",
          "lines": 3
        },
        {
          "name": "Container Query",
          "prefix": "cq",
          "description": "Componentes responsivos ao seu container",
          "explanation": "Container queries são o futuro do CSS responsivo! Enquanto media queries reagem ao <strong>viewport</strong>, container queries reagem ao <strong>container pai</strong>. Define <code>container-type: inline-size</code> no pai e usa <code>@container</code> no filho. Perfeito para componentes reutilizáveis em diferentes contextos.",
          "code": ".parent {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (width < 400px) {\n  \n}",
          "codeHtml": ".<mark class=\"ts\">parent</mark> {\n  container-type: inline-size;\n  container-name: <mark class=\"ts\">card</mark>;\n}\n\n@container <mark class=\"ts\">card</mark> (width &lt; <mark class=\"ts\">400px</mark>) {\n  \n}",
          "lines": 8
        },
        {
          "name": "Fluid Text",
          "prefix": "fluidtext",
          "description": "Typography fluida com clamp()",
          "explanation": "Uma propriedade <code>font-size</code> com <code>clamp(min, preferred, max)</code> que escala suavemente entre um tamanho mínimo e máximo. Sem saltos bruscos entre breakpoints. O valor preferido usa <code>vw</code> para ser relativo ao viewport. Substitui múltiplas media queries para tipografia.",
          "code": "font-size: clamp(1rem, 0.5rem + 2vw, 2rem);",
          "codeHtml": "font-size: clamp(<mark class=\"ts\">1rem</mark>, <mark class=\"ts\">0.5rem + 2vw</mark>, <mark class=\"ts\">2rem</mark>);",
          "lines": 1
        },
        {
          "name": "Aspect Ratio",
          "prefix": "aspect",
          "description": "Aspect ratio nativo",
          "explanation": "Substitui o antigo hack do <code>padding-top</code> pela propriedade nativa <code>aspect-ratio</code>. Define a proporção (ex: 16/9 para widescreen) e <code>object-fit: cover</code> para imagens/vídeos não distorcerem. Suportado em todos os navegadores modernos.",
          "code": "aspect-ratio: 16 / 9;\nobject-fit: cover;",
          "codeHtml": "aspect-ratio: <mark class=\"ts\">16</mark> / <mark class=\"ts\">9</mark>;\nobject-fit: <mark class=\"ts\">cover</mark>;",
          "lines": 2
        },
        {
          "name": "Glassmorphism",
          "prefix": "glass",
          "description": "Efeito glassmorphism (vidro fosco)",
          "explanation": "Cria o efeito de vidro fosco moderno com <code>backdrop-filter: blur()</code>, fundo semi-transparente e borda sutil. Requer prefixo <code>-webkit-</code> para Safari. Muito usado em navbars, cards e modais para um visual premium.",
          "code": "background: rgba(255, 255, 255, 0.05);\nbackdrop-filter: blur(12px);\n-webkit-backdrop-filter: blur(12px);\nborder: 1px solid rgba(255, 255, 255, 0.1);\nborder-radius: var(--radius-lg, 16px);",
          "codeHtml": "background: rgba(<mark class=\"ts\">255, 255, 255</mark>, <mark class=\"ts\">0.05</mark>);\nbackdrop-filter: blur(<mark class=\"ts\">12px</mark>);\n-webkit-backdrop-filter: blur(<mark class=\"ts\">12px</mark>);\nborder: 1px solid rgba(255, 255, 255, 0.1);\nborder-radius: var(--radius-lg, 16px);",
          "lines": 5
        },
        {
          "name": "Transition",
          "prefix": "trans",
          "description": "Transição CSS suave",
          "explanation": "Adiciona uma transição suave para qualquer mudança de propriedade CSS. O snipet usa <code>all 0.3s ease-in-out</code> como padrão, mas você pode customizar a propriedade, duração e curva de easing via os tab stops.",
          "code": "transition: all 0.3s ease-in-out;",
          "codeHtml": "transition: <mark class=\"ts\">all</mark> <mark class=\"ts\">0.3s</mark> <mark class=\"ts\">ease-in-out</mark>;",
          "lines": 1
        },
        {
          "name": "Hover Scale",
          "prefix": "hoverscale",
          "description": "Efeito hover com scale",
          "explanation": "Efeito de \"crescer\" ao passar o mouse. Combina <code>transition</code> no estado normal com <code>transform: scale(1.05)</code> no <code>:hover</code>. Usa a sintaxe de nesting CSS (<code>&amp;:hover</code>). Ótimo para cards, botões e links interativos.",
          "code": "transition: transform 0.3s ease;\n\n&:hover {\n  transform: scale(1.05);\n}",
          "codeHtml": "transition: transform 0.3s ease;\n\n&amp;:hover {\n  transform: scale(<mark class=\"ts\">1.05</mark>);\n}",
          "lines": 5
        },
        {
          "name": "Screen Reader Only",
          "prefix": "sr-only",
          "description": "Oculta visualmente, mantém acessível",
          "explanation": "Classe utilitária de acessibilidade que oculta um elemento visualmente mas mantém ele acessível para leitores de tela. Usa uma combinação de <code>position: absolute</code>, dimensões de 1px, e <code>overflow: hidden</code>. Essencial para labels, textos contextuais e instruções.",
          "code": ".sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}",
          "codeHtml": ".sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}",
          "lines": 11,
          "tag": "a11y"
        },
        {
          "name": "Focus Visible",
          "prefix": "focus-visible",
          "description": "Indicador de foco para teclado",
          "explanation": "Mostra um outline apenas quando o usuário navega por <strong>teclado</strong> (Tab), não ao clicar com mouse. O <code>:focus-visible</code> diferencia foco de teclado vs mouse. Usa outline com cor primary e <code>outline-offset</code> para não ficar grudado no elemento.",
          "code": "&:focus-visible {\n  outline: 2px solid var(--color-primary, #6C63FF);\n  outline-offset: 2px;\n}",
          "codeHtml": "&amp;:focus-visible {\n  outline: 2px solid <mark class=\"ts\">var(--color-primary, #6C63FF)</mark>;\n  outline-offset: 2px;\n}",
          "lines": 4,
          "tag": "a11y"
        },
        {
          "name": "Reduced Motion",
          "prefix": "reduced-motion",
          "description": "Desativa animações para quem prefere",
          "explanation": "Respeita a preferência do sistema operacional para movimento reduzido (<code>prefers-reduced-motion: reduce</code>). Desativa todas as animações e transições para usuários com sensibilidade a movimento. Critério WCAG importante para acessibilidade.",
          "code": "@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}",
          "codeHtml": "@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}",
          "lines": 8,
          "tag": "a11y"
        },
        {
          "name": "Skip to Content Link",
          "prefix": "skip-link",
          "description": "Link 'Pular para conteúdo' (Tab)",
          "explanation": "Link que fica oculto e aparece quando o usuário pressiona Tab. Permite pular direto para o conteúdo principal sem passar por toda a navegação. Essencial para acessibilidade via teclado, exigido pelo WCAG. Posiciona acima da tela e desliza ao receber foco.",
          "code": ".skip-link {\n  position: absolute;\n  top: -100%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: var(--space-sm, 0.5rem) var(--space-md, 1rem);\n  background: var(--color-primary, #6C63FF);\n  color: #fff;\n  border-radius: 0 0 var(--radius-md, 8px) var(--radius-md, 8px);\n  z-index: 9999;\n  transition: top 0.2s ease;\n}\n\n.skip-link:focus {\n  top: 0;\n}",
          "codeHtml": ".skip-link {\n  position: absolute;\n  top: -100%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: var(--space-sm, 0.5rem) var(--space-md, 1rem);\n  background: var(--color-primary, #6C63FF);\n  color: #fff;\n  border-radius: 0 0 var(--radius-md, 8px) var(--radius-md, 8px);\n  z-index: 9999;\n  transition: top 0.2s ease;\n}\n\n.skip-link:focus {\n  top: 0;\n}",
          "lines": 16,
          "tag": "a11y"
        },
        {
          "name": "Color Scheme",
          "prefix": "color-scheme",
          "description": "Tema claro/escuro automático",
          "explanation": "Detecta a preferência de tema do sistema com <code>prefers-color-scheme</code> e altera as variáveis CSS automaticamente. Define cores diferentes para modo escuro e claro. O site muda de tema sem JavaScript, apenas com CSS.",
          "code": "@media (prefers-color-scheme: dark) {\n  :root {\n    --color-bg: #0f0f23;\n    --color-surface: #1a1a2e;\n    --color-text: #e0e0e0;\n  }\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --color-bg: #f5f5f5;\n    --color-surface: #ffffff;\n    --color-text: #1a1a2e;\n  }\n}",
          "codeHtml": "@media (prefers-color-scheme: dark) {\n  :root {\n    --color-bg: <mark class=\"ts\">#0f0f23</mark>;\n    --color-surface: <mark class=\"ts\">#1a1a2e</mark>;\n    --color-text: <mark class=\"ts\">#e0e0e0</mark>;\n  }\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --color-bg: <mark class=\"ts\">#f5f5f5</mark>;\n    --color-surface: <mark class=\"ts\">#ffffff</mark>;\n    --color-text: <mark class=\"ts\">#1a1a2e</mark>;\n  }\n}",
          "lines": 15,
          "tag": "a11y"
        },
        {
          "name": "High Contrast",
          "prefix": "high-contrast",
          "description": "Modo alto contraste para baixa visão",
          "explanation": "Suporte ao modo de alto contraste do sistema via <code>prefers-contrast: high</code>. Força cores de alto contraste (preto no branco) e bordas visíveis em todos os elementos. Importante para usuários com baixa visão. Critério WCAG.",
          "code": "@media (prefers-contrast: high) {\n  :root {\n    --color-text: #000;\n    --color-bg: #fff;\n    --color-primary: #0000ee;\n  }\n\n  *, *::before, *::after {\n    border-color: currentColor !important;\n  }\n}",
          "codeHtml": "@media (prefers-contrast: high) {\n  :root {\n    --color-text: #000;\n    --color-bg: #fff;\n    --color-primary: #0000ee;\n  }\n\n  *, *::before, *::after {\n    border-color: currentColor !important;\n  }\n}",
          "lines": 11,
          "tag": "a11y"
        },
        {
          "name": "Touch Target",
          "prefix": "touch-target",
          "description": "Tamanho mínimo de toque 44x44px",
          "explanation": "Define <code>min-width: 44px</code> e <code>min-height: 44px</code> conforme WCAG 2.5.8. Garante que botões e links tenham tamanho suficiente para serem tocados com o dedo em dispositivos mobile. Aplique em todos os elementos interativos.",
          "code": "min-width: 44px;\nmin-height: 44px;\n/* WCAG 2.5.8 — tamanho mínimo de 44x44px para alvos de toque */",
          "codeHtml": "min-width: 44px;\nmin-height: 44px;\n<span class=\"cm\">/* WCAG 2.5.8 — tamanho mínimo de 44x44px para alvos de toque */</span>",
          "lines": 3,
          "tag": "a11y"
        }
      ]
    },
    {
      "id": "html",
      "label": "HTML",
      "file": "snippets/html.json",
      "items": [
        {
          "name": "HTML5 Boilerplate",
          "prefix": "html5",
          "description": "Estrutura HTML5 completa com meta tags SEO",
          "explanation": "Template completo de um documento HTML5 com <code>DOCTYPE</code>, <code>lang=\"pt-BR\"</code>, <code>charset UTF-8</code>, viewport para responsividade, <code>meta description</code> para SEO, link para CSS e script JS. Ponto de partida para qualquer página.",
          "code": "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Descrição da página\">\n  <title>Título</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  \n  <script src=\"script.js\"></script>\n</body>\n</html>",
          "codeHtml": "&lt;!DOCTYPE html&gt;\n&lt;html lang=\"pt-BR\"&gt;\n&lt;head&gt;\n  &lt;meta charset=\"UTF-8\"&gt;\n  &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n  &lt;meta name=\"description\" content=\"<mark class=\"ts\">Descrição da página</mark>\"&gt;\n  &lt;title&gt;<mark class=\"ts\">Título</mark>&lt;/title&gt;\n  &lt;link rel=\"stylesheet\" href=\"<mark class=\"ts\">style.css</mark>\"&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  \n  &lt;script src=\"<mark class=\"ts\">script.js</mark>\"&gt;&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;",
          "lines": 14
        },
        {
          "name": "Section",
          "prefix": "section",
          "description": "Seção HTML semântica com container",
          "explanation": "Cria uma <code>&lt;section&gt;</code> semântica com <code>id</code> para navegação, classe customizável, e um <code>div.container</code> interno para limitar a largura. Inclui um <code>&lt;h2&gt;</code> como título. Padrão para organizar conteúdo em blocos temáticos.",
          "code": "<section id=\"section-name\" class=\"section\">\n  <div class=\"container\">\n    <h2>Título da Seção</h2>\n    \n  </div>\n</section>",
          "codeHtml": "&lt;section id=\"<mark class=\"ts\">section-name</mark>\" class=\"<mark class=\"ts\">section</mark>\"&gt;\n  &lt;div class=\"container\"&gt;\n    &lt;h2&gt;<mark class=\"ts\">Título da Seção</mark>&lt;/h2&gt;\n    \n  &lt;/div&gt;\n&lt;/section&gt;",
          "lines": 6
        },
        {
          "name": "Navbar",
          "prefix": "navbar",
          "description": "Barra de navegação HTML",
          "explanation": "Navbar completa com <code>&lt;nav&gt;</code> semântico, logo como link, e lista de links de navegação com âncoras internas. Estruturada com <code>div.container</code> para alinhamento. Pronta para estilizar com Flexbox.",
          "code": "<nav class=\"navbar\">\n  <div class=\"container\">\n    <a href=\"/\" class=\"logo\">Logo</a>\n    <ul class=\"nav-links\">\n      <li><a href=\"#home\">Home</a></li>\n      <li><a href=\"#about\">Sobre</a></li>\n      <li><a href=\"#contact\">Contato</a></li>\n    </ul>\n  </div>\n</nav>",
          "codeHtml": "&lt;nav class=\"<mark class=\"ts\">navbar</mark>\"&gt;\n  &lt;div class=\"container\"&gt;\n    &lt;a href=\"/\" class=\"logo\"&gt;<mark class=\"ts\">Logo</mark>&lt;/a&gt;\n    &lt;ul class=\"nav-links\"&gt;\n      &lt;li&gt;&lt;a href=\"#<mark class=\"ts\">home</mark>\"&gt;<mark class=\"ts\">Home</mark>&lt;/a&gt;&lt;/li&gt;\n      &lt;li&gt;&lt;a href=\"#<mark class=\"ts\">about</mark>\"&gt;<mark class=\"ts\">Sobre</mark>&lt;/a&gt;&lt;/li&gt;\n      &lt;li&gt;&lt;a href=\"#<mark class=\"ts\">contact</mark>\"&gt;<mark class=\"ts\">Contato</mark>&lt;/a&gt;&lt;/li&gt;\n    &lt;/ul&gt;\n  &lt;/div&gt;\n&lt;/nav&gt;",
          "lines": 10
        },
        {
          "name": "Card",
          "prefix": "card",
          "description": "Card HTML com imagem e botão",
          "explanation": "Componente card com imagem (<code>&lt;img&gt;</code> com <code>alt</code>), corpo com título <code>&lt;h3&gt;</code>, parágrafo de descrição e botão/link de ação. Estrutura reutilizável para produtos, posts, portfólio, equipe, etc.",
          "code": "<div class=\"card\">\n  <img src=\"image.jpg\" alt=\"descrição\">\n  <div class=\"card-body\">\n    <h3>Título</h3>\n    <p>Descrição do card</p>\n    <a href=\"#\" class=\"btn\">Saiba mais</a>\n  </div>\n</div>",
          "codeHtml": "&lt;div class=\"card\"&gt;\n  &lt;img src=\"<mark class=\"ts\">image.jpg</mark>\" alt=\"<mark class=\"ts\">descrição</mark>\"&gt;\n  &lt;div class=\"card-body\"&gt;\n    &lt;h3&gt;<mark class=\"ts\">Título</mark>&lt;/h3&gt;\n    &lt;p&gt;<mark class=\"ts\">Descrição do card</mark>&lt;/p&gt;\n    &lt;a href=\"<mark class=\"ts\">#</mark>\" class=\"btn\"&gt;<mark class=\"ts\">Saiba mais</mark>&lt;/a&gt;\n  &lt;/div&gt;\n&lt;/div&gt;",
          "lines": 8
        },
        {
          "name": "Form",
          "prefix": "form",
          "description": "Formulário com campos e validação",
          "explanation": "Formulário com <code>action</code>, <code>method</code> e <code>id</code>. Inclui campos de nome e e-mail com <code>&lt;label&gt;</code> associados via <code>for/id</code> (acessível!), atributo <code>required</code> para validação nativa, e botão submit.",
          "code": "<form action=\"#\" method=\"POST\" id=\"form\">\n  <div class=\"form-group\">\n    <label for=\"name\">Nome</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">E-mail</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n  </div>\n  <button type=\"submit\" class=\"btn\">Enviar</button>\n</form>",
          "codeHtml": "&lt;form action=\"<mark class=\"ts\">#</mark>\" method=\"<mark class=\"ts\">POST</mark>\" id=\"<mark class=\"ts\">form</mark>\"&gt;\n  &lt;div class=\"form-group\"&gt;\n    &lt;label for=\"<mark class=\"ts\">name</mark>\"&gt;<mark class=\"ts\">Nome</mark>&lt;/label&gt;\n    &lt;input type=\"text\" id=\"<mark class=\"ts\">name</mark>\" name=\"<mark class=\"ts\">name</mark>\" required&gt;\n  &lt;/div&gt;\n  &lt;div class=\"form-group\"&gt;\n    &lt;label for=\"<mark class=\"ts\">email</mark>\"&gt;<mark class=\"ts\">E-mail</mark>&lt;/label&gt;\n    &lt;input type=\"email\" id=\"<mark class=\"ts\">email</mark>\" name=\"<mark class=\"ts\">email</mark>\" required&gt;\n  &lt;/div&gt;\n  &lt;button type=\"submit\" class=\"btn\"&gt;<mark class=\"ts\">Enviar</mark>&lt;/button&gt;\n&lt;/form&gt;",
          "lines": 11
        },
        {
          "name": "Footer",
          "prefix": "footer",
          "description": "Footer com copyright dinâmico",
          "explanation": "Footer semântico com <code>&lt;footer&gt;</code>, container interno e parágrafo de copyright. Usa a variável <code>&#36;{CURRENT_YEAR}</code> do editor para inserir o ano automaticamente. Adicione links de redes sociais conforme necessário.",
          "code": "<footer class=\"footer\">\n  <div class=\"container\">\n    <p>&copy; ${CURRENT_YEAR} Nome. Todos os direitos reservados.</p>\n  </div>\n</footer>",
          "codeHtml": "&lt;footer class=\"<mark class=\"ts\">footer</mark>\"&gt;\n  &lt;div class=\"container\"&gt;\n    &lt;p&gt;&amp;copy; <mark class=\"ts\">${CURRENT_YEAR}</mark> <mark class=\"ts\">Nome</mark>. Todos os direitos reservados.&lt;/p&gt;\n  &lt;/div&gt;\n&lt;/footer&gt;",
          "lines": 5
        },
        {
          "name": "CSS Variables (inline)",
          "prefix": "cssvars",
          "description": "Design tokens dentro de arquivo HTML",
          "explanation": "Versão dos design tokens CSS para uso inline em arquivos HTML (dentro de <code>&lt;style&gt;</code>). Inclui cores, tipografia, espaçamento, bordas e sombras como variáveis CSS. Versão simplificada sem fluid typography.",
          "code": ":root {\n  /* Cores */\n  --color-primary: #6C63FF;\n  --color-secondary: #FF6584;\n  --color-bg: #0f0f23;\n  --color-surface: #1a1a2e;\n  --color-text: #e0e0e0;\n  --color-text-muted: #a0a0b0;\n\n  /* Tipografia */\n  --font-main: 'Inter', sans-serif;\n  --font-heading: 'Outfit', sans-serif;\n\n  /* Espaçamento */\n  --space-xs: 0.25rem;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --space-xl: 4rem;\n\n  /* Bordas */\n  --radius-sm: 4px;\n  --radius-md: 8px;\n  --radius-lg: 16px;\n  --radius-full: 999px;\n\n  /* Sombras */\n  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);\n  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);\n  --shadow-lg: 0 8px 30px rgba(0,0,0,0.2);\n}",
          "codeHtml": ":root {\n  /* Cores */\n  --color-primary: <mark class=\"ts\">#6C63FF</mark>;\n  --color-secondary: <mark class=\"ts\">#FF6584</mark>;\n  --color-bg: <mark class=\"ts\">#0f0f23</mark>;\n  --color-surface: <mark class=\"ts\">#1a1a2e</mark>;\n  --color-text: <mark class=\"ts\">#e0e0e0</mark>;\n  --color-text-muted: <mark class=\"ts\">#a0a0b0</mark>;\n\n  /* Tipografia */\n  --font-main: 'Inter', sans-serif;\n  --font-heading: 'Outfit', sans-serif;\n\n  /* Espaçamento */\n  --space-xs: 0.25rem;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --space-xl: 4rem;\n\n  /* Bordas */\n  --radius-sm: 4px;\n  --radius-md: 8px;\n  --radius-lg: 16px;\n  --radius-full: 999px;\n\n  /* Sombras */\n  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);\n  --shadow-md: 0 4px 12px rgba(0,0,0,0.15);\n  --shadow-lg: 0 8px 30px rgba(0,0,0,0.2);\n}",
          "lines": 31
        },
        {
          "name": "CSS Reset (inline)",
          "prefix": "cssreset",
          "description": "CSS Reset para uso inline no HTML",
          "explanation": "Versão do reset CSS para uso dentro de <code>&lt;style&gt;</code> no HTML. Mesmo reset moderno: box-sizing, remoção de margens/paddings, scroll suave, fonte base e resets de imagens, links e listas.",
          "code": "*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: var(--font-main, 'Inter', sans-serif);\n  line-height: 1.6;\n  color: var(--color-text, #e0e0e0);\n  background: var(--color-bg, #0f0f23);\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  max-width: 100%;\n  display: block;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul, ol {\n  list-style: none;\n}",
          "codeHtml": "*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: var(--font-main, 'Inter', sans-serif);\n  line-height: 1.6;\n  color: var(--color-text, #e0e0e0);\n  background: var(--color-bg, #0f0f23);\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  max-width: 100%;\n  display: block;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul, ol {\n  list-style: none;\n}",
          "lines": 32
        },
        {
          "name": "Flexbox Center (inline)",
          "prefix": "flexcenter",
          "description": "Centralizar com Flexbox (inline)",
          "explanation": "Versão inline do snippet de centralização Flexbox. As 3 propriedades para centralizar horizontal e verticalmente, prontas para colar dentro de uma tag <code>&lt;style&gt;</code> no HTML.",
          "code": "display: flex;\njustify-content: center;\nalign-items: center;",
          "codeHtml": "display: flex;\njustify-content: center;\nalign-items: center;",
          "lines": 3
        },
        {
          "name": "Grid Layout (inline)",
          "prefix": "grid",
          "description": "Grid responsivo auto-fit (inline)",
          "explanation": "Grid responsivo com <code>auto-fit</code> para uso inline. Gera colunas que se auto-adaptam com <code>minmax(280px, 1fr)</code>. Versão simplificada sem o <code>min(100%, x)</code> da versão CSS.",
          "code": "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 1.5rem;",
          "codeHtml": "display: grid;\ngrid-template-columns: repeat(<mark class=\"ts\">auto-fit</mark>, minmax(<mark class=\"ts\">280px</mark>, 1fr));\ngap: <mark class=\"ts\">1.5rem</mark>;",
          "lines": 3
        },
        {
          "name": "Media Query (inline)",
          "prefix": "mq",
          "description": "Media query responsiva (inline)",
          "explanation": "Template de media query com breakpoint 768px para uso inline em arquivos HTML. Mesmo comportamento da versão CSS.",
          "code": "@media (max-width: 768px) {\n  \n}",
          "codeHtml": "@media (max-width: <mark class=\"ts\">768px</mark>) {\n  \n}",
          "lines": 3
        },
        {
          "name": "Glassmorphism (inline)",
          "prefix": "glass",
          "description": "Efeito glassmorphism (inline)",
          "explanation": "Efeito de vidro fosco para uso inline em HTML. Fundo semi-transparente, backdrop-filter blur, borda sutil e border-radius. Inclui prefixo -webkit- para compatibilidade.",
          "code": "background: rgba(255, 255, 255, 0.05);\nbackdrop-filter: blur(12px);\n-webkit-backdrop-filter: blur(12px);\nborder: 1px solid rgba(255, 255, 255, 0.1);\nborder-radius: var(--radius-lg, 16px);",
          "codeHtml": "background: rgba(<mark class=\"ts\">255, 255, 255</mark>, <mark class=\"ts\">0.05</mark>);\nbackdrop-filter: blur(<mark class=\"ts\">12px</mark>);\n-webkit-backdrop-filter: blur(<mark class=\"ts\">12px</mark>);\nborder: 1px solid rgba(255, 255, 255, 0.1);\nborder-radius: var(--radius-lg, 16px);",
          "lines": 5
        }
      ]
    },
    {
      "id": "js",
      "label": "JavaScript",
      "file": "snippets/javascript.json",
      "items": [
        {
          "name": "Console Log",
          "prefix": "cl",
          "description": "console.log()",
          "explanation": "Atalho rápido para <code>console.log()</code>. Insere uma chamada pronta com cursor posicionado dentro dos parênteses. Ideal para debugging rápido.",
          "code": "console.log('');",
          "codeHtml": "console.log(<mark class=\"ts\">''</mark>);",
          "lines": 1
        },
        {
          "name": "Console Log Variable",
          "prefix": "clv",
          "description": "console.log com nome da variável",
          "explanation": "Console.log que mostra o <strong>nome</strong> da variável junto com seu valor: <code>console.log('var:', var)</code>. Facilita identificar qual variável está sendo logada quando há múltiplos logs.",
          "code": "console.log('var:', var);",
          "codeHtml": "console.log('<mark class=\"ts\">var</mark>:', <mark class=\"ts\">var</mark>);",
          "lines": 1
        },
        {
          "name": "Arrow Function",
          "prefix": "af",
          "description": "Arrow function",
          "explanation": "Cria uma arrow function com <code>const</code>, parâmetros e corpo com chaves. Cursor posicionado para digitar o nome primeiro, depois parâmetros. Padrão moderno para funções em JavaScript.",
          "code": "const name = (params) => {\n  \n};",
          "codeHtml": "const <mark class=\"ts\">name</mark> = (<mark class=\"ts\">params</mark>) =&gt; {\n  \n};",
          "lines": 3
        },
        {
          "name": "Arrow Function Short",
          "prefix": "afs",
          "description": "Arrow function em uma linha",
          "explanation": "Arrow function em uma única linha com retorno implícito (sem chaves). Ideal para callbacks simples, <code>.map()</code>, <code>.filter()</code>, etc. Ex: <code>const double = (n) =&gt; n * 2;</code>",
          "code": "const name = (params) => ;",
          "codeHtml": "const <mark class=\"ts\">name</mark> = (<mark class=\"ts\">params</mark>) =&gt; ;",
          "lines": 1
        },
        {
          "name": "Async Function",
          "prefix": "asyncf",
          "description": "Async arrow function com try/catch",
          "explanation": "Arrow function <code>async</code> completa com bloco <code>try/catch</code> incluído. O catch já tem <code>console.error(error)</code>. Pronta para fazer chamadas <code>await</code> com tratamento de erros adequado.",
          "code": "const name = async (params) => {\n  try {\n    \n  } catch (error) {\n    console.error(error);\n  }\n};",
          "codeHtml": "const <mark class=\"ts\">name</mark> = async (<mark class=\"ts\">params</mark>) =&gt; {\n  try {\n    \n  } catch (error) {\n    console.error(error);\n  }\n};",
          "lines": 7
        },
        {
          "name": "Fetch API",
          "prefix": "fetch",
          "description": "Fetch API com headers e body",
          "explanation": "Template completo de <code>fetch()</code> com URL, method (escolha GET/POST/PUT/DELETE), headers Content-Type JSON, body com <code>JSON.stringify()</code>, e parsing da resposta com <code>.json()</code>. Tudo com <code>await</code>.",
          "code": "const response = await fetch('url', {\n  method: 'GET',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify(data),\n});\nconst data = await response.json();",
          "codeHtml": "const response = await fetch('<mark class=\"ts\">url</mark>', {\n  method: '<mark class=\"ts\" title=\"Opções: GET, POST, PUT, DELETE\">GET</mark>',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  <mark class=\"ts\">body: JSON.stringify(data),</mark>\n});\nconst data = await response.json();",
          "lines": 8
        },
        {
          "name": "Import Module",
          "prefix": "imp",
          "description": "Import ES Module",
          "explanation": "Import padrão de módulo ES: <code>import name from 'module'</code>. Usado para importar o export default de um módulo. Tab stops: primeiro o módulo, depois o nome.",
          "code": "import name from 'module';",
          "codeHtml": "import <mark class=\"ts\">name</mark> from '<mark class=\"ts\">module</mark>';",
          "lines": 1
        },
        {
          "name": "Import Destructured",
          "prefix": "impd",
          "description": "Import com destructuring",
          "explanation": "Import com destructuring: <code>import { name } from 'module'</code>. Usado para importar exports nomeados específicos. Mais comum quando um módulo exporta múltiplas funções/constantes.",
          "code": "import { name } from 'module';",
          "codeHtml": "import { <mark class=\"ts\">name</mark> } from '<mark class=\"ts\">module</mark>';",
          "lines": 1
        },
        {
          "name": "Query Selector",
          "prefix": "qs",
          "description": "querySelector",
          "explanation": "Atalho para <code>document.querySelector()</code> que retorna o <strong>primeiro</strong> elemento que corresponde ao seletor CSS. Atribui a uma constante com nome descritivo. Aceita qualquer seletor CSS válido.",
          "code": "const el = document.querySelector('selector');",
          "codeHtml": "const <mark class=\"ts\">el</mark> = document.querySelector('<mark class=\"ts\">selector</mark>');",
          "lines": 1
        },
        {
          "name": "Query Selector All",
          "prefix": "qsa",
          "description": "querySelectorAll",
          "explanation": "Atalho para <code>document.querySelectorAll()</code> que retorna <strong>todos</strong> os elementos correspondentes como NodeList. Use <code>.forEach()</code>, <code>for...of</code> ou spread para iterar.",
          "code": "const els = document.querySelectorAll('selector');",
          "codeHtml": "const <mark class=\"ts\">els</mark> = document.querySelectorAll('<mark class=\"ts\">selector</mark>');",
          "lines": 1
        },
        {
          "name": "Event Listener",
          "prefix": "ael",
          "description": "addEventListener",
          "explanation": "Template de <code>addEventListener()</code> com lista de eventos para escolher (click, submit, input, change, keydown, scroll, load, etc.) e callback arrow function com o evento <code>e</code> como parâmetro.",
          "code": "element.addEventListener('click', (e) => {\n  \n});",
          "codeHtml": "<mark class=\"ts\">element</mark>.addEventListener('<mark class=\"ts\" title=\"Opções: click, submit, input, change, keydown, keyup, scroll, load, DOMContentLoaded\">click</mark>', (<mark class=\"ts\">e</mark>) =&gt; {\n  \n});",
          "lines": 3
        },
        {
          "name": "DOM Content Loaded",
          "prefix": "dcl",
          "description": "DOMContentLoaded event",
          "explanation": "Envolve seu código no evento <code>DOMContentLoaded</code> para garantir que o DOM esteja pronto antes de manipulá-lo. Essencial quando o <code>&lt;script&gt;</code> está no <code>&lt;head&gt;</code> sem atributo <code>defer</code>.",
          "code": "document.addEventListener('DOMContentLoaded', () => {\n  \n});",
          "codeHtml": "document.addEventListener('DOMContentLoaded', () =&gt; {\n  \n});",
          "lines": 3
        },
        {
          "name": "For Of Loop",
          "prefix": "forof",
          "description": "For...of loop",
          "explanation": "Loop <code>for...of</code> para iterar sobre arrays, NodeLists, Maps, Sets e qualquer iterável. Mais legível que <code>for</code> clássico e <code>.forEach()</code>. Suporta <code>break</code> e <code>continue</code>.",
          "code": "for (const item of array) {\n  \n}",
          "codeHtml": "for (const <mark class=\"ts\">item</mark> of <mark class=\"ts\">array</mark>) {\n  \n}",
          "lines": 3
        },
        {
          "name": "Array Map",
          "prefix": "map",
          "description": "Array.map()",
          "explanation": "Atalho para <code>.map()</code> que cria um <strong>novo array</strong> transformando cada item. Não modifica o array original. Ideal para converter dados: ex. lista de objetos → lista de nomes.",
          "code": "array.map((item) => );",
          "codeHtml": "<mark class=\"ts\">array</mark>.map((<mark class=\"ts\">item</mark>) =&gt; );",
          "lines": 1
        },
        {
          "name": "Array Filter",
          "prefix": "filter",
          "description": "Array.filter()",
          "explanation": "Atalho para <code>.filter()</code> que cria um <strong>novo array</strong> contendo apenas os itens que passam na condição. Não modifica o original. Ex: filtrar produtos por preço, remover itens nulos.",
          "code": "array.filter((item) => );",
          "codeHtml": "<mark class=\"ts\">array</mark>.filter((<mark class=\"ts\">item</mark>) =&gt; );",
          "lines": 1
        },
        {
          "name": "Destructure Object",
          "prefix": "dest",
          "description": "Object destructuring",
          "explanation": "Extrai propriedades de um objeto em variáveis separadas: <code>const { prop } = object</code>. Evita repetir <code>object.prop</code> múltiplas vezes. Pode extrair várias propriedades de uma vez.",
          "code": "const { prop } = object;",
          "codeHtml": "const { <mark class=\"ts\">prop</mark> } = <mark class=\"ts\">object</mark>;",
          "lines": 1
        },
        {
          "name": "Template Literal",
          "prefix": "tl",
          "description": "Template literal",
          "explanation": "Template literal com backticks e interpolação <code>&#36;{variable}</code>. Permite strings multi-linha e inserção de expressões JavaScript diretamente. Substitui concatenação com <code>+</code>.",
          "code": "`text ${variable}`",
          "codeHtml": "`<mark class=\"ts\">text</mark> ${<mark class=\"ts\">variable</mark>}`",
          "lines": 1
        }
      ]
    }
  ]
};
