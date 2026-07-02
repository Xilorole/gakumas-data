import type { CSSProperties } from "react";
import { speakerHue } from "../../lib/speaker";
import styles from "./SpeakerLabel.module.css";

export interface SpeakerLabelProps {
  speaker: string;
  /** 右寄せ（プロデューサーの発話）にするとき "end"。点は名前の右側に回る。 */
  align?: "start" | "end";
}

/**
 * 話者名ラベル（色分けの点＋名前）。カード先頭に 1 回だけ表示する。
 * 通常（align="start"）は点を 1 カラム目・名前を 2 カラム目に置き、
 * 本文の開始 X 座標と名前の開始 X 座標を揃える。
 * align="end"（プロデューサー）のときは、点と名前をまとめて 2 カラム目の右端に
 * 寄せる（点だけ左に取り残されないように、名前と一緒に右へ回す）。
 */
export function SpeakerLabel({ speaker, align = "start" }: SpeakerLabelProps) {
  const hue = speakerHue(speaker);
  const style = hue == null ? undefined : ({ "--spk-hue": String(hue) } as CSSProperties);

  if (align === "end") {
    return (
      <span className={styles.nameEnd} style={style}>
        {speaker}
        <span className={styles.dotInline} />
      </span>
    );
  }

  return (
    <>
      <span className={styles.dot} style={style} />
      <span className={styles.name} style={style}>
        {speaker}
      </span>
    </>
  );
}
