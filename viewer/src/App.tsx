import { useMemo, useState } from "react";
import { useManifest } from "./hooks/useManifest";
import { useHashSelection } from "./hooks/useHashSelection";
import { useTranscript } from "./hooks/useTranscript";
import { buildTree } from "./lib/tree";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Transcript } from "./components/Transcript/Transcript";
import styles from "./App.module.css";

export function App() {
  const manifest = useManifest();
  const [selectedPath, select] = useHashSelection();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const root = useMemo(() => buildTree(manifest.entries), [manifest.entries]);
  const byPath = useMemo(
    () => new Map(manifest.entries.map((e) => [e.path, e])),
    [manifest.entries],
  );
  const review = useMemo(
    () => manifest.entries.reduce((n, e) => n + (e.needs_review ? 1 : 0), 0),
    [manifest.entries],
  );

  const entry = selectedPath ? (byPath.get(selectedPath) ?? null) : null;
  const transcript = useTranscript(entry ? entry.path : null);

  const onSelect = (path: string) => {
    select(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <Header total={manifest.entries.length} review={review} />

      <button
        type="button"
        className={styles.drawerToggle}
        aria-expanded={drawerOpen}
        aria-controls="sidebar"
        onClick={() => setDrawerOpen((o) => !o)}
      >
        一覧
      </button>
      {drawerOpen && (
        <div className={styles.backdrop} onClick={() => setDrawerOpen(false)} />
      )}

      <main className={styles.layout}>
        {manifest.status === "error" ? (
          <p className={styles.error}>
            マニフェスト(index.json)の読み込みに失敗: {manifest.error}
          </p>
        ) : (
          <Sidebar
            id="sidebar"
            entries={manifest.entries}
            root={root}
            selectedPath={selectedPath}
            selectedGroups={entry ? entry.segments.slice(0, -1) : null}
            onSelect={onSelect}
            open={drawerOpen}
          />
        )}
        <div className={styles.viewer}>
          <Transcript entry={entry} state={transcript} />
        </div>
      </main>
    </>
  );
}
