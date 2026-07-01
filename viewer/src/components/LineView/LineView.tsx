import type { Line } from "../../types";
import { cn } from "../../lib/cn";
import { RichText } from "../RichText/RichText";
import styles from "./LineView.module.css";

export interface LineViewProps {
  line: Line;
}

/** 台詞本文 1 行（話者名はグループ先頭で SpeakerLabel が表示するのでここでは扱わない）。 */
export function LineView({ line }: LineViewProps) {
  return (
    <div className={cn(styles.text, line.needs_review && styles.review)}>
      <RichText text={line.text} />
    </div>
  );
}
