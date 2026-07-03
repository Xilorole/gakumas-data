import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ManifestEntry } from "../../types";
import type { TranscriptState } from "../../hooks/useTranscript";
import type { TreeNode } from "../../lib/tree";
import { seriesNeighbors } from "../../lib/tree";
import { groupSegments } from "../../lib/lineGroups";
import { LineGroup } from "../LineGroup/LineGroup";
import { FlashbackBlock, type FlashbackVariant } from "../FlashbackBlock/FlashbackBlock";
import styles from "./Transcript.module.css";

export interface TranscriptProps {
  /** 選択中エントリ（未選択は null）。 */
  entry: ManifestEntry | null;
  /** 本文の取得状態。 */
  state: TranscriptState;
  /** 前後の話を探すためのツリー。 */
  root: TreeNode;
  /** 前後の話ボタンで別の話へ移動する。 */
  onNavigate: (path: string) => void;
  /** 回想ブロックの見せ方（比較検討用。既定は FlashbackBlock 側のデフォルト）。 */
  flashbackVariant?: FlashbackVariant;
}

export function Transcript({
  entry,
  state,
  root,
  onNavigate,
  flashbackVariant,
}: TranscriptProps) {
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
  const { prev, next } = seriesNeighbors(root, entry);

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
        <div className={styles.titleRow}>
          <button
            type="button"
            className={styles.navBtn}
            disabled={!prev}
            aria-label={prev ? `前の話: ${prev.title ?? prev.segments.at(-1)}` : "前の話はありません"}
            onClick={() => prev && onNavigate(prev.path)}
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className={styles.title}>{entry.title ?? leaf}</h2>
          <button
            type="button"
            className={styles.navBtn}
            disabled={!next}
            aria-label={next ? `次の話: ${next.title ?? next.segments.at(-1)}` : "次の話はありません"}
            onClick={() => next && onNavigate(next.path)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        {entry.needs_review ? (
          <div className={styles.meta}>
            <span className={`${styles.chip} ${styles.chipReview}`}>
              要確認 {entry.needs_review}
            </span>
          </div>
        ) : null}
      </header>

      {state.status === "loading" && <p className={styles.muted}>読み込み中…</p>}
      {state.status === "error" && (
        <p className={styles.error}>読み込みに失敗: {state.error}</p>
      )}
      {state.status === "ready" && state.data && (
        <div className={styles.lines}>
          {groupSegments(state.data.lines).map((segment, i) =>
            segment.flashback ? (
              <FlashbackBlock key={i} variant={flashbackVariant}>
                {segment.groups.map((group, j) => (
                  <LineGroup key={j} group={group} />
                ))}
              </FlashbackBlock>
            ) : (
              segment.groups.map((group, j) => (
                <LineGroup key={`${i}-${j}`} group={group} />
              ))
            ),
          )}
        </div>
      )}
    </article>
  );
}
