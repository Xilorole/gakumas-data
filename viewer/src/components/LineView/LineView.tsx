import type { Line } from "../../types";
import { cn } from "../../lib/cn";
import { RichText } from "../RichText/RichText";
import styles from "./LineView.module.css";

export interface LineViewProps {
  line: Line;
  /** ナレーション（話者なし）など、吹き出し化したくない行で true にする。 */
  plain?: boolean;
}

/** 台詞本文 1 行（話者名はグループ先頭で SpeakerLabel が表示するのでここでは扱わない）。 */
export function LineView({ line, plain }: LineViewProps) {
  return (
    <div className={cn(styles.text, plain && styles.plain, line.needs_review && styles.review)}>
      <RichText text={line.text} />
    </div>
  );
}
