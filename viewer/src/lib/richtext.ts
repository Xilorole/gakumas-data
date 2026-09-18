/**
 * 本文テキストの軽量マークアップを構文木（トークン列）に変換する純関数。
 *
 *   傍点 : 《《…》》     → { type: "bouten", children }
 *   ルビ : {漢字|よみ}  → { type: "ruby", base, reading }
 *
 * 本文に埋め込まれたプレースホルダ `{producer}` は、トークン化の前に
 * プロデューサーの表示名へ展開する（`|` を含まないのでルビ記法とは衝突しない）。
 *
 * 傍点の中にルビが入る場合に備え、傍点の内側は再帰的にトークン化する。
 * 描画は components/RichText が担当する（ここは DOM 非依存で単体テスト可能）。
 */
import { PRODUCER_DISPLAY } from "./speaker";

export type RichToken =
  | { type: "text"; value: string }
  | { type: "bouten"; children: RichToken[] }
  | { type: "ruby"; base: string; reading: string };

const PATTERN = /《《([\s\S]+?)》》|\{([^{}|]+)\|([^{}|]+)\}/g;

const PRODUCER_PLACEHOLDER = /\{producer\}/g;

export function tokenizeRich(text: string): RichToken[] {
  const tokens: RichToken[] = [];
  if (!text) return tokens;

  text = text.replace(PRODUCER_PLACEHOLDER, PRODUCER_DISPLAY);
  const re = new RegExp(PATTERN.source, "g");
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      tokens.push({ type: "text", value: text.slice(last, m.index) });
    }
    if (m[1] !== undefined) {
      tokens.push({ type: "bouten", children: tokenizeRich(m[1]) });
    } else {
      tokens.push({ type: "ruby", base: m[2], reading: m[3] });
    }
    last = re.lastIndex;
  }
  if (last < text.length) {
    tokens.push({ type: "text", value: text.slice(last) });
  }
  return tokens;
}
