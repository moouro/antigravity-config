/* =============================================
   ANTIGRAVITY SNIPPETS — Script
   ============================================= */

// ---------- Snippet Data ----------
// Each snippet has: name, prefix, description (short), explanation (detailed), lang

const cssSnippets = [
	{
		name: "CSS Variables (Intrinsic)",
		prefix: "cssvars",
		description: "Design tokens com Fluid Typography e Spacing",
		explanation:
			"Cria um sistema de design completo com variáveis CSS na <code>:root</code>. Inclui cores (primary, secondary, bg, surface, text), tipografia fluida usando <code>clamp()</code> para escalar automaticamente entre telas, espaçamento fluido com a mesma técnica, fontes, bordas e sombras. Ideal como ponto de partida para qualquer projeto.",
	},
	{
		name: "CSS Reset",
		prefix: "cssreset",
		description: "CSS Reset moderno e completo",
		explanation:
			"Reset moderno que elimina inconsistências entre navegadores. Aplica <code>box-sizing: border-box</code> a tudo, remove margens/paddings padrão, configura <code>scroll-behavior: smooth</code>, define a fonte base com <code>var(--font-main)</code>, e reseta imagens, links e listas. Base essencial antes de qualquer estilização.",
	},
	{
		name: "Flexbox Center",
		prefix: "flexcenter",
		description: "Centralizar com Flexbox",
		explanation:
			"Centraliza um elemento horizontal e verticalmente com apenas 3 propriedades: <code>display: flex</code>, <code>justify-content: center</code> e <code>align-items: center</code>. Útil para centralizar ícones em botões, conteúdo em hero sections, modais, etc.",
	},
	{
		name: "Flex Column",
		prefix: "flexcol",
		description: "Flexbox em coluna com gap fluido",
		explanation:
			"Cria um layout em coluna com flex e adiciona espaçamento entre os itens usando <code>gap</code> com variável fluida. Perfeito para organizar formulários, sidebars, listas verticais de cards e qualquer layout em coluna.",
	},
	{
		name: "Grid Intrinsic",
		prefix: "grid",
		description: "Grid responsivo sem media queries",
		explanation:
			"Grid que se auto-adapta sem precisar de media queries! Usa <code>repeat(auto-fit, minmax(min(100%, 280px), 1fr))</code> — o truque do <code>min(100%, x)</code> evita overflow em telas menores que o mínimo. Os itens crescem e diminuem automaticamente conforme o espaço disponível.",
	},
	{
		name: "Container Intrinsic",
		prefix: "container",
		description: "Container que substitui max-width + padding",
		explanation:
			"Substitui o padrão antigo de <code>max-width</code> + <code>padding</code> + <code>margin: 0 auto</code> por uma única linha: <code>width: min(100% - 3rem, 1200px)</code>. O <code>min()</code> garante padding lateral automático e limita a largura máxima. Muito mais elegante.",
	},
	{
		name: "Media Query",
		prefix: "mq",
		description: "Media query responsiva (macro layout)",
		explanation:
			"Template rápido para media query com breakpoint em <code>768px</code>. Ideal para ajustes de macro layout — alternar entre colunas e linhas, esconder/mostrar elementos, ou mudar tamanhos de fonte em telas menores.",
	},
	{
		name: "Container Query",
		prefix: "cq",
		description: "Componentes responsivos ao seu container",
		explanation:
			"Container queries são o futuro do CSS responsivo! Enquanto media queries reagem ao <strong>viewport</strong>, container queries reagem ao <strong>container pai</strong>. Define <code>container-type: inline-size</code> no pai e usa <code>@container</code> no filho. Perfeito para componentes reutilizáveis em diferentes contextos.",
	},
	{
		name: "Fluid Text",
		prefix: "fluidtext",
		description: "Typography fluida com clamp()",
		explanation:
			"Uma propriedade <code>font-size</code> com <code>clamp(min, preferred, max)</code> que escala suavemente entre um tamanho mínimo e máximo. Sem saltos bruscos entre breakpoints. O valor preferido usa <code>vw</code> para ser relativo ao viewport. Substitui múltiplas media queries para tipografia.",
	},
	{
		name: "Aspect Ratio",
		prefix: "aspect",
		description: "Aspect ratio nativo",
		explanation:
			"Substitui o antigo hack do <code>padding-top</code> pela propriedade nativa <code>aspect-ratio</code>. Define a proporção (ex: 16/9 para widescreen) e <code>object-fit: cover</code> para imagens/vídeos não distorcerem. Suportado em todos os navegadores modernos.",
	},
	{
		name: "Glassmorphism",
		prefix: "glass",
		description: "Efeito glassmorphism (vidro fosco)",
		explanation:
			"Cria o efeito de vidro fosco moderno com <code>backdrop-filter: blur()</code>, fundo semi-transparente e borda sutil. Requer prefixo <code>-webkit-</code> para Safari. Muito usado em navbars, cards e modais para um visual premium.",
	},
	{
		name: "Transition",
		prefix: "trans",
		description: "Transição CSS suave",
		explanation:
			"Adiciona uma transição suave para qualquer mudança de propriedade CSS. O snipet usa <code>all 0.3s ease-in-out</code> como padrão, mas você pode customizar a propriedade, duração e curva de easing via os tab stops.",
	},
	{
		name: "Hover Scale",
		prefix: "hoverscale",
		description: "Efeito hover com scale",
		explanation:
			'Efeito de "crescer" ao passar o mouse. Combina <code>transition</code> no estado normal com <code>transform: scale(1.05)</code> no <code>:hover</code>. Usa a sintaxe de nesting CSS (<code>&amp;:hover</code>). Ótimo para cards, botões e links interativos.',
	},
	{
		name: "Screen Reader Only",
		prefix: "sr-only",
		description: "Oculta visualmente, mantém acessível",
		explanation:
			"Classe utilitária de acessibilidade que oculta um elemento visualmente mas mantém ele acessível para leitores de tela. Usa uma combinação de <code>position: absolute</code>, dimensões de 1px, e <code>overflow: hidden</code>. Essencial para labels, textos contextuais e instruções.",
		tag: "a11y",
	},
	{
		name: "Focus Visible",
		prefix: "focus-visible",
		description: "Indicador de foco para teclado",
		explanation:
			"Mostra um outline apenas quando o usuário navega por <strong>teclado</strong> (Tab), não ao clicar com mouse. O <code>:focus-visible</code> diferencia foco de teclado vs mouse. Usa outline com cor primary e <code>outline-offset</code> para não ficar grudado no elemento.",
		tag: "a11y",
	},
	{
		name: "Reduced Motion",
		prefix: "reduced-motion",
		description: "Desativa animações para quem prefere",
		explanation:
			"Respeita a preferência do sistema operacional para movimento reduzido (<code>prefers-reduced-motion: reduce</code>). Desativa todas as animações e transições para usuários com sensibilidade a movimento. Critério WCAG importante para acessibilidade.",
		tag: "a11y",
	},
	{
		name: "Skip to Content Link",
		prefix: "skip-link",
		description: "Link 'Pular para conteúdo' (Tab)",
		explanation:
			"Link que fica oculto e aparece quando o usuário pressiona Tab. Permite pular direto para o conteúdo principal sem passar por toda a navegação. Essencial para acessibilidade via teclado, exigido pelo WCAG. Posiciona acima da tela e desliza ao receber foco.",
		tag: "a11y",
	},
	{
		name: "Color Scheme",
		prefix: "color-scheme",
		description: "Tema claro/escuro automático",
		explanation:
			"Detecta a preferência de tema do sistema com <code>prefers-color-scheme</code> e altera as variáveis CSS automaticamente. Define cores diferentes para modo escuro e claro. O site muda de tema sem JavaScript, apenas com CSS.",
		tag: "a11y",
	},
	{
		name: "High Contrast",
		prefix: "high-contrast",
		description: "Modo alto contraste para baixa visão",
		explanation:
			"Suporte ao modo de alto contraste do sistema via <code>prefers-contrast: high</code>. Força cores de alto contraste (preto no branco) e bordas visíveis em todos os elementos. Importante para usuários com baixa visão. Critério WCAG.",
		tag: "a11y",
	},
	{
		name: "Touch Target",
		prefix: "touch-target",
		description: "Tamanho mínimo de toque 44x44px",
		explanation:
			"Define <code>min-width: 44px</code> e <code>min-height: 44px</code> conforme WCAG 2.5.8. Garante que botões e links tenham tamanho suficiente para serem tocados com o dedo em dispositivos mobile. Aplique em todos os elementos interativos.",
		tag: "a11y",
	},
];

const htmlSnippets = [
	{
		name: "HTML5 Boilerplate",
		prefix: "html5",
		description: "Estrutura HTML5 completa com meta tags SEO",
		explanation:
			'Template completo de um documento HTML5 com <code>DOCTYPE</code>, <code>lang="pt-BR"</code>, <code>charset UTF-8</code>, viewport para responsividade, <code>meta description</code> para SEO, link para CSS e script JS. Ponto de partida para qualquer página.',
	},
	{
		name: "Section",
		prefix: "section",
		description: "Seção HTML semântica com container",
		explanation:
			"Cria uma <code>&lt;section&gt;</code> semântica com <code>id</code> para navegação, classe customizável, e um <code>div.container</code> interno para limitar a largura. Inclui um <code>&lt;h2&gt;</code> como título. Padrão para organizar conteúdo em blocos temáticos.",
	},
	{
		name: "Navbar",
		prefix: "navbar",
		description: "Barra de navegação HTML",
		explanation:
			"Navbar completa com <code>&lt;nav&gt;</code> semântico, logo como link, e lista de links de navegação com âncoras internas. Estruturada com <code>div.container</code> para alinhamento. Pronta para estilizar com Flexbox.",
	},
	{
		name: "Card",
		prefix: "card",
		description: "Card HTML com imagem e botão",
		explanation:
			"Componente card com imagem (<code>&lt;img&gt;</code> com <code>alt</code>), corpo com título <code>&lt;h3&gt;</code>, parágrafo de descrição e botão/link de ação. Estrutura reutilizável para produtos, posts, portfólio, equipe, etc.",
	},
	{
		name: "Form",
		prefix: "form",
		description: "Formulário com campos e validação",
		explanation:
			"Formulário com <code>action</code>, <code>method</code> e <code>id</code>. Inclui campos de nome e e-mail com <code>&lt;label&gt;</code> associados via <code>for/id</code> (acessível!), atributo <code>required</code> para validação nativa, e botão submit.",
	},
	{
		name: "Footer",
		prefix: "footer",
		description: "Footer com copyright dinâmico",
		explanation:
			"Footer semântico com <code>&lt;footer&gt;</code>, container interno e parágrafo de copyright. Usa a variável <code>&#36;{CURRENT_YEAR}</code> do editor para inserir o ano automaticamente. Adicione links de redes sociais conforme necessário.",
	},
	{
		name: "CSS Variables (inline)",
		prefix: "cssvars",
		description: "Design tokens dentro de arquivo HTML",
		explanation:
			"Versão dos design tokens CSS para uso inline em arquivos HTML (dentro de <code>&lt;style&gt;</code>). Inclui cores, tipografia, espaçamento, bordas e sombras como variáveis CSS. Versão simplificada sem fluid typography.",
	},
	{
		name: "CSS Reset (inline)",
		prefix: "cssreset",
		description: "CSS Reset para uso inline no HTML",
		explanation:
			"Versão do reset CSS para uso dentro de <code>&lt;style&gt;</code> no HTML. Mesmo reset moderno: box-sizing, remoção de margens/paddings, scroll suave, fonte base e resets de imagens, links e listas.",
	},
	{
		name: "Flexbox Center (inline)",
		prefix: "flexcenter",
		description: "Centralizar com Flexbox (inline)",
		explanation:
			"Versão inline do snippet de centralização Flexbox. As 3 propriedades para centralizar horizontal e verticalmente, prontas para colar dentro de uma tag <code>&lt;style&gt;</code> no HTML.",
	},
	{
		name: "Grid Layout (inline)",
		prefix: "grid",
		description: "Grid responsivo auto-fit (inline)",
		explanation:
			"Grid responsivo com <code>auto-fit</code> para uso inline. Gera colunas que se auto-adaptam com <code>minmax(280px, 1fr)</code>. Versão simplificada sem o <code>min(100%, x)</code> da versão CSS.",
	},
	{
		name: "Media Query (inline)",
		prefix: "mq",
		description: "Media query responsiva (inline)",
		explanation:
			"Template de media query com breakpoint 768px para uso inline em arquivos HTML. Mesmo comportamento da versão CSS.",
	},
	{
		name: "Glassmorphism (inline)",
		prefix: "glass",
		description: "Efeito glassmorphism (inline)",
		explanation:
			"Efeito de vidro fosco para uso inline em HTML. Fundo semi-transparente, backdrop-filter blur, borda sutil e border-radius. Inclui prefixo -webkit- para compatibilidade.",
	},
];

const jsSnippets = [
	{
		name: "Console Log",
		prefix: "cl",
		description: "console.log()",
		explanation:
			"Atalho rápido para <code>console.log()</code>. Insere uma chamada pronta com cursor posicionado dentro dos parênteses. Ideal para debugging rápido.",
	},
	{
		name: "Console Log Variable",
		prefix: "clv",
		description: "console.log com nome da variável",
		explanation:
			"Console.log que mostra o <strong>nome</strong> da variável junto com seu valor: <code>console.log('var:', var)</code>. Facilita identificar qual variável está sendo logada quando há múltiplos logs.",
	},
	{
		name: "Arrow Function",
		prefix: "af",
		description: "Arrow function",
		explanation:
			"Cria uma arrow function com <code>const</code>, parâmetros e corpo com chaves. Cursor posicionado para digitar o nome primeiro, depois parâmetros. Padrão moderno para funções em JavaScript.",
	},
	{
		name: "Arrow Function Short",
		prefix: "afs",
		description: "Arrow function em uma linha",
		explanation:
			"Arrow function em uma única linha com retorno implícito (sem chaves). Ideal para callbacks simples, <code>.map()</code>, <code>.filter()</code>, etc. Ex: <code>const double = (n) =&gt; n * 2;</code>",
	},
	{
		name: "Async Function",
		prefix: "asyncf",
		description: "Async arrow function com try/catch",
		explanation:
			"Arrow function <code>async</code> completa com bloco <code>try/catch</code> incluído. O catch já tem <code>console.error(error)</code>. Pronta para fazer chamadas <code>await</code> com tratamento de erros adequado.",
	},
	{
		name: "Fetch API",
		prefix: "fetch",
		description: "Fetch API com headers e body",
		explanation:
			"Template completo de <code>fetch()</code> com URL, method (escolha GET/POST/PUT/DELETE), headers Content-Type JSON, body com <code>JSON.stringify()</code>, e parsing da resposta com <code>.json()</code>. Tudo com <code>await</code>.",
	},
	{
		name: "Import Module",
		prefix: "imp",
		description: "Import ES Module",
		explanation:
			"Import padrão de módulo ES: <code>import name from 'module'</code>. Usado para importar o export default de um módulo. Tab stops: primeiro o módulo, depois o nome.",
	},
	{
		name: "Import Destructured",
		prefix: "impd",
		description: "Import com destructuring",
		explanation:
			"Import com destructuring: <code>import { name } from 'module'</code>. Usado para importar exports nomeados específicos. Mais comum quando um módulo exporta múltiplas funções/constantes.",
	},
	{
		name: "Query Selector",
		prefix: "qs",
		description: "querySelector",
		explanation:
			"Atalho para <code>document.querySelector()</code> que retorna o <strong>primeiro</strong> elemento que corresponde ao seletor CSS. Atribui a uma constante com nome descritivo. Aceita qualquer seletor CSS válido.",
	},
	{
		name: "Query Selector All",
		prefix: "qsa",
		description: "querySelectorAll",
		explanation:
			"Atalho para <code>document.querySelectorAll()</code> que retorna <strong>todos</strong> os elementos correspondentes como NodeList. Use <code>.forEach()</code>, <code>for...of</code> ou spread para iterar.",
	},
	{
		name: "Event Listener",
		prefix: "ael",
		description: "addEventListener",
		explanation:
			"Template de <code>addEventListener()</code> com lista de eventos para escolher (click, submit, input, change, keydown, scroll, load, etc.) e callback arrow function com o evento <code>e</code> como parâmetro.",
	},
	{
		name: "DOM Content Loaded",
		prefix: "dcl",
		description: "DOMContentLoaded event",
		explanation:
			"Envolve seu código no evento <code>DOMContentLoaded</code> para garantir que o DOM esteja pronto antes de manipulá-lo. Essencial quando o <code>&lt;script&gt;</code> está no <code>&lt;head&gt;</code> sem atributo <code>defer</code>.",
	},
	{
		name: "For Of Loop",
		prefix: "forof",
		description: "For...of loop",
		explanation:
			"Loop <code>for...of</code> para iterar sobre arrays, NodeLists, Maps, Sets e qualquer iterável. Mais legível que <code>for</code> clássico e <code>.forEach()</code>. Suporta <code>break</code> e <code>continue</code>.",
	},
	{
		name: "Array Map",
		prefix: "map",
		description: "Array.map()",
		explanation:
			"Atalho para <code>.map()</code> que cria um <strong>novo array</strong> transformando cada item. Não modifica o array original. Ideal para converter dados: ex. lista de objetos → lista de nomes.",
	},
	{
		name: "Array Filter",
		prefix: "filter",
		description: "Array.filter()",
		explanation:
			"Atalho para <code>.filter()</code> que cria um <strong>novo array</strong> contendo apenas os itens que passam na condição. Não modifica o original. Ex: filtrar produtos por preço, remover itens nulos.",
	},
	{
		name: "Destructure Object",
		prefix: "dest",
		description: "Object destructuring",
		explanation:
			"Extrai propriedades de um objeto em variáveis separadas: <code>const { prop } = object</code>. Evita repetir <code>object.prop</code> múltiplas vezes. Pode extrair várias propriedades de uma vez.",
	},
	{
		name: "Template Literal",
		prefix: "tl",
		description: "Template literal",
		explanation:
			"Template literal com backticks e interpolação <code>&#36;{variable}</code>. Permite strings multi-linha e inserção de expressões JavaScript diretamente. Substitui concatenação com <code>+</code>.",
	},
];

// ---------- Card Rendering ----------

function createSnippetCard(snippet, category) {
	const card = document.createElement("div");
	card.className = "snippet-card";
	card.dataset.name = snippet.name.toLowerCase();
	card.dataset.prefix = snippet.prefix.toLowerCase();
	card.dataset.desc = snippet.description.toLowerCase();
	if (snippet.explanation) {
		card.dataset.explain = snippet.explanation
			.toLowerCase()
			.replace(/<[^>]*>/g, "");
	}

	const tagBadge = snippet.tag
		? `<span class="card-prefix card-prefix--${category}" style="margin-left: 0.3rem; opacity: 0.7;">${snippet.tag}</span>`
		: "";

	card.innerHTML = `
    <div class="card-header" role="button" tabindex="0" aria-expanded="false" aria-label="Expandir snippet ${snippet.name}">
      <span class="card-prefix card-prefix--${category}">${snippet.prefix}</span>
      ${tagBadge}
      <div class="card-info">
        <div class="card-name">${snippet.name}</div>
        <div class="card-desc">${snippet.description}</div>
      </div>
      <div class="card-toggle">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </div>
    <div class="card-body">
      <div class="card-body-inner">
        <div class="card-explanation">
          <p>${snippet.explanation}</p>
          <div class="card-usage">
            <span class="usage-label">Como usar:</span>
            <span class="usage-text">Digite <kbd>${snippet.prefix}</kbd> e pressione <kbd>Tab</kbd></span>
          </div>
        </div>
      </div>
    </div>
  `;

	// Toggle expand
	const header = card.querySelector(".card-header");
	header.addEventListener("click", () => toggleCard(card));
	header.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggleCard(card);
		}
	});

	return card;
}

function toggleCard(card) {
	const isExpanded = card.classList.toggle("expanded");
	const header = card.querySelector(".card-header");
	header.setAttribute("aria-expanded", isExpanded);
}

// ---------- Init Rendering ----------

function renderSnippets() {
	const cssGrid = document.getElementById("css-grid");
	const htmlGrid = document.getElementById("html-grid");
	const jsGrid = document.getElementById("js-grid");

	cssSnippets.forEach((s, i) => {
		const card = createSnippetCard(s, "css");
		card.style.animationDelay = `${i * 0.04}s`;
		cssGrid.appendChild(card);
	});

	htmlSnippets.forEach((s, i) => {
		const card = createSnippetCard(s, "html");
		card.style.animationDelay = `${i * 0.04}s`;
		htmlGrid.appendChild(card);
	});

	jsSnippets.forEach((s, i) => {
		const card = createSnippetCard(s, "js");
		card.style.animationDelay = `${i * 0.04}s`;
		jsGrid.appendChild(card);
	});
}

// ---------- Search / Filter ----------

function initSearch() {
	const input = document.getElementById("search-input");
	const noResults = document.getElementById("no-results");
	const sections = document.querySelectorAll(".snippets-section");

	input.addEventListener("input", () => {
		const query = input.value.toLowerCase().trim();
		let totalVisible = 0;

		sections.forEach((section) => {
			const cards = section.querySelectorAll(".snippet-card");
			let sectionVisible = 0;

			cards.forEach((card) => {
				const name = card.dataset.name;
				const prefix = card.dataset.prefix;
				const desc = card.dataset.desc;
				const explain = card.dataset.explain || "";
				const match =
					!query ||
					name.includes(query) ||
					prefix.includes(query) ||
					desc.includes(query) ||
					explain.includes(query);

				card.classList.toggle("hidden", !match);
				if (match) sectionVisible++;
			});

			section.style.display = sectionVisible === 0 ? "none" : "";
			totalVisible += sectionVisible;

			// Update counts
			const countEl = section.querySelector(".section-count");
			if (countEl) countEl.textContent = sectionVisible;
		});

		noResults.hidden = totalVisible > 0;
	});

	// Ctrl+K shortcut
	document.addEventListener("keydown", (e) => {
		if ((e.ctrlKey || e.metaKey) && e.key === "k") {
			e.preventDefault();
			input.focus();
			input.select();
		}
	});
}

// ---------- Navbar ----------

function initNavbar() {
	const navbar = document.getElementById("navbar");
	const toggle = document.getElementById("nav-toggle");
	const links = document.getElementById("nav-links");

	// Scroll effect
	window.addEventListener(
		"scroll",
		() => {
			navbar.classList.toggle("scrolled", window.scrollY > 20);
		},
		{ passive: true },
	);

	// Mobile toggle
	toggle.addEventListener("click", () => {
		const isOpen = links.classList.toggle("open");
		toggle.setAttribute("aria-expanded", isOpen);
		toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
	});

	// Close on link click (mobile)
	links.querySelectorAll(".nav-link").forEach((link) => {
		link.addEventListener("click", () => {
			links.classList.remove("open");
		});
	});
}

// ---------- Install Copy Buttons ----------

function initInstallCopy() {
	document.querySelectorAll(".install-section .copy-btn").forEach((btn) => {
		btn.addEventListener("click", async () => {
			const code = btn.dataset.code;
			if (!code) return;
			try {
				await navigator.clipboard.writeText(code);
			} catch (_err) {
				const ta = document.createElement("textarea");
				ta.value = code;
				ta.style.position = "fixed";
				ta.style.left = "-9999px";
				document.body.appendChild(ta);
				ta.select();
				document.execCommand("copy");
				document.body.removeChild(ta);
			}
			const original = btn.textContent;
			btn.textContent = "Copiado!";
			btn.classList.add("copied");
			setTimeout(() => {
				btn.textContent = original;
				btn.classList.remove("copied");
			}, 2000);
		});
	});
}

// ---------- Intersection Observer for Animations ----------

function initScrollAnimations() {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.animationPlayState = "running";
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.1 },
	);

	document.querySelectorAll(".snippet-card").forEach((card) => {
		card.style.animationPlayState = "paused";
		observer.observe(card);
	});
}

// ---------- Boot ----------

document.addEventListener("DOMContentLoaded", () => {
	renderSnippets();
	initSearch();
	initNavbar();
	initInstallCopy();
	initScrollAnimations();
});
