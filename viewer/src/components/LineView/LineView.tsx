import { Info } from "lucide-react";
import type { Line } from "../../types";
import { cn } from "../../lib/cn";
import { RichText } from "../RichText/RichText";
import styles from "./LineView.module.css";

export interface LineViewProps {
  line: Line;
  /** ナレーション（話者なし）など、吹き出し化したくない行で true にする。 */
  plain?: boolean;
}

const REVIEW_HINT = "発話が間違っているかもしれません。";

/**
 * 台詞本文 1 行（話者名はグループ先頭で SpeakerLabel が表示するのでここでは扱わない）。
 * 要確認行も見た目は他の発話と同じにし、右端中央に控えめな「！」マークだけ添える
 * （このビューアは基本的に正しいとされる本文を見せるためのもので、要確認行だけを
 * 強調してユーザーの注意を引くようなUXは意図的に避けている）。
 */
export function LineView({ line, plain }: LineViewProps) {
  return (
    <div className={cn(styles.text, plain && styles.plain, line.needs_review && styles.review)}>
      <RichText text={line.text} />
      {line.needs_review && (
        <span className={styles.mark} tabIndex={0} aria-label={REVIEW_HINT} title={REVIEW_HINT}>
          <Info size={13} strokeWidth={2.5} />
        </span>
      )}
    </div>
  );
}
