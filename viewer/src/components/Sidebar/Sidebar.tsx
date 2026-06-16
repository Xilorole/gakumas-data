import { useMemo, useState } from "react";
import type { Manifest } from "../../types";
import type { TreeNode } from "../../lib/tree";
import { filterEntries } from "../../lib/tree";
import { cn } from "../../lib/cn";
import { Tree } from "../Tree/Tree";
import styles from "./Sidebar.module.css";

export interface SidebarProps {
  entries: Manifest;
  root: TreeNode;
  selectedPath: string | null;
  selectedGroups: string[] | null;
  onSelect: (path: string) => void;
  /** モバイルのドロワー開閉。 */
  open?: boolean;
  id?: string;
}

export function Sidebar({
  entries,
  root,
  selectedPath,
  selectedGroups,
  onSelect,
  open,
  id,
}: SidebarProps) {
  const [query, setQuery] = useState("");
  const visible = useMemo(
    () => (query.trim() ? filterEntries(entries, query) : null),
    [entries, query],
  );

  return (
    <nav
      id={id}
      className={cn(styles.sidebar, open && styles.open)}
      aria-label="コミュ一覧"
    >
      <div className={styles.filter}>
        <input
          className={styles.input}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="絞り込み（話名・話者・セッション）"
          aria-label="絞り込み"
          autoComplete="off"
        />
      </div>
      <Tree
        root={root}
        selectedPath={selectedPath}
        selectedGroups={selectedGroups}
        visible={visible}
        onSelect={onSelect}
      />
    </nav>
  );
}
