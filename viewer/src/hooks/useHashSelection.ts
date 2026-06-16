import { useCallback, useEffect, useState } from "react";

function pathFromHash(): string | null {
  const raw = window.location.hash.slice(1);
  if (!raw) return null;
  try {
    return raw.split("/").map(decodeURIComponent).join("/");
  } catch {
    return null;
  }
}

function hashFromPath(path: string): string {
  return "#" + path.split("/").map(encodeURIComponent).join("/");
}

/**
 * 選択中の話をURLハッシュと同期する（共有・ブックマーク・戻る進む対応）。
 * 返り値 = [現在のパス, 選択する関数]。
 */
export function useHashSelection(): [string | null, (path: string) => void] {
  const [path, setPath] = useState<string | null>(pathFromHash);

  useEffect(() => {
    const onHashChange = () => setPath(pathFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const select = useCallback((next: string) => {
    const hash = hashFromPath(next);
    if (window.location.hash !== hash) {
      window.location.hash = hash; // hashchange 経由で setPath される
    } else {
      setPath(next);
    }
  }, []);

  return [path, select];
}
