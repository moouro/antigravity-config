#!/usr/bin/env python3
"""Sincroniza snippets/*.json e docs/snippets-meta.json -> docs/snippets-data.js."""

from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SNIPPETS_DIR = ROOT / "snippets"
META_PATH = ROOT / "docs" / "snippets-meta.json"
OUT_PATH = ROOT / "docs" / "snippets-data.js"

CATEGORIES = [
    ("css", "CSS", "snippets/css.json"),
    ("html", "HTML", "snippets/html.json"),
    ("js", "JavaScript", "snippets/javascript.json"),
]

MARK_RE = re.compile(r"(<mark\b[^>]*>.*?</mark>)", re.S)
CSS_COMMENT_RE = re.compile(r"/\*.*?\*/", re.S)
JS_COMMENT_RE = re.compile(r"(?<![:'\"/])//[^\n]*")


def _parse_region(
    text: str, pos: int, stop_at_brace: bool = False, top_level: bool = True
) -> tuple[str, str, int]:
    """Resolve recursivamente placeholders/escapes de snippets VS Code."""
    code_parts: list[str] = []
    html_parts: list[str] = []
    n = len(text)

    while pos < n:
        ch = text[pos]

        if stop_at_brace and ch == "}":
            return "".join(code_parts), "".join(html_parts), pos + 1

        if stop_at_brace and ch == "{":
            inner_c, inner_h, next_pos = _parse_region(
                text, pos + 1, stop_at_brace=True, top_level=top_level
            )
            code_parts.append(f"{{{inner_c}}}")
            html_parts.append(f"{{{inner_h}}}")
            pos = next_pos
            continue

        if ch == "\\":
            if pos + 1 < n and text[pos + 1] in ("$", "}", "\\"):
                lit = text[pos + 1]
                code_parts.append(lit)
                html_parts.append(html.escape(lit, quote=False))
                pos += 2
                continue
            code_parts.append("\\")
            html_parts.append("\\")
            pos += 1
            continue

        if ch == "$":
            if pos + 1 < n and text[pos + 1] == "{":
                inner_start = pos + 2
                # ${N} (tabstop sem default)
                m_simple = re.match(r"(\d+)\}", text[inner_start:])
                if m_simple:
                    pos = inner_start + m_simple.end()
                    continue

                # ${N:default}
                m_default = re.match(r"(\d+):", text[inner_start:])
                if m_default:
                    c_val, _, next_pos = _parse_region(
                        text,
                        inner_start + m_default.end(),
                        stop_at_brace=True,
                        top_level=False,
                    )
                    code_parts.append(c_val)
                    if c_val:
                        escaped = html.escape(c_val, quote=False)
                        if top_level:
                            html_parts.append(f'<mark class="ts">{escaped}</mark>')
                        else:
                            html_parts.append(escaped)
                    pos = next_pos
                    continue

                # ${N|opt1,opt2,...|}
                m_choice = re.match(r"(\d+)\|([^|]*)\|\}", text[inner_start:])
                if m_choice:
                    opts = [o.strip() for o in m_choice.group(2).split(",") if o != ""]
                    first = opts[0] if opts else ""
                    code_parts.append(first)
                    if first:
                        esc_first = html.escape(first, quote=False)
                        if top_level:
                            title = html.escape(", ".join(opts), quote=True)
                            html_parts.append(
                                f'<mark class="ts" title="Opções: {title}">{esc_first}</mark>'
                            )
                        else:
                            html_parts.append(esc_first)
                    pos = inner_start + m_choice.end()
                    continue

                # ${VAR} (ex: ${CURRENT_YEAR})
                m_var = re.match(r"([A-Z_][A-Z0-9_]*)\}", text[inner_start:])
                if m_var:
                    lit_var = f"${{{m_var.group(1)}}}"
                    code_parts.append(lit_var)
                    esc_var = html.escape(lit_var, quote=False)
                    if top_level:
                        html_parts.append(f'<mark class="ts">{esc_var}</mark>')
                    else:
                        html_parts.append(esc_var)
                    pos = inner_start + m_var.end()
                    continue

            # $0, $1 .. $99
            m_num = re.match(r"\$(\d+)", text[pos:])
            if m_num:
                pos += m_num.end()
                continue

            # $VAR
            m_var_plain = re.match(r"\$([A-Z_][A-Z0-9_]*)", text[pos:])
            if m_var_plain:
                lit_var = m_var_plain.group(0)
                code_parts.append(lit_var)
                esc_var = html.escape(lit_var, quote=False)
                if top_level:
                    html_parts.append(f'<mark class="ts">{esc_var}</mark>')
                else:
                    html_parts.append(esc_var)
                pos += m_var_plain.end()
                continue

            code_parts.append("$")
            html_parts.append("$")
            pos += 1
            continue

        code_parts.append(ch)
        html_parts.append(html.escape(ch, quote=False))
        pos += 1

    return "".join(code_parts), "".join(html_parts), pos


def _highlight_comments(code_html: str, lang: str) -> str:
    if lang == "css":
        pattern = CSS_COMMENT_RE
    elif lang == "js":
        pattern = JS_COMMENT_RE
    else:
        return code_html

    chunks = MARK_RE.split(code_html)
    for i, chunk in enumerate(chunks):
        if i % 2 == 0 and chunk:
            chunks[i] = pattern.sub(
                lambda m: f'<span class="cm">{m.group(0)}</span>', chunk
            )
    return "".join(chunks)


def format_body(raw_body: str | list[str], lang: str) -> tuple[str, str, int]:
    raw = "\n".join(raw_body) if isinstance(raw_body, list) else str(raw_body)
    raw = raw.replace("\r\n", "\n").replace("\t", "  ")
    code, code_html, _ = _parse_region(raw, 0, stop_at_brace=False, top_level=True)

    # Remove linhas finais vazias causadas por um $0 isolado na última linha
    code_lines = code.split("\n")
    html_lines = code_html.split("\n")
    while code_lines and code_lines[-1].strip() == "":
        code_lines.pop()
        if html_lines:
            html_lines.pop()

    clean_code = "\n".join(code_lines)
    clean_html = _highlight_comments("\n".join(html_lines), lang)
    line_count = len(code_lines) if clean_code else 0
    return clean_code, clean_html, line_count


def _fallback_name(raw_key: str) -> str:
    return re.sub(r"^(CSS|HTML|DOM|A11Y)\s*:?\s+", "", raw_key).strip() or raw_key


def build_data() -> dict:
    meta = (
        json.loads(META_PATH.read_text(encoding="utf-8"))
        if META_PATH.exists()
        else {}
    )

    categories_out = []
    for cat_id, label, rel_file in CATEGORIES:
        src_path = ROOT / rel_file
        raw_snippets = json.loads(src_path.read_text(encoding="utf-8"))
        items = []

        for raw_key, snippet in raw_snippets.items():
            prefix = snippet["prefix"]
            m = meta.get(f"{cat_id}:{prefix}", {})
            raw_desc = snippet.get("description", "")

            name = m.get("name") or _fallback_name(raw_key)
            description = m.get("description") or raw_desc
            explanation = m.get("explanation") or html.escape(description, quote=False)
            tag = m.get("tag")
            if tag is None and (
                raw_key.upper().startswith("A11Y")
                or raw_desc.upper().startswith("A11Y")
            ):
                tag = "a11y"

            code, code_html, lines = format_body(snippet["body"], cat_id)
            item = {
                "name": name,
                "prefix": prefix,
                "description": description,
                "explanation": explanation,
                "code": code,
                "codeHtml": code_html,
                "lines": lines,
            }
            if tag:
                item["tag"] = tag
            items.append(item)

        categories_out.append(
            {
                "id": cat_id,
                "label": label,
                "file": rel_file,
                "items": items,
            }
        )

    return {"categories": categories_out}


def main() -> None:
    data = build_data()
    banner = (
        "// Arquivo gerado automaticamente por scripts/sync-docs.py "
        "a partir de snippets/*.json\n"
    )
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    OUT_PATH.write_text(
        f"{banner}window.ANTIGRAVITY_SNIPPETS = {payload};\n", encoding="utf-8"
    )
    counts = " / ".join(f"{len(c['items'])} {c['id'].upper()}" for c in data["categories"])
    total = sum(len(c["items"]) for c in data["categories"])
    print(f"OK: {OUT_PATH.relative_to(ROOT)} ({counts} / {total} total)")


if __name__ == "__main__":
    main()
