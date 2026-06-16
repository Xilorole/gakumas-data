import type { CSSProperties } from "react";
import type { Line } from "../../types";
import { speakerHue } from "../../lib/speaker";
import { cn } from "../../lib/cn";
import { RichText } from "../RichText/RichText";
import styles from "./LineView.module.css";

export interface LineViewProps {
  line: Line;
}

/** 台詞 / 選択肢 1 行。話者名は色分け（色相のみ JS、明度は CSS でテーマ別）。 */
export function LineView({ line }: LineViewProps) {
  const isChoice = line.type === "choice";

  if (isChoice) {
    return (
      <div className={cn(styles.line, styles.choice, line.needs_review && styles.review)}>
        <span className={styles.text}>
          <RichText text={line.text} />
        </span>
      </div>
    );
  }

  const hue = speakerHue(line.speaker);
  const style = hue == null ? undefined : ({ "--spk-hue": String(hue) } as CSSProperties);

  return (
    <div className={cn(styles.line, styles.dialogue, line.needs_review && styles.review)}>
      <span className={styles.speaker} style={style}>
        {line.speaker ?? ""}
      </span>
      <span className={styles.text}>
        <RichText text={line.text} />
      </span>
    </div>
  );
}
