import { describe, expect, it } from "vitest";
import { groupLines } from "./lineGroups";
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
