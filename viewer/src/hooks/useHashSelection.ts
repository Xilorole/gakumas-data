import { useCallback, useEffect, useState } from "react";
import type { Manifest } from "../types";
import { hashFromPath, pathFromSelection, selectionFromHash } from "../lib/selection";

/**
 * 選択中の話をURLハッシュと同期する（共有・ブックマーク・戻る進む対応）。
 * 返り値 = [現在のパス, 選択する関数]。
 */
export function useHashSelection(entries: Manifest): [string | null, (path: string) => void] {
  const [selection, setSelection] = useState<string | null>(
    () => selectionFromHash(window.location.hash),
  );

  useEffect(() => {
    const onHashChange = () => setSelection(selectionFromHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const path = pathFromSelection(selection, entries);
    const entry = entries.find((candidate) => candidate.path === path);
    if (!entry?.share_id) return;
    const hash = hashFromPath(entry.path, entries);
    if (window.location.hash !== hash) {
      // 旧リンクを短くする際は「戻る」の履歴を増やさない。
      window.history.replaceState(window.history.state, "", hash);
    }
  }, [selection, entries]);

  const select = useCallback((next: string) => {
    const hash = hashFromPath(next, entries);
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      setSelection(selectionFromHash(hash));
    }
  }, [entries]);

  return [pathFromSelection(selection, entries), select];
}
