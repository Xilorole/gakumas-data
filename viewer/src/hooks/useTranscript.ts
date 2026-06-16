import { useEffect, useState } from "react";
import { fetchTranscript } from "../lib/api";
import type { Transcript } from "../types";

export interface TranscriptState {
  status: "idle" | "loading" | "ready" | "error";
  data?: Transcript;
  error?: string;
}

/** path が変わるたびに該当 transcript を取得する（前の取得は中断）。 */
export function useTranscript(path: string | null): TranscriptState {
  const [state, setState] = useState<TranscriptState>({ status: "idle" });

  useEffect(() => {
    if (!path) {
      setState({ status: "idle" });
      return;
    }
    const ac = new AbortController();
    setState({ status: "loading" });
    fetchTranscript(path, ac.signal)
      .then((data) => setState({ status: "ready", data }))
      .catch((err: unknown) => {
        if (ac.signal.aborted) return;
        const message = err instanceof Error ? err.message : String(err);
        setState({ status: "error", error: message });
      });
    return () => ac.abort();
  }, [path]);

  return state;
}
