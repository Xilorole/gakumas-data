import type { Manifest } from "../types";

export function selectionFromHash(hash: string): string | null {
  const raw = hash.replace(/^#/, "");
  if (!raw) return null;
  try {
    return raw.split("/").map(decodeURIComponent).join("/");
  } catch {
    return null;
  }
}

export function pathFromSelection(selection: string | null, entries: Manifest): string | null {
  if (!selection) return null;
  return entries.find((entry) => entry.share_id === selection)?.path ?? selection;
}

export function hashFromPath(path: string, entries: Manifest): string {
  const entry = entries.find((candidate) => candidate.path === path);
  return "#" + (entry?.share_id ?? path).split("/").map(encodeURIComponent).join("/");
}
