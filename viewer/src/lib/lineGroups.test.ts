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
    expect(groups[1]).toMatchObject({
      type: "dialogue",
      speaker: "プロデューサー",
    });
  });

  it("話者が戻ってきたら別グループになる", () => {
    const groups = groupLines([
      line(1, { speaker: "広" }),
      line(2, { speaker: "プロデューサー" }),
      line(3, { speaker: "広" }),
    ]);
    expect(
      groups.map((g) => (g.type === "dialogue" ? g.speaker : "choice")),
    ).toEqual(["広", "プロデューサー", "広"]);
  });

  it("選択肢は前後の話者が同じでも常に単独グループ", () => {
    const groups = groupLines([
      line(1, { speaker: "広" }),
      line(2, { type: "choice", text: "選択肢" }),
      line(3, { speaker: "広" }),
    ]);
    expect(groups.map((g) => g.type)).toEqual([
      "dialogue",
      "choice",
      "dialogue",
    ]);
  });

  it("話者なし(ナレーション)同士も連続していればまとめる", () => {
    const groups = groupLines([line(1), line(2)]);
    expect(groups).toHaveLength(1);
    expect(groups[0]).toMatchObject({ type: "dialogue", speaker: undefined });
  });

  it("scene_transition は前後の話者が同じでも常に単独グループになる", () => {
    const groups = groupLines([
      line(1, { speaker: "広" }),
      line(2, { type: "scene_transition", text: "" }),
      line(3, { speaker: "広" }),
    ]);
    expect(groups.map((g) => g.type)).toEqual([
      "dialogue",
      "scene-break",
      "dialogue",
    ]);
  });
});

describe("groupSegments", () => {
  it("in_flashback フラグの区間だけ flashback: true になる", () => {
    const segments = groupSegments([
      line(1, { speaker: "広" }),
      line(2, { speaker: "千奈", in_flashback: true }),
      line(3, { speaker: "広", in_flashback: true }),
      line(4, { speaker: "広" }),
    ]);
    expect(segments.map((s) => s.flashback)).toEqual([false, true, false]);
    expect(segments[1].groups).toHaveLength(2);
  });

  it("回想区間の台詞はそのまま groups に含まれる", () => {
    const segments = groupSegments([
      line(1, { speaker: "広", in_flashback: true }),
    ]);
    expect(segments).toHaveLength(1);
    expect(segments[0].flashback).toBe(true);
    const flat = segments[0].groups.flatMap((g) =>
      g.type === "dialogue" ? g.lines.map((l) => l.index) : [],
    );
    expect(flat).toEqual([1]);
  });

  it("回想が無ければ 1 セグメントにまとまる", () => {
    const segments = groupSegments([
      line(1, { speaker: "広" }),
      line(2, { speaker: "広" }),
    ]);
    expect(segments).toHaveLength(1);
    expect(segments[0].flashback).toBe(false);
  });

  it("回想が末尾まで続いても回想扱いになる", () => {
    const segments = groupSegments([
      line(1, { speaker: "広" }),
      line(2, { speaker: "広", in_flashback: true }),
      line(3, { speaker: "広", in_flashback: true }),
    ]);
    expect(segments.map((s) => s.flashback)).toEqual([false, true]);
  });

  it("scene_transition はセグメントを割らず、同じセグメントの groups の一員になる", () => {
    const segments = groupSegments([
      line(1, { speaker: "広" }),
      line(2, { type: "scene_transition", text: "" }),
      line(3, { speaker: "広" }),
    ]);
    expect(segments).toHaveLength(1);
    expect(segments[0].groups.map((g) => g.type)).toEqual([
      "dialogue",
      "scene-break",
      "dialogue",
    ]);
  });

  it("回想の中の scene_transition はそのセグメントに留まる（箱が分割されない）", () => {
    const segments = groupSegments([
      line(1, { speaker: "広", in_flashback: true }),
      line(2, { type: "scene_transition", text: "" }),
      line(3, { speaker: "千奈", in_flashback: true }),
    ]);
    expect(segments).toHaveLength(1);
    expect(segments[0].flashback).toBe(true);
    expect(segments[0].groups.map((g) => g.type)).toEqual([
      "dialogue",
      "scene-break",
      "dialogue",
    ]);
  });
});
