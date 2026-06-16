import { describe, expect, it } from "vitest";
import { buildTree, episodeKey, filterEntries } from "./tree";
import type { ManifestEntry } from "../types";

function entry(path: string, extra: Partial<ManifestEntry> = {}): ManifestEntry {
  return { path, segments: path.replace(/\.json$/, "").split("/"), ...extra };
}

const entries: ManifestEntry[] = [
  entry("アイドルコミュ/篠澤広/親愛度/STEP1/第2話.json", { session: "hiro_02" }),
  entry("アイドルコミュ/篠澤広/親愛度/STEP1/第10話.json", { session: "hiro_10" }),
  entry("アイドルコミュ/篠澤広/親愛度/STEP1/第1話.json", { session: "hiro_01" }),
];

describe("episodeKey", () => {
  it("話数を数値で取り出す", () => {
    expect(episodeKey("第10話")).toBe(10);
    expect(episodeKey("1話")).toBe(1);
    expect(episodeKey("第10.5話")).toBe(10.5);
    expect(episodeKey("特別編")).toBe(Number.POSITIVE_INFINITY);
  });
});

describe("buildTree", () => {
  it("階層をたどってツリーを作る", () => {
    const tree = buildTree(entries);
    const idol = tree.children[0];
    expect(idol.name).toBe("アイドルコミュ");
    const leaf = idol.children[0].children[0].children[0];
    expect(leaf.name).toBe("STEP1");
    expect(leaf.episodes.map((e) => e.segments.at(-1))).toEqual([
      "第1話",
      "第2話",
      "第10話",
    ]);
  });
});

describe("filterEntries", () => {
  it("空クエリは全件", () => {
    expect(filterEntries(entries, "").size).toBe(3);
  });
  it("セッション名で絞れる", () => {
    const hits = filterEntries(entries, "hiro_10");
    expect([...hits]).toEqual(["アイドルコミュ/篠澤広/親愛度/STEP1/第10話.json"]);
  });
  it("グループ名で絞れる", () => {
    expect(filterEntries(entries, "step1").size).toBe(3);
  });
});
