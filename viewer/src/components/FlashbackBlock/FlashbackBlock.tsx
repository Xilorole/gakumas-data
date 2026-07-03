import type { ReactNode } from "react";
import { History } from "lucide-react";
import { cn } from "../../lib/cn";
import styles from "./FlashbackBlock.module.css";

export interface FlashbackBlockProps {
  children: ReactNode;
}

/**
 * 回想（過去の出来事）区間を、セピア調の背景で囲んでひとまとまりに示す。
 * 内側の吹き出しは --surface-2 をローカル上書きしているため、
 * LineView 側を変更せずに配色だけ変わる。
 */
export function FlashbackBlock({ children }: FlashbackBlockProps) {
  return (
    <div className={styles.wrap}>
      <span className={cn(styles.chip, styles.badge)}>
        <History size={13} strokeWidth={2.2} />
        回想
      </span>
      {children}
    </div>
  );
}
