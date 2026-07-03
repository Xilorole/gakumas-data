import type { ReactNode } from "react";
import { History } from "lucide-react";
import { cn } from "../../lib/cn";
import styles from "./FlashbackBlock.module.css";

/**
 * 回想ブロックの見せ方（比較検討用に複数用意している。既定は "divider"）。
 * - divider: 区切り線+ラベルのみ。吹き出しの色は変えない（軽量）
 * - bar: 左端にアクセントバーを通し、常時「回想中」であることを示す
 * - sepia: ブロック全体をセピア調の背景で囲み、吹き出しの色も合わせて変える
 * - dividerSepia: 箱で囲むのはやめて区切り線だけ残し、吹き出しの色・文字色もセピアに寄せる（A+Cの折衷）
 * - misty: 背後にセピア色の靄（ぼかした単色の装飾レイヤー）を焚く。ぼかすのは装飾だけで本文は一切ぼかさない
 */
export type FlashbackVariant = "divider" | "bar" | "sepia" | "dividerSepia" | "misty";

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

  if (variant === "dividerSepia") {
    return (
      <div className={cn(styles.dividerWrap, styles.dividerTint)}>
        <div className={styles.dividerLine}>{chip}</div>
        {children}
        <div className={styles.dividerLine} />
      </div>
    );
  }

  if (variant === "misty") {
    return (
      <div className={styles.mistyWrap}>
        {/* CSS の filter: blur() は等方（縦横同じ強さ）にしかぼかせないため、
            縦方向だけをぼかす feGaussianBlur(stdDeviation="0 Y") を SVG フィルタ
            として定義し、.mistyGlow から url(#misty-vblur) で参照する。
            同じ id が複数 FlashbackBlock 分重複しうるが、url(#id) 参照は
            最初に見つかった定義を使うだけなので描画上は問題ない。 */}
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden focusable="false">
          <defs>
            <filter id="misty-vblur" x="-20%" y="-60%" width="140%" height="220%">
              <feGaussianBlur stdDeviation="0 16" />
            </filter>
          </defs>
        </svg>
        <div aria-hidden className={styles.mistyGlow} />
        <span className={cn(styles.chip, styles.mistyChip)}>
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
