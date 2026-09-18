/** 話者名 → 色相(0..359)。既知キャラは固定、未知は名前ハッシュで安定配色。
 *  明度・彩度は CSS 側でテーマ（light/dark）ごとに調整する（LineView.module.css）。 */

const SPEAKER_HUE: Record<string, number> = {
  広: 187,
  篠澤広: 187,
  プロデューサー: 28,
  千奈: 330,
  倉本千奈: 330,
  佑芽: 18,
  花海佑芽: 18,
  星南: 265,
  十王星南: 265,
  owl: 145,
  学園長: 45,
};

export function speakerHue(name: string | undefined): number | null {
  if (!name) return null;
  const known = SPEAKER_HUE[name];
  if (known !== undefined) return known;
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.codePointAt(0)!) % 360;
  return h;
}

/** プロデューサーの表示名。公開データの本文は、プレイヤーが設定した自称名を
 *  `{producer}` プレースホルダで持つ（パイプライン側 `store/alias.py`）ので、
 *  描画時にこの名前へ展開する（lib/richtext）。 */
export const PRODUCER_DISPLAY = "プロデューサー";

/** プロデューサーの発話かどうか（公開データは「プロデューサー」に統一済みだが、
 *  古い自称カスタム名入りの JSON も右寄せできるよう残してある）。 */
const PRODUCER_NAMES = new Set([PRODUCER_DISPLAY, "ろんしろ"]);

export function isProducer(name: string | undefined): boolean {
  return name != null && PRODUCER_NAMES.has(name);
}
