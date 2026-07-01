import type { Line } from "../../types";
import { RichText } from "../RichText/RichText";
import styles from "./ChoiceLine.module.css";

export interface ChoiceLineProps {
  line: Line;
}

/** 選択肢 1 行（中央のピル）。 */
export function ChoiceLine({ line }: ChoiceLineProps) {
  return (
    <div className={styles.choice}>
      <span className={styles.text}>
        <RichText text={line.text} />
      </span>
    </div>
  );
}
