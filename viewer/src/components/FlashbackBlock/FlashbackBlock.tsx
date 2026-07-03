import type { ReactNode } from "react";
import { History } from "lucide-react";
import { cn } from "../../lib/cn";
import styles from "./FlashbackBlock.module.css";

/**
 * 回想ブロックの見せ方（比較検討用に複数用意している。既定は "divider"）。
 * - divider: 区切り線+ラベルのみ。吹き出しの色は変えない（軽量）
 * - bar: 左端にアクセントバーを通し、常時「回想中」であることを示す
 * - sepia: ブロック全体をセピア調の背景で囲み、吹き出しの色も合わせて変える
 */
export type FlashbackVariant = "divider" | "bar" | "sepia";

export interface FlashbackBlockProps {
  variant?: FlashbackVariant;
  children: ReactNode;
}

/** 回想（過去の出来事）区間を、地の会話と見分けがつくようひとまとまりに囲む。 */
export function FlashbackBlock({ variant = "divider", children }: FlashbackBlockProps) {
  const chip = (
    <span className={styles.chip}>
      <History size={13} strokeWidth={2.2} />
      回想
    </span>
  );

  if (variant === "bar") {
    return (
      <div className={styles.barWrap}>
        {chip}
        <div className={styles.barContent}>{children}</div>
      </div>
    );
  }

  if (variant === "sepia") {
    return (
      <div className={styles.sepiaWrap}>
        <span className={cn(styles.chip, styles.sepiaChip)}>
          <History size={13} strokeWidth={2.2} />
          回想
        </span>
        {children}
      </div>
    );
  }

  return (
    <div className={styles.dividerWrap}>
      <div className={styles.dividerLine}>{chip}</div>
      {children}
      <div className={styles.dividerLine} />
    </div>
  );
}
