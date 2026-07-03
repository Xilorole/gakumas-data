import type { Line } from "../types";

/** 連続する同一話者の台詞をまとめた 1 グループ（名前は先頭だけ表示するため）。 */
export interface DialogueGroup {
  type: "dialogue";
  speaker?: string;
  lines: Line[];
}

/** 選択肢は常に単独グループ。 */
export interface ChoiceGroup {
  type: "choice";
  line: Line;
}

export type LineGroup = DialogueGroup | ChoiceGroup;

/** 現在 / 回想のどちらかに属する連続区間（groupLines でさらに話者ごとにまとめた形）。 */
export interface Segment {
  flashback: boolean;
  groups: LineGroup[];
}

/**
 * 台詞配列を、flashback-in / flashback-out マーカー行を境界にしてセグメントに分ける。
 * マーカー行自体は演出（フェード）の発生イベントであって台詞ではないため、
 * 境界として消費するだけで groups には含めない。
 * 各セグメント内は groupLines と同じ規則（選択肢は単独・連続する同一話者はまとめる）。
 */
export function groupSegments(lines: Line[]): Segment[] {
  const segments: Segment[] = [];
  let run: Line[] = [];
  let flashback = false;

  const flush = () => {
    if (run.length > 0) {
      segments.push({ flashback, groups: groupLines(run) });
      run = [];
    }
  };

  for (const line of lines) {
    if (line.type === "flashback-in") {
      flush();
      flashback = true;
      continue;
    }
    if (line.type === "flashback-out") {
      flush();
      flashback = false;
      continue;
    }
    run.push(line);
  }
  flush();

  return segments;
}

/** 台詞配列を、選択肢は単独・連続する同一話者の台詞はひとまとめにグループ化する。 */
export function groupLines(lines: Line[]): LineGroup[] {
  const groups: LineGroup[] = [];

  for (const line of lines) {
    if (line.type === "choice") {
      groups.push({ type: "choice", line });
      continue;
    }

    const last = groups.at(-1);
    if (last?.type === "dialogue" && last.speaker === line.speaker) {
      last.lines.push(line);
    } else {
      groups.push({ type: "dialogue", speaker: line.speaker, lines: [line] });
    }
  }

  return groups;
}
