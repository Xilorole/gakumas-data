import { describe, expect, it } from "vitest";
import { buildTree, episodeKey, filterEntries, seriesNeighbors } from "./tree";
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

describe("seriesNeighbors", () => {
  it("親愛度コミュはSTEPをまたいで連続する", () => {
    const affinityEntries: ManifestEntry[] = [
      entry("アイドルコミュ/篠澤広/親愛度/STEP1/第9話.json"),
      entry("アイドルコミュ/篠澤広/親愛度/STEP1/第10話.json"),
      entry("アイドルコミュ/篠澤広/親愛度/STEP2/第11話.json"),
    ];
    const tree = buildTree(affinityEntries);
    const { prev, next } = seriesNeighbors(tree, affinityEntries[1]);
    expect(prev?.segments.at(-1)).toBe("第9話");
    expect(next?.segments.at(-1)).toBe("第11話");
  });

  it("Pアイドルコミュはカード単位で前後が取れる", () => {
    const pIdolEntries: ManifestEntry[] = [
      entry("アイドルコミュ/篠澤広/Pアイドル/[光景]篠澤広/1話.json"),
      entry("アイドルコミュ/篠澤広/Pアイドル/[光景]篠澤広/2話.json"),
      entry("アイドルコミュ/篠澤広/Pアイドル/[光景]篠澤広/3話.json"),
    ];
    const tree = buildTree(pIdolEntries);
    const { prev, next } = seriesNeighbors(tree, pIdolEntries[0]);
    expect(prev).toBeNull();
    expect(next?.segments.at(-1)).toBe("2話");
  });

  it("対象外カテゴリはnull/nullを返す", () => {
    const otherEntries: ManifestEntry[] = [
      entry("サポートコミュ/進化したお弁当、気になる/あいさつしてもいい？.json"),
    ];
    const tree = buildTree(otherEntries);
    expect(seriesNeighbors(tree, otherEntries[0])).toEqual({ prev: null, next: null });
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
