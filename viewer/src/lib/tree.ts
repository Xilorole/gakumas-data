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
  node.children.forEach(sortTree);
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
