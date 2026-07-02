import type { CSSProperties } from "react";
import { speakerHue } from "../../lib/speaker";
import { cn } from "../../lib/cn";
import styles from "./SpeakerLabel.module.css";

export interface SpeakerLabelProps {
  speaker: string;
  /** 右寄せ（プロデューサーの発話）にするとき "end"。 */
  align?: "start" | "end";
}

/**
 * 話者名ラベル（色分けした名前）。カード先頭に 1 回だけ表示する。
 * 会話がバブル形式（発話ごとに左右へ寄せる）になったことで、話者ごとに
 * 色分けされた名前と吹き出しの位置だけで誰の発話かは十分わかるため、
 * 目印の点は表示しない。
 */
export function SpeakerLabel({ speaker, align = "start" }: SpeakerLabelProps) {
  const hue = speakerHue(speaker);
  const style = hue == null ? undefined : ({ "--spk-hue": String(hue) } as CSSProperties);

  return (
    <span className={cn(styles.name, align === "end" && styles.end)} style={style}>
      {speaker}
    </span>
  );
}
