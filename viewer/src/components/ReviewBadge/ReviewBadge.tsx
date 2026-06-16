import { cn } from "../../lib/cn";
import styles from "./ReviewBadge.module.css";

export interface ReviewBadgeProps {
  count: number;
  /** アクセント面の上に乗せるとき（選択中の話ボタンなど）。 */
  onAccent?: boolean;
}

/** 「要確認 N」バッジ。OCR/LLM で確定しきれなかった行数を示す。 */
export function ReviewBadge({ count, onAccent }: ReviewBadgeProps) {
  if (!count) return null;
  return (
    <span className={cn(styles.badge, onAccent && styles.onAccent)}>
      要確認 {count}
    </span>
  );
}
