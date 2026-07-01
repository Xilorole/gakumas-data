import type { CSSProperties } from "react";
import { speakerHue } from "../../lib/speaker";
import styles from "./SpeakerLabel.module.css";

export interface SpeakerLabelProps {
  speaker: string;
}

/** 話者名ラベル（色分けの点＋名前）。カード先頭に 1 回だけ表示する。 */
export function SpeakerLabel({ speaker }: SpeakerLabelProps) {
  const hue = speakerHue(speaker);
  const style = hue == null ? undefined : ({ "--spk-hue": String(hue) } as CSSProperties);

  return (
    <span className={styles.speaker} style={style}>
      {speaker}
    </span>
  );
}
