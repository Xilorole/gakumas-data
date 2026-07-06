import { MoreHorizontal } from "lucide-react";
import { cn } from "../../lib/cn";
import styles from "./SceneBreak.module.css";

export interface SceneBreakProps {
  /** 回想の内側で起きた場面転換なら true（線・アイコンをセピア調にする）。 */
  flashback?: boolean;
}

/**
 * 場面転換（カット割り）を示す軽い区切り。ラベルは付けず、線+アイコンだけ。
 * 回想の外なら地の会話と同じ配色、回想の内側ならセピア調にして
 * 「まだ回想の中で場面だけ変わった」ことがわかるようにする。
 */
export function SceneBreak({ flashback }: SceneBreakProps) {
  return (
    <div className={cn(styles.line, flashback && styles.flashback)}>
      <MoreHorizontal size={16} strokeWidth={2} className={styles.icon} />
    </div>
  );
}
