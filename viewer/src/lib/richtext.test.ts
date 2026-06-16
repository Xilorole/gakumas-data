import { describe, expect, it } from "vitest";
import { tokenizeRich } from "./richtext";

describe("tokenizeRich", () => {
  it("素の文はそのまま 1 テキストトークン", () => {
    expect(tokenizeRich("普通の文。")).toEqual([
      { type: "text", value: "普通の文。" },
    ]);
  });

  it("傍点を取り出す", () => {
    expect(tokenizeRich("ねえ、《《広さん》》。")).toEqual([
      { type: "text", value: "ねえ、" },
      { type: "bouten", children: [{ type: "text", value: "広さん" }] },
      { type: "text", value: "。" },
    ]);
  });

  it("ルビを base/reading に分ける", () => {
    expect(tokenizeRich("{一番星|プリマステラ}になる")).toEqual([
      { type: "ruby", base: "一番星", reading: "プリマステラ" },
      { type: "text", value: "になる" },
    ]);
  });

  it("傍点とルビが混在しても順序を保つ", () => {
    expect(tokenizeRich("《《ここ》》が{研鑽|けんさん}の場")).toEqual([
      { type: "bouten", children: [{ type: "text", value: "ここ" }] },
      { type: "text", value: "が" },
      { type: "ruby", base: "研鑽", reading: "けんさん" },
      { type: "text", value: "の場" },
    ]);
  });

  it("傍点の中のルビも再帰的に処理する", () => {
    expect(tokenizeRich("《《{一番星|プリマステラ}》》")).toEqual([
      {
        type: "bouten",
        children: [{ type: "ruby", base: "一番星", reading: "プリマステラ" }],
      },
    ]);
  });

  it("空文字は空配列", () => {
    expect(tokenizeRich("")).toEqual([]);
  });
});
