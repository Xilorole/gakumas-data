"use strict";

// マニフェストとデータはリポジトリルート（docs の 1 つ上）にある。
// Pages の公開元は「main / root」前提。docs/ から見て ../ がルート。
const ROOT = "../";

/** 相対パスを安全な URL に（日本語セグメントを encode、区切りの / は保つ）。 */
function toUrl(path) {
  return ROOT + path.split("/").map(encodeURIComponent).join("/");
}

/** 話の並び順キー。"第10.5話" → 10.5 / "1話" → 1。数字が無ければ文字列末尾扱い。 */
function episodeKey(label) {
  const m = label.match(/[0-9]+(?:\.[0-9]+)?/);
  return m ? parseFloat(m[0]) : Number.POSITIVE_INFINITY;
}

/** マニフェストを segments で木にまとめる（末尾=話、それより前=グループ階層）。 */
function groupByPath(entries) {
  const groups = new Map(); // グループパス(joinした親) -> {label, episodes:[entry]}
  for (const e of entries) {
    const segs = e.segments;
    const parent = segs.slice(0, -1).join(" / ");
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(e);
  }
  for (const list of groups.values()) {
    list.sort((a, b) => episodeKey(a.segments.at(-1)) - episodeKey(b.segments.at(-1)));
  }
  return groups;
}

/** サイドバーの索引を描く。 */
function renderIndex(entries) {
  const root = document.getElementById("index");
  root.textContent = "";
  const groups = groupByPath(entries);
  for (const [parent, list] of groups) {
    const section = document.createElement("section");
    section.className = "index-group";
    const h = document.createElement("h2");
    h.className = "index-group-title";
    h.textContent = parent;
    section.appendChild(h);
    const ul = document.createElement("ul");
    ul.className = "index-list";
    for (const e of list) {
      const li = document.createElement("li");
      li.className = "index-item";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "index-link";
      btn.dataset.path = e.path;
      btn.textContent = e.segments.at(-1);
      if (e.needs_review) {
        const badge = document.createElement("span");
        badge.className = "review-badge";
        badge.textContent = "要確認 " + e.needs_review;
        btn.appendChild(badge);
      }
      btn.addEventListener("click", () => openTranscript(e));
      li.appendChild(btn);
      ul.appendChild(li);
    }
    section.appendChild(ul);
    root.appendChild(section);
  }
}

/** 1 行を描く（dialogue=話者+本文 / choice=選択肢）。 */
function renderLine(line) {
  const row = document.createElement("div");
  row.className = "line line-" + (line.type || "dialogue");
  if (line.needs_review) row.classList.add("needs-review");

  if (line.type === "choice") {
    const text = document.createElement("span");
    text.className = "line-text";
    text.textContent = line.text;
    row.appendChild(text);
  } else {
    const speaker = document.createElement("span");
    speaker.className = "line-speaker";
    speaker.textContent = line.speaker || "";
    const text = document.createElement("span");
    text.className = "line-text";
    text.textContent = line.text;
    row.appendChild(speaker);
    row.appendChild(text);
  }
  return row;
}

/** 選んだ話の transcript を取得して本文を描く。 */
async function openTranscript(entry) {
  const view = document.getElementById("transcript");
  view.textContent = "";
  const heading = document.createElement("h2");
  heading.className = "transcript-title";
  heading.textContent = entry.segments.join(" / ");
  view.appendChild(heading);

  const meta = document.createElement("p");
  meta.className = "transcript-meta";
  meta.textContent = `${entry.line_count ?? "?"} 行` +
    (entry.needs_review ? ` / 要確認 ${entry.needs_review}` : "");
  view.appendChild(meta);

  let data;
  try {
    const res = await fetch(toUrl(entry.path));
    if (!res.ok) throw new Error(res.status);
    data = await res.json();
  } catch (err) {
    const e = document.createElement("p");
    e.className = "error";
    e.textContent = "読み込みに失敗: " + err.message;
    view.appendChild(e);
    return;
  }

  const body = document.createElement("div");
  body.className = "lines";
  for (const line of data.lines || []) body.appendChild(renderLine(line));
  view.appendChild(body);
}

async function main() {
  const index = document.getElementById("index");
  try {
    const res = await fetch(ROOT + "index.json");
    if (!res.ok) throw new Error(res.status);
    const entries = await res.json();
    renderIndex(entries);
  } catch (err) {
    index.textContent = "マニフェスト(index.json)の読み込みに失敗: " + err.message;
  }
}

main();
