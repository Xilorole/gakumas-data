import type { CSSProperties } from "react";
import { speakerHue } from "../../lib/speaker";
import styles from "./SpeakerLabel.module.css";

export interface SpeakerLabelProps {
  speaker: string;
}

/**
 * 話者名ラベル（色分けの点＋名前）。カード先頭に 1 回だけ表示する。
 * 点は 1 カラム目・名前は 2 カラム目に置く（呼び出し側の 2 カラムグリッドに乗る）。
 * 本文の開始 X 座標と名前の開始 X 座標を揃えるため、Fragment で 2 要素を返す。
 */
export function SpeakerLabel({ speaker }: SpeakerLabelProps) {
  const hue = speakerHue(speaker);
  const style = hue == null ? undefined : ({ "--spk-hue": String(hue) } as CSSProperties);

  return (
    <>
      <span className={styles.dot} style={style} />
      <span className={styles.name} style={style}>
        {speaker}
      </span>
    </>
  );
}
