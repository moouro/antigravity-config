---
name: anti-ai-writing
description: Escreve, reescreve e audita textos técnicos, docs, artigos, copy e PRs removendo sinais de escrita gerada por IA com base no guia Wikipedia:Signs of AI writing (WP:AISIGNS).
---

# Anti-AI Writing (`WP:AISIGNS`)

Skill de duplo modo baseada no catálogo de campo **Wikipedia:Signs of AI writing** (*WikiProject AI Cleanup*). Use para escrever ou reescrever com voz humana direta, ou para auditar textos existentes em português e inglês.

**Princípio central:** nenhum padrão isolado prova autoria de IA. O problema aparece no **acúmulo** de tiques lexicais, estruturais e de formatação. Sempre preserve fatos verificáveis e a voz real do autor.

---

## Modos de operação

### Modo 1 — Escrever ou Reescrever
1. Corte inflação de importância, preâmbulos de chatbot, disclaimers defensivos e conclusões em formato de roteiro.
2. Troque verbos pomposos por verbos simples (`é`, `tem`, `fez`, `usou` / `is`, `has`, `wrote`, `used`).
3. Quebre trios artificiais (*regra de três*), paralelismos negativos (`não apenas X, mas também Y`) e gerúndios genéricos no fim da frase.
4. Substitua atribuições vagas (`especialistas dizem`) por fatos concretos ou corte a afirmação.
5. Varie o ritmo das frases sem cair no extremo de frases telegráficas idênticas de 8–20 palavras.

### Modo 2 — Auditar texto existente
Ao receber um texto para auditoria, devolva:
1. **Trechos sinalizados:** cite o trecho exato, a categoria do padrão encontrado e por que soa artificial.
2. **Verificação de falsos positivos:** descarte alertas se houver apenas 1 traço isolado ou se cair na seção de indicadores ineficazes.
3. **Versão reescrita:** aplique as correções mantendo o sentido original, sem inventar fatos novos.

---

## 1. Padrões de conteúdo (`WP:AIWTW`)

- **Inflação de importância, legado e tendências:** transformar fatos comuns em marcos históricos ou culturais.
  - *Evitar (PT/EN):* `serve como`, `é um testemunho de`, `papel crucial/pivotal/vital`, `ressalta a importância`, `reflete tendências mais amplas`, `marca uma virada`, `cenário em evolução`, `marca indelével`, `profundamente enraizado` · `stands/serves as`, `testament/reminder`, `pivotal/crucial/vital role`, `underscores/highlights its importance`, `evolving landscape`, `indelible mark`, `deeply rooted`, `forms part of the wider`.
- **Alegar que o tema "moldou discussões":** enquadrar assuntos como catalisadores de debates amplos (quase sempre em trio).
  - *Evitar:* `moldou conversas/debates sobre X, Y e Z` · `shaped conversations/discussions/debate about`.
- **Ênfase artificial em notoriedade, cobertura e cadastros:** listar veículos de mídia por categoria ou frisar que registros oficiais "identificam" o sujeito.
  - *Evitar:* `cobertura independente`, `veículos locais/nacionais`, `publicações especializadas`, `registros identificam X como`, `mantém forte presença digital` · `independent coverage`, `media outlets`, `trade publications`, `databases/records identify ... as`, `maintains a strong digital presence`.
- **Análises superficiais com gerúndio (`-ing`) no final da frase:** anexar sínteses vazias sobre impacto ou significado.
  - *Evitar:* `...destacando`, `...garantindo`, `...refletindo`, `...contribuindo para`, `...fomentando`, `...aprimorando`, `insights valiosos` · `highlighting`, `underscoring`, `ensuring`, `reflecting`, `fostering`, `enhancing`, `valuable insights`, `align/resonate with`.
- **Conexões vagas:** dizer que algo está "associado" em vez de nomear o papel real (`foi CEO`, `escreveu`, `manteve`).
  - *Evitar:* `associado a`, `em conexão com`, `conectado a` · `associated with`, `in connection with`, `connected to`.
- **Atribuições vagas (*weasel words*):** invocar autoridades genéricas sem fonte ou exagerar a quantidade de fontes.
  - *Evitar:* `relatórios do setor`, `observadores citam`, `especialistas afirmam`, `alguns críticos argumentam`, `várias fontes`, `tais como` antes de listas exaustivas · `industry reports`, `observers have cited`, `experts argue`, `some critics argue`.
- **Conclusões em formato de roteiro ("Desafios e Futuro"):** fechar seções ou artigos com contraste formulaico e otimismo genérico.
  - *Evitar:* `Apesar de seus..., enfrenta diversos desafios...`, `Desafios e Legado`, `Perspectivas Futuras` · `Despite these challenges`, `Challenges and Legacy`, `Future Outlook`, seções `"X and Y"` como `Awards and recognition`.

---

## 2. Linguagem, vocabulário e gramática

- **Alta densidade de "vocabulário de IA"** (especialmente quando várias palavras aparecem juntas):
  - *Geral / 2023–2025:* `além disso` (no início da frase), `alinhar-se com`, `ostenta`, `impulsionado`, `crucial`, `mergulho profundo`, `aprofundar-se`, `enfatizando`, `duradouro`, `aprimorar`, `fomentar`, `destacar`, `interação complexa`, `intrincado`, `cenário`/`panorama`, `meticulosamente`, `pivotal`, `robusto`, `exibir`, `tapeçaria`, `testemunho`, `ressaltar`, `valioso`, `vibrante` · `Additionally`, `align with`, `boasts`, `bolstered`, `crucial`, `deep dive`, `delve`, `emphasizing`, `enduring`, `enhance`, `fostering`, `garner`, `highlight`, `interplay`, `intricate`, `landscape`, `meticulous/ly`, `pivotal`, `robust`, `showcase`, `tapestry`, `testament`, `underscore`, `valuable`, `vibrant`.
  - *Modelos 2026+:* excesso de `challenge`, `clearer`, `dependable`, `echoed`, `foster`, `leverage`, `matters`, `multifaceted`, `practical`, `prioritize`, `quietly`, `steady`, `universally` (e equivalentes como `alavancar`, `multifacetado`, `silenciosamente`, `priorizar`), somado a cadência monótona de frases muito curtas (8–20 palavras) só com ponto e vírgula.
  - *Grok:* `causal`, `empirical`, `correlate`, `underscore`.
- **Fuga de cópulas simples (`é` / `tem`):** substituir `é`/`tem` por verbos promocionais ou definições artificiais.
  - *Evitar:* `serve como`, `atua como`, `representa um`, `ostenta um`, `refere-se a` (para entidades concretas), `detém a distinção de` · `serves/stands/functions/operates as`, `boasts/features/maintains/offers`, `refers to`, `holds the distinction of being`.
- **Paralelismos negativos (`WP:AIPARALLEL`):** dramatizar usando contrastes simétricos.
  - *Evitar:* `Não apenas X, mas também Y` · `Não é X, é Y` (`sem X, sem Y, apenas Z`) · `Y em vez de X` usado repetidamente · `Not just X, but also Y`, `It's not X, it's Y`, `Y rather than X`.
- **Regra de três (`WP:RO3`):** agrupar quase todo exemplo, adjetivo ou cláusula em trios (`X, Y e Z`). Use 1, 2 ou 4 itens quando for o número real.

---

## 3. Estilo e formatação

- **Title Case em títulos de seção:** use sentence case (`Como configurar o ambiente`, não `Como Configurar o Ambiente`).
- **Excesso de negrito:** destaque no máximo termos-chave reais; não negrite frases inteiras ou metade de cada parágrafo.
- **Listas verticais com cabeçalho em negrito inline:** evite empilhar tudo como `- **Rótulo**: explicação` quando prosa corrida ou lista simples comunica melhor.
- **Níveis de heading quebrados:** não repita H1 (`#`) no corpo do documento.
- **Emojis decorativos em títulos e listas:** corte `✨`, `🚀`, `🖊️`, `🔥`, `💡` no início de headings ou itens.
- **Aspas inconsistentes:** respeite o padrão do repositório (aspas retas `""` / `''` em código, docs técnicas e Markdown limpo).

---

## 4. Comunicação vazada, hedging e placeholders

- **Falas de chatbot coladas no documento:** remova preâmbulos, despedidas e instruções ao autor.
  - *Evitar:* `Claro!`, `Com certeza!`, `Espero que isso ajude`, `Aqui está um...`, `Gostaria que eu...`, `Fique à vontade para...`, comentários `<!-- expandir depois -->` · `Certainly!`, `Of course!`, `You're absolutely right!`, `I hope this helps`, `Here is a...`, `Would you like...`.
- **Disclaimers defensivos (*hedging*):** evite narrar a falta de informação ou ditar como o leitor deve interpretar fontes.
  - *Evitar:* `Embora os detalhes sejam limitados...`, `com base nas informações disponíveis`, `não está amplamente documentado`, `mantém perfil discreto`, `deve ser tratado como... em vez de...`, `por si só não estabelece...`, `é importante notar` · `While specific details are limited`, `based on available information`, `maintains a low profile`, `does not by itself establish`, `important to note`.
- **Placeholders esquecidos:** verifique sempre se não sobrou `[Nome]`, `[Ano]`, `(Se disponível)`, `2026-XX-XX`, `INSERT_URL_HERE` ou `https://example.com/...`.

---

## 5. Markup, citações, PRs e comentários técnicos

- **Artefatos de markup e tokens internos:** remova sintaxe Markdown vazada em texto puro/HTML/wiki (`**`, `---`, ```` ``` ````) e tokens de plataforma (`contentReference[oaicite:...]`, setas `↩`).
- **Links, referências e parâmetros de rastreio:**
  - Nunca invente URLs, DOIs, ISBNs ou números de página.
  - Remova parâmetros de rastreamento de chatbots (`?utm_source=chatgpt.com`, `?utm_source=openai`, `?utm_source=copilot.com`, `referrer=grok.com`).
  - Não deixe referências declaradas sem uso no corpo do texto.
- **Commits, PRs e comentários de revisão (equivalente a `WP:AISUMMARY` / `WP:AICOMMENT`):**
  - *Evitar tom de "atendimento ao cliente":* `Peço desculpas por qualquer inconveniente`, `Revisei cuidadosamente`, `Se houver pontos específicos, por favor aponte`.
  - *Evitar resumos procedurais vazios:* `Refinado e aprimorado em conformidade com as boas práticas, preservando a clareza e o fluxo` · `ensured adherence to`, `refined`, `enhanced`, `streamlined`, `while preserving`, `avoided`.
  - *Preferir:* dizer diretamente **o que mudou e por quê** (`fix: corrige overflow no bloco de código em 375px`).

---

## 6. Indicadores históricos (modelos 2022–2026)

Ainda comuns em textos antigos ou prompts mal direcionados:
- **Tom de folheto turístico / press release:** `aninhado em`, `no coração de`, `inovador`, `renomado`, `ampla gama`, `compromisso com` · `nestled`, `in the heart of`, `groundbreaking`, `renowned`, `diverse array`, `commitment to`.
- **Avisos de corte de treinamento e recusas:** `até minha última atualização`, `como um modelo de linguagem de IA` · `as of my last knowledge update`, `as an AI language model`.
- **Resumo mecânico no final:** `Em resumo`, `Em conclusão`, `No geral` · `In summary`, `In conclusion`, `Overall`.
- **Travessão (`—`) em excesso ou ausente demais:** evitar usar ` — ` em toda frase no lugar de vírgula, parênteses ou dois-pontos — mas também não eliminar toda pontuação variada.
- **Variação elegante forçada (*elegant variation*):** não troque o nome de um conceito por sinônimos artificiais a cada frase só para evitar repetição.
- **Cortes abruptos** no meio da frase ou datas de acesso inconsistentes.

---

## 7. Sinais de escrita humana (o que buscar)

- Verbos comuns e diretos: `escreveu`, `mudou`, `usou`, `tentou`, `morreu` (`wrote`, `moved`, `used`, `tried`, `died`) em vez de equivalentes empolados (`redigiu`, `realocou`, `utilizou`, `empreendeu`).
- Construções naturais: `há um`, `tem um`, `um dos melhores`, `foi o primeiro`, qualificadores simples (`muito`, `talvez`, `tende a`).
- Especificidade concreta (números reais, nomes exatos, restrições reais) em vez de adjetivos abstratos.

---

## 8. Falsos positivos (NÃO usar como prova de IA)

Ao auditar textos de terceiros, **não** marque como IA apenas por:
1. Gramática impecável.
2. Mistura de tom técnico/formal e casual.
3. Prosa seca ou direta (IA tende a ser prolixa e positiva, não seca).
4. Vocabulário formal em geral (o sinal é a repetição do léxico específico da seção 2).
5. Uma palavra de transição isolada (`Além disso`, `Portanto`).
6. Ausência de fontes ou formatação limpa gerada por editores visuais.
