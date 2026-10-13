import { describe, expect, it } from "vitest";
import { hashFromPath, pathFromSelection, selectionFromHash } from "./selection";
import type { Manifest } from "../types";

const path = "アイドルコミュ/篠澤広/オリジナルコミュ/服の下にも/1話.json";
const entries: Manifest = [
  { path, segments: [], share_id: "hiro/fuku-no-shita-nimo/1" },
  { path: "親愛度/第8話.json", segments: [], share_id: "hiro_08" },
];

describe("share link selection", () => {
  it("generates an ASCII link and resolves it to the unchanged JSON path", () => {
    const hash = hashFromPath(path, entries);
    expect(hash).toBe("#hiro/fuku-no-shita-nimo/1");
    expect(pathFromSelection(selectionFromHash(hash), entries)).toBe(path);
  });

  it("resolves a link after the asynchronous manifest arrives", () => {
    const selection = selectionFromHash("#hiro/fuku-no-shita-nimo/1");
    expect(pathFromSelection(selection, [])).toBe("hiro/fuku-no-shita-nimo/1");
    expect(pathFromSelection(selection, entries)).toBe(path);
  });

  it("accepts old encoded and unencoded Japanese links", () => {
    for (const hash of ["#" + path.split("/").map(encodeURIComponent).join("/"), "#" + path]) {
      expect(pathFromSelection(selectionFromHash(hash), entries)).toBe(path);
    }
  });

  it("round trips different selections for back/forward navigation", () => {
    for (const entry of [...entries, entries[0]]) {
      expect(pathFromSelection(selectionFromHash(hashFromPath(entry.path, entries)), entries))
        .toBe(entry.path);
    }
  });

  it("keeps path routing for old manifests", () => {
    expect(selectionFromHash(hashFromPath(path, [{ path, segments: [] }]))).toBe(path);
  });

  it("does not interpret reserved characters in a legacy filename as URL structure", () => {
    const special = "作品/100% #?&.json";
    expect(selectionFromHash(hashFromPath(special, []))).toBe(special);
  });

  it("returns no selection for empty or malformed hashes", () => {
    expect(selectionFromHash("")).toBeNull();
    expect(selectionFromHash("#")).toBeNull();
    expect(selectionFromHash("#%E3%")).toBeNull();
    expect(pathFromSelection(null, entries)).toBeNull();
  });

  it("leaves unknown IDs unmatched rather than selecting a different story", () => {
    expect(pathFromSelection("missing", entries)).toBe("missing");
  });
});
