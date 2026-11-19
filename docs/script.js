/* =============================================
   ANTIGRAVITY SNIPPETS — Script
   Dados gerados em docs/snippets-data.js via scripts/sync-docs.py
   ============================================= */

// ---------- Shared Helpers ----------

async function copyText(text) {
	try {
		await navigator.clipboard.writeText(text);
	} catch (_err) {
		const ta = document.createElement("textarea");
		ta.value = text;
		ta.style.position = "fixed";
		ta.style.left = "-9999px";
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		document.body.removeChild(ta);
	}
}

function announce(message) {
	const status = document.getElementById("copy-status");
	if (!status) return;
	status.textContent = "";
	requestAnimationFrame(() => {
		status.textContent = message;
	});
}

// ---------- Card Rendering ----------

function createSnippetCard(snippet, category, index) {
	const card = document.createElement("div");
	card.className = "snippet-card";
	card.dataset.name = snippet.name.toLowerCase();
	card.dataset.prefix = snippet.prefix.toLowerCase();
	card.dataset.desc = snippet.description.toLowerCase();
	card.dataset.explain = (snippet.explanation || "")
		.toLowerCase()
		.replace(/<[^>]*>/g, "");
	card.dataset.lang = category;
	card.dataset.tag = (snippet.tag || "").toLowerCase();

	const bodyId = `snippet-${category}-${index}`;
	const tagBadge = snippet.tag
		? `<span class="card-tag">${snippet.tag}</span>`
		: "";
	const lineLabel = snippet.lines === 1 ? "linha" : "linhas";

	card.innerHTML = `
    <button type="button" class="card-header" aria-expanded="false" aria-controls="${bodyId}" aria-label="Expandir snippet ${snippet.name}">
      <span class="card-prefix">${snippet.prefix}</span>
      <span class="card-info">
        <span class="card-title-row">
          <span class="card-name">${snippet.name}</span>
          ${tagBadge}
        </span>
        <span class="card-desc">${snippet.description}</span>
      </span>
      <span class="card-toggle">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </span>
    </button>
    <button type="button" class="row-copy" aria-label="Copiar prefixo ${snippet.prefix}" title="Copiar prefixo">
      <svg class="icon-copy" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>
      <svg class="icon-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
    </button>
    <div class="card-body" id="${bodyId}">
      <div class="card-body-inner">
        <div class="card-explanation">
          <p>${snippet.explanation || snippet.description}</p>
          <div class="snippet-code">
            <div class="snippet-code-head">
              <span class="snippet-code-meta">${category} · ${snippet.lines} ${lineLabel}</span>
              <button type="button" class="copy-btn snippet-copy-code" aria-label="Copiar código do snippet ${snippet.name}">Copiar código</button>
            </div>
            <pre><code>${snippet.codeHtml}</code></pre>
          </div>
          <div class="card-usage">
            <span class="usage-label">Uso</span>
            <span class="usage-text">Digite <kbd>${snippet.prefix}</kbd> e pressione <kbd>Tab</kbd></span>
          </div>
        </div>
      </div>
    </div>
  `;

	// Toggle expand
	const header = card.querySelector(".card-header");
	header.addEventListener("click", () => toggleCard(card));

	// Copy prefix (fora do header: não dispara o toggle)
	const copyPrefixBtn = card.querySelector(".row-copy");
	let prefixTimer;
	copyPrefixBtn.addEventListener("click", async () => {
		await copyText(snippet.prefix);
		announce(`Prefixo ${snippet.prefix} copiado`);
		copyPrefixBtn.classList.add("copied");
		clearTimeout(prefixTimer);
		prefixTimer = setTimeout(
			() => copyPrefixBtn.classList.remove("copied"),
			1500,
		);
	});

	// Copy full snippet code
	const copyCodeBtn = card.querySelector(".snippet-copy-code");
	const originalCodeLabel = copyCodeBtn.textContent;
	let codeTimer;
	copyCodeBtn.addEventListener("click", async () => {
		await copyText(snippet.code);
		announce(`Código de ${snippet.prefix} copiado`);
		copyCodeBtn.textContent = "Copiado";
		copyCodeBtn.classList.add("copied");
		clearTimeout(codeTimer);
		codeTimer = setTimeout(() => {
			copyCodeBtn.textContent = originalCodeLabel;
			copyCodeBtn.classList.remove("copied");
		}, 1800);
	});

	return card;
}

function toggleCard(card) {
	const isExpanded = card.classList.toggle("expanded");
	const header = card.querySelector(".card-header");
	header.setAttribute("aria-expanded", String(isExpanded));
}

// ---------- Init Rendering ----------

function renderAll() {
	const categories = window.ANTIGRAVITY_SNIPPETS?.categories || [];
	const grids = {
		css: document.getElementById("css-grid"),
		html: document.getElementById("html-grid"),
		js: document.getElementById("js-grid"),
	};

	let total = 0;
	let a11yCount = 0;

	categories.forEach((cat) => {
		const grid = grids[cat.id];
		if (!grid) return;

		cat.items.forEach((item, index) => {
			grid.appendChild(createSnippetCard(item, cat.id, index));
			if (item.tag === "a11y") a11yCount++;
		});

		total += cat.items.length;

		const countBadge = document.querySelector(`[data-count="${cat.id}"]`);
		if (countBadge) countBadge.textContent = cat.items.length;

		const sectionCount = grid
			.closest(".snippets-section")
			?.querySelector(".section-count");
		if (sectionCount) sectionCount.textContent = cat.items.length;
	});

	const totalLabel = document.querySelector("[data-total-label]");
	if (totalLabel) totalLabel.textContent = `${total} snippets`;

	const allCount = document.querySelector('[data-count="all"]');
	if (allCount) allCount.textContent = total;

	const a11yBadge = document.querySelector('[data-count="a11y"]');
	if (a11yBadge) a11yBadge.textContent = a11yCount;

	return total;
}

// ---------- Search / Filter ----------

function initSearchAndFilters(totalSnippets) {
	const input = document.getElementById("search-input");
	const searchBox = input.closest(".search-box");
	const clearBtn = document.getElementById("search-clear");
	const filterBtns = document.querySelectorAll(".filter-btn");
	const resultsBar = document.getElementById("results-bar");
	const resultsText = document.getElementById("results-text");
	const resultsReset = document.getElementById("results-reset");
	const noResults = document.getElementById("no-results");
	const noResultsReset = document.getElementById("no-results-reset");
	const sections = document.querySelectorAll(".snippets-section");

	let activeFilter = "all";

	function applyFilters() {
		const rawValue = input.value;
		const query = rawValue.toLowerCase().trim();
		let totalVisible = 0;

		clearBtn.hidden = !rawValue;
		searchBox.classList.toggle("has-query", Boolean(rawValue));

		filterBtns.forEach((btn) => {
			btn.setAttribute(
				"aria-pressed",
				String(btn.dataset.filter === activeFilter),
			);
		});

		sections.forEach((section) => {
			const cards = section.querySelectorAll(".snippet-card");
			let sectionVisible = 0;

			cards.forEach((card) => {
				const filterMatch =
					activeFilter === "all" ||
					(activeFilter === "a11y" && card.dataset.tag === "a11y") ||
					card.dataset.lang === activeFilter;

				const queryMatch =
					!query ||
					card.dataset.name.includes(query) ||
					card.dataset.prefix.includes(query) ||
					card.dataset.desc.includes(query) ||
					card.dataset.explain.includes(query) ||
					card.dataset.tag.includes(query);

				const match = filterMatch && queryMatch;
				card.classList.toggle("hidden", !match);
				if (match) sectionVisible++;
			});

			section.style.display = sectionVisible === 0 ? "none" : "";
			totalVisible += sectionVisible;

			const countEl = section.querySelector(".section-count");
			if (countEl) countEl.textContent = sectionVisible;
		});

		noResults.hidden = totalVisible > 0;

		const isFiltered = Boolean(query) || activeFilter !== "all";
		resultsBar.hidden = !isFiltered;
		if (isFiltered) {
			resultsText.textContent = `${totalVisible} de ${totalSnippets} snippets`;
		}
	}

	function resetAll() {
		input.value = "";
		activeFilter = "all";
		applyFilters();
		input.focus();
	}

	input.addEventListener("input", applyFilters);

	input.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && input.value !== "") {
			e.preventDefault();
			input.value = "";
			applyFilters();
		}
	});

	clearBtn.addEventListener("click", () => {
		input.value = "";
		applyFilters();
		input.focus();
	});

	filterBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			activeFilter = btn.dataset.filter;
			applyFilters();
		});
	});

	resultsReset.addEventListener("click", resetAll);
	noResultsReset.addEventListener("click", resetAll);

	// Links de categoria na navbar limpam o filtro se ele esconder a seção alvo
	const anchorLangs = {
		"#snippets-css": "css",
		"#snippets-html": "html",
		"#snippets-js": "js",
	};
	document.querySelectorAll(".nav-link[href^='#snippets-']").forEach((link) => {
		link.addEventListener("click", () => {
			const targetLang = anchorLangs[link.getAttribute("href")];
			if (activeFilter !== "all" && activeFilter !== targetLang) {
				activeFilter = "all";
				applyFilters();
			}
		});
	});

	// Ctrl+K shortcut
	document.addEventListener("keydown", (e) => {
		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
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

	function closeMenu() {
		links.classList.remove("open");
		toggle.setAttribute("aria-expanded", "false");
		toggle.setAttribute("aria-label", "Abrir menu");
	}

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
		toggle.setAttribute("aria-expanded", String(isOpen));
		toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
	});

	// Close on link click (mobile)
	links.querySelectorAll(".nav-link").forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	// Close on Escape
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && links.classList.contains("open")) {
			closeMenu();
			toggle.focus();
		}
	});
}

// ---------- Install OS Switch & Copy ----------

function initInstallOsSwitch() {
	const codeEl = document.getElementById("install-os-code");
	const copyBtn = document.getElementById("install-os-copy");
	const osBtns = document.querySelectorAll(".os-btn");
	if (!codeEl || !copyBtn || !osBtns.length) return;

	const commands = {
		win: ".\\scripts\\restore.ps1",
		unix: "chmod +x scripts/restore.sh && ./scripts/restore.sh",
	};

	osBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const os = btn.dataset.os;
			const cmd = commands[os];
			if (!cmd) return;

			osBtns.forEach((b) =>
				b.setAttribute("aria-pressed", String(b === btn)),
			);
			codeEl.textContent = cmd;
			copyBtn.dataset.code = cmd;
		});
	});
}

function initInstallCopy() {
	document.querySelectorAll(".install-section .copy-btn").forEach((btn) => {
		const original = btn.textContent;
		let timer;
		btn.addEventListener("click", async () => {
			const code = btn.dataset.code;
			if (!code) return;
			await copyText(code);
			announce("Comando copiado");
			btn.textContent = "Copiado";
			btn.classList.add("copied");
			clearTimeout(timer);
			timer = setTimeout(() => {
				btn.textContent = original;
				btn.classList.remove("copied");
			}, 2000);
		});
	});
}

// ---------- Boot ----------

document.addEventListener("DOMContentLoaded", () => {
	const total = renderAll();
	initSearchAndFilters(total);
	initNavbar();
	initInstallOsSwitch();
	initInstallCopy();
});
