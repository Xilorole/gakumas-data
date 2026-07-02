import type { ManifestEntry } from "../types";

/** マニフェストを階層化したツリー。葉に話（episodes）を持つ。 */
export interface TreeNode {
  /** このノードのグループ名（ルートは ""）。 */
  name: string;
  /** 子グループ（挿入順を保つ）。 */
  children: TreeNode[];
  /** この階層直下の話。 */
  episodes: ManifestEntry[];
}

/** 話ラベルの並び順キー。"第10.5話" → 10.5 / "1話" → 1。数字が無ければ末尾。 */
export function episodeKey(label: string): number {
  const m = label.match(/[0-9]+(?:\.[0-9]+)?/);
  return m ? parseFloat(m[0]) : Number.POSITIVE_INFINITY;
}

function childByName(node: TreeNode, name: string): TreeNode {
  let child = node.children.find((c) => c.name === name);
  if (!child) {
    child = { name, children: [], episodes: [] };
    node.children.push(child);
  }
  return child;
}

/** segments の末尾（話ラベル）を除いた部分をグループ階層としてツリーを組む。 */
export function buildTree(entries: ManifestEntry[]): TreeNode {
  const root: TreeNode = { name: "", children: [], episodes: [] };
  for (const entry of entries) {
    let node = root;
    for (const seg of entry.segments.slice(0, -1)) {
      node = childByName(node, seg);
    }
    node.episodes.push(entry);
  }
  sortTree(root);
  return root;
}

function sortTree(node: TreeNode): void {
  node.episodes.sort(
    (a, b) => episodeKey(a.segments.at(-1) ?? "") - episodeKey(b.segments.at(-1) ?? ""),
  );
  // グループ名も数字があれば数値順に（STEP1, STEP2, ... が manifest の並び順に
  // 依存せず正しく並ぶようにするため）。数字が無い名前同士は現状の順を保つ。
  node.children.sort((a, b) => episodeKey(a.name) - episodeKey(b.name));
  node.children.forEach(sortTree);
}

function flattenEpisodes(node: TreeNode): ManifestEntry[] {
  return [...node.episodes, ...node.children.flatMap(flattenEpisodes)];
}

function findNode(root: TreeNode, segments: string[]): TreeNode | null {
  let node = root;
  for (const seg of segments) {
    const child = node.children.find((c) => c.name === seg);
    if (!child) return null;
    node = child;
  }
  return node;
}

/**
 * 同じシリーズ内での前後の話を返す（親愛度コミュ / Pアイドルコミュのみ対応）。
 * 親愛度コミュは STEP をまたいで連続ナビゲートできるよう、STEP の 1 つ上
 * （「親愛度」グループ）を単位にする。Pアイドルコミュはカードのフォルダ単位。
 * それ以外のカテゴリ（初星コミュ・サポートコミュ等）は次話/前話の概念が
 * 無いため { prev: null, next: null } を返す。
 */
export function seriesNeighbors(
  root: TreeNode,
  entry: ManifestEntry,
): { prev: ManifestEntry | null; next: ManifestEntry | null } {
  const segs = entry.segments;
  const affinityIdx = segs.indexOf("親愛度");
  const pIdolIdx = segs.indexOf("Pアイドル");

  let seriesSegs: string[] | null = null;
  if (affinityIdx !== -1) {
    seriesSegs = segs.slice(0, affinityIdx + 1);
  } else if (pIdolIdx !== -1) {
    seriesSegs = segs.slice(0, -1);
  }
  if (!seriesSegs) return { prev: null, next: null };

  const node = findNode(root, seriesSegs);
  if (!node) return { prev: null, next: null };

  const episodes = flattenEpisodes(node);
  const i = episodes.findIndex((e) => e.path === entry.path);
  if (i === -1) return { prev: null, next: null };

  return {
    prev: i > 0 ? episodes[i - 1] : null,
    next: i < episodes.length - 1 ? episodes[i + 1] : null,
  };
}

/** クエリ（話名・話者・セッション）でエントリを絞った path 集合を返す。 */
export function filterEntries(
  entries: ManifestEntry[],
  query: string,
): Set<string> {
  const q = query.trim().toLowerCase();
  const hits = new Set<string>();
  for (const e of entries) {
    if (!q) {
      hits.add(e.path);
      continue;
    }
    const hay = (e.segments.join(" ") + " " + (e.session ?? "")).toLowerCase();
    if (hay.includes(q)) hits.add(e.path);
  }
  return hits;
}
