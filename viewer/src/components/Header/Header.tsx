import { useTheme } from "../../hooks/useTheme";
import styles from "./Header.module.css";

export interface HeaderProps {
  /** 総話数。 */
  total: number;
  /** 要確認が残る話数。 */
  review: number;
}

export function Header({ total, review }: HeaderProps) {
  const { dark, toggle } = useTheme();
  const stats = `${total} 話` + (review ? ` ・ 要確認 ${review}` : "");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h1 className={styles.title}>gakumas-data</h1>
          <p className={styles.desc}>学マス コミュ文字起こしビューア</p>
        </div>
        <div className={styles.tools}>
          {total > 0 && <span className={styles.stats}>{stats}</span>}
          <button
            type="button"
            className={styles.toggle}
            onClick={toggle}
            aria-label={dark ? "ライトテーマに切り替え" : "ダークテーマに切り替え"}
            title="ライト / ダーク切り替え"
          >
            <span aria-hidden="true">{dark ? "☀" : "☾"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
