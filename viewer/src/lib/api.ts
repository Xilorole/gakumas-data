import type { Manifest, Transcript } from "../types";

/**
 * データの基準 URL。
 * - dev: "/"（vite.config の serveRepoData がリポジトリルートから配信）
 * - 本番: "/gakumas-data/"（GitHub Actions が dist にデータを同梱）
 */
const BASE = import.meta.env.BASE_URL;

/** 相対パスを安全な URL に（日本語セグメントを encode、区切りの / は保つ）。 */
function dataUrl(relPath: string): string {
  return BASE + relPath.split("/").map(encodeURIComponent).join("/");
}

export async function fetchManifest(signal?: AbortSignal): Promise<Manifest> {
  const res = await fetch(BASE + "index.json", { signal });
  if (!res.ok) throw new Error(`マニフェスト取得失敗 (HTTP ${res.status})`);
  return res.json() as Promise<Manifest>;
}

export async function fetchTranscript(
  relPath: string,
  signal?: AbortSignal,
): Promise<Transcript> {
  const res = await fetch(dataUrl(relPath), { signal });
  if (!res.ok) throw new Error(`本文取得失敗 (HTTP ${res.status})`);
  return res.json() as Promise<Transcript>;
}
