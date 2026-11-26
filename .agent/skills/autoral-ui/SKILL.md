---
name: autoral-ui
description: Cria ou refatora interfaces web modernas com direção de arte autoral, tokens CSS fluidos, HTML semântico e zero estética genérica de IA.
---

# Processo de Criação de Interface Autoral

Quando esta skill for acionada, execute rigorosamente estas etapas antes de escrever componentes:

1. **Direção Estética Intencional**
   - Defina uma personalidade visual clara antes do código (ex.: Editorial Minimalista, Suíço/Tipográfico, Utilitário Técnico estilo Linear/Raycast, ou Brutalismo Limpo).
   - Escolha uma paleta restrita: 2 tons de superfície, 2 tons de texto (primário e secundário), 1 cor de borda sutil e 1 cor de acento.

2. **Fundações CSS (`tokens.css` e `reset.css`)**
   - Crie tokens usando `clamp()` para tipografia fluida (`--text-xs` até `--text-3xl`) e espaçamentos (`--space-xs` até `--space-2xl`).
   - Inclua `color-scheme: light dark`, `focus-visible` acessível e suporte a `prefers-reduced-motion`.

3. **Construção Semântica**
   - Escreva HTML limpo, sem `<div>` aninhadas desnecessárias ("div soup").
   - Use atributos ARIA apenas quando o HTML nativo não cobrir a semântica.

4. **Validação Visual (se Chrome DevTools estiver ativo)**
   - Após gerar a interface, verifique se há quebra de overflow horizontal em 360px e 1440px e ajuste os tokens fluidos se necessário.
