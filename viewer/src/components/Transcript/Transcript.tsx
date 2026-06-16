import type { ManifestEntry } from "../../types";
import type { TranscriptState } from "../../hooks/useTranscript";
import { LineView } from "../LineView/LineView";
import styles from "./Transcript.module.css";

export interface TranscriptProps {
  /** 選択中エントリ（未選択は null）。 */
  entry: ManifestEntry | null;
  /** 本文の取得状態。 */
  state: TranscriptState;
}

export function Transcript({ entry, state }: TranscriptProps) {
  if (!entry) {
    return (
      <article className={styles.transcript} tabIndex={-1}>
        <div className={styles.placeholder}>
          <p className={styles.mark}>☁</p>
          <p>左の一覧から、話を選んで、ね。</p>
        </div>
      </article>
    );
  }

  const groups = entry.segments.slice(0, -1);
  const leaf = entry.segments.at(-1) ?? "";

  return (
    <article className={styles.transcript} tabIndex={-1}>
      <header className={styles.head}>
        <nav className={styles.breadcrumb} aria-label="パンくず">
          {groups.map((seg, i) => (
            <span key={i} className={styles.crumbGroup}>
              <span className={styles.crumb}>{seg}</span>
              {i < groups.length - 1 && <span className={styles.sep}>›</span>}
            </span>
          ))}
        </nav>
        <h2 className={styles.title}>{entry.title ?? leaf}</h2>
        <div className={styles.meta}>
          {entry.line_count != null && (
            <span className={styles.chip}>{entry.line_count} 行</span>
          )}
          {entry.needs_review ? (
            <span className={`${styles.chip} ${styles.chipReview}`}>
              要確認 {entry.needs_review}
            </span>
          ) : null}
          {entry.session && (
            <span className={`${styles.chip} ${styles.chipSession}`}>
              {entry.session}
            </span>
          )}
        </div>
      </header>

      {state.status === "loading" && <p className={styles.muted}>読み込み中…</p>}
      {state.status === "error" && (
        <p className={styles.error}>読み込みに失敗: {state.error}</p>
      )}
      {state.status === "ready" && state.data && (
        <div className={styles.lines}>
          {state.data.lines.map((line) => (
            <LineView key={line.index} line={line} />
          ))}
        </div>
      )}
    </article>
  );
}
