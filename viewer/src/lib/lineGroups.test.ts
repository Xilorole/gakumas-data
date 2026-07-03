import { describe, expect, it } from "vitest";
import { groupLines, groupSegments } from "./lineGroups";
import type { Line } from "../types";

function line(index: number, extra: Partial<Line> = {}): Line {
  return { index, type: "dialogue", text: `text${index}`, ...extra };
}

describe("groupLines", () => {
  it("連続する同一話者の台詞を1グループにまとめる", () => {
    const groups = groupLines([
      line(1, { speaker: "広" }),
      line(2, { speaker: "広" }),
      line(3, { speaker: "プロデューサー" }),
    ]);
    expect(groups).toHaveLength(2);
    expect(groups[0]).toMatchObject({ type: "dialogue", speaker: "広" });
    expect((groups[0] as { lines: Line[] }).lines).toHaveLength(2);
    expect(groups[1]).toMatchObject({ type: "dialogue", speaker: "プロデューサー" });
  });

  it("話者が戻ってきたら別グループになる", () => {
    const groups = groupLines([
      line(1, { speaker: "広" }),
      line(2, { speaker: "プロデューサー" }),
      line(3, { speaker: "広" }),
    ]);
    expect(groups.map((g) => (g.type === "dialogue" ? g.speaker : "choice"))).toEqual([
      "広",
      "プロデューサー",
      "広",
    ]);
  });

  it("選択肢は前後の話者が同じでも常に単独グループ", () => {
    const groups = groupLines([
      line(1, { speaker: "広" }),
      line(2, { type: "choice", text: "選択肢" }),
      line(3, { speaker: "広" }),
    ]);
    expect(groups.map((g) => g.type)).toEqual(["dialogue", "choice", "dialogue"]);
  });

  it("話者なし(ナレーション)同士も連続していればまとめる", () => {
    const groups = groupLines([line(1), line(2)]);
    expect(groups).toHaveLength(1);
    expect(groups[0]).toMatchObject({ type: "dialogue", speaker: undefined });
  });
});

describe("groupSegments", () => {
  it("flashback-in / flashback-out に挟まれた区間だけ flashback: true になる", () => {
    const segments = groupSegments([
      line(1, { speaker: "広" }),
      line(2, { type: "flashback-in", text: "" }),
      line(3, { speaker: "千奈" }),
      line(4, { speaker: "広" }),
      line(5, { type: "flashback-out", text: "" }),
      line(6, { speaker: "広" }),
    ]);
    expect(segments.map((s) => s.flashback)).toEqual([false, true, false]);
    expect(segments[1].groups).toHaveLength(2);
  });

  it("マーカー行自体は groups に含まれない", () => {
    const segments = groupSegments([
      line(1, { type: "flashback-in", text: "" }),
      line(2, { speaker: "広" }),
      line(3, { type: "flashback-out", text: "" }),
    ]);
    expect(segments).toHaveLength(1);
    const flat = segments[0].groups.flatMap((g) =>
      g.type === "dialogue" ? g.lines.map((l) => l.index) : [g.line.index],
    );
    expect(flat).toEqual([2]);
  });

  it("回想が無ければ 1 セグメントにまとまる", () => {
    const segments = groupSegments([line(1, { speaker: "広" }), line(2, { speaker: "広" })]);
    expect(segments).toHaveLength(1);
    expect(segments[0].flashback).toBe(false);
  });

  it("flashback-out が無いまま終わっても最後まで回想扱いになる", () => {
    const segments = groupSegments([
      line(1, { speaker: "広" }),
      line(2, { type: "flashback-in", text: "" }),
      line(3, { speaker: "広" }),
    ]);
    expect(segments.map((s) => s.flashback)).toEqual([false, true]);
  });
});
