import { useEffect, useRef, type ReactNode } from "react";
import type { ManifestEntry } from "../../types";
import type { TreeNode } from "../../lib/tree";
import { cn } from "../../lib/cn";
import { ReviewBadge } from "../ReviewBadge/ReviewBadge";
import styles from "./Tree.module.css";

export interface TreeProps {
  root: TreeNode;
  selectedPath: string | null;
  /** 選択中エントリのグループ階層（祖先の自動展開に使う）。 */
  selectedGroups: string[] | null;
  /** 表示する話の path 集合。null は絞り込みなし（全件）。 */
  visible: Set<string> | null;
  onSelect: (path: string) => void;
}

export function Tree({ root, ...rest }: TreeProps) {
  return (
    <div className={styles.tree} role="tree">
      <NodeBody node={root} depth={0} nodePath={[]} {...rest} />
    </div>
  );
}

type NodeProps = Omit<TreeProps, "root"> & {
  node: TreeNode;
  depth: number;
  nodePath: string[];
};

/** ノード直下の話 + 子グループを並べる。 */
function NodeBody({ node, depth, nodePath, ...rest }: NodeProps) {
  const { visible } = rest;
  const episodes = node.episodes.filter(
    (e) => visible == null || visible.has(e.path),
  );
  return (
    <>
      {episodes.length > 0 && (
        <ul className={styles.episodes}>
          {episodes.map((e) => (
            <EpisodeButton
              key={e.path}
              entry={e}
              active={e.path === rest.selectedPath}
              onSelect={rest.onSelect}
            />
          ))}
        </ul>
      )}
      {node.children.map((child) => (
        <GroupNode
          key={child.name}
          node={child}
          depth={depth}
          nodePath={[...nodePath, child.name]}
          {...rest}
        />
      ))}
    </>
  );
}

function hasVisible(node: TreeNode, visible: Set<string> | null): boolean {
  if (visible == null) return true;
  if (node.episodes.some((e) => visible.has(e.path))) return true;
  return node.children.some((c) => hasVisible(c, visible));
}

function isAncestorOf(
  nodePath: string[],
  selectedGroups: string[] | null,
): boolean {
  if (!selectedGroups) return false;
  return nodePath.every((name, i) => selectedGroups[i] === name);
}

/** 折りたたみグループ。filtering 中・浅い階層・選択中の祖先は開く。 */
function GroupNode({ node, depth, nodePath, ...rest }: NodeProps) {
  if (!hasVisible(node, rest.visible)) return null;

  const filtering = rest.visible != null;
  const open =
    filtering || depth < 2 || isAncestorOf(nodePath, rest.selectedGroups);

  return (
    <DetailsGroup name={node.name} open={open}>
      <NodeBody node={node} depth={depth + 1} nodePath={nodePath} {...rest} />
    </DetailsGroup>
  );
}

/** open を「初期値・変化時のみ」反映する details（ユーザーの開閉を尊重）。 */
function DetailsGroup({
  name,
  open,
  children,
}: {
  name: string;
  open: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.open = open;
  }, [open]);
  return (
    <details ref={ref} className={styles.node}>
      <summary className={styles.summary}>{name}</summary>
      <div className={styles.children}>{children}</div>
    </details>
  );
}

function EpisodeButton({
  entry,
  active,
  onSelect,
}: {
  entry: ManifestEntry;
  active: boolean;
  onSelect: (path: string) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (active) ref.current?.scrollIntoView({ block: "nearest" });
  }, [active]);
  return (
    <li className={styles.epItem}>
      <button
        ref={ref}
        type="button"
        className={cn(styles.epLink, active && styles.active)}
        aria-current={active ? "true" : undefined}
        onClick={() => onSelect(entry.path)}
      >
        <span className={styles.epLabel}>{entry.segments.at(-1)}</span>
        {entry.needs_review ? (
          <ReviewBadge count={entry.needs_review} onAccent={active} />
        ) : null}
      </button>
    </li>
  );
}
