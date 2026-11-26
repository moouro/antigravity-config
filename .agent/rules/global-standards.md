---
description: Padrões globais de código limpo, CSS intrínseco e design autoral sem clichês de IA.
alwaysApply: true
---

# Diretrizes Globais de Desenvolvimento e UI

## Anti-Padrões Visuais ("Cara de IA" Proibido)

- NUNCA gere interfaces com fundos roxos/azuis neon genéricos, excesso de glassmorphism gratuito, sombras difusas pesadas ou cards idênticos em grid de 3 colunas sem hierarquia.
- Evite textos clichês de marketing ("Revolucione seu fluxo", "Potencializado por IA", emojis excessivos em títulos).
- Prefira estética editorial e funcional: alto contraste tipográfico, espaçamento generoso (whitespace), bordas sutis de `1px solid`, superfícies neutras bem definidas (ex.: `#121214` / `#18181B` no dark mode ou `#FAFAFA` / `#FFFFFF` no light mode) e no máximo 1 cor de destaque intencional.

## Arquitetura Front-End & CSS

- Priorize HTML5 semântico (`<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`) e acessibilidade WCAG (estados `:focus-visible`, `prefers-reduced-motion`, contraste mínimo AA, labels reais).
- Adote **Intrinsic Web Design**: prefira layouts fluidos com `clamp()`, CSS Grid (`repeat(auto-fit, minmax(min(100%, 280px), 1fr))`), Flexbox com `gap` fluido e Container Queries (`@container`) em vez de dezenas de media queries rígidas.
- Use CSS Variables (`--*`) organizadas em tokens semânticos (cores, escala tipográfica fluida, espaçamentos e raios de borda).
- Respeite o formatter configurado no projeto (Biome, Prettier ou padrão nativo do editor), mantendo aspas consistentes, zero imports não utilizados e código enxuto.
