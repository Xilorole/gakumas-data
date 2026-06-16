import { useEffect, useState } from "react";
import { fetchManifest } from "../lib/api";
import type { Manifest } from "../types";

export interface ManifestState {
  status: "loading" | "ready" | "error";
  entries: Manifest;
  error?: string;
}

/** 起動時に index.json を 1 度だけ読み込む。 */
export function useManifest(): ManifestState {
  const [state, setState] = useState<ManifestState>({
    status: "loading",
    entries: [],
  });

  useEffect(() => {
    const ac = new AbortController();
    fetchManifest(ac.signal)
      .then((entries) => setState({ status: "ready", entries }))
      .catch((err: unknown) => {
        if (ac.signal.aborted) return;
        const message = err instanceof Error ? err.message : String(err);
        setState({ status: "error", entries: [], error: message });
      });
    return () => ac.abort();
  }, []);

  return state;
}
