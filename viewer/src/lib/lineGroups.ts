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

/**
 * 場面転換（カット割り）の区切り。choice 同様に常に単独グループで、
 * 前後の話者が同じでもまとめない。回想の内側で起きれば回想の groups の
 * 一員として残るため、「回想の中の場面転換」は箱を分割せず内部の区切りに
 * なる（回想の外なら地の会話の区切りとして同じ扱いになる）。
 */
export interface SceneBreakGroup {
  type: "scene-break";
}

export type LineGroup = DialogueGroup | ChoiceGroup | SceneBreakGroup;

/** 現在 / 回想のどちらかに属する連続区間（groupLines でさらに話者ごとにまとめた形）。 */
export interface Segment {
  flashback: boolean;
  groups: LineGroup[];
}

/**
 * 台詞配列を、in_flashback フラグの切り替わりを境界にしてセグメントに分ける。
 * 回想は行の in_flashback フラグ（区間に一括付与）で表されるので、その値が変わった
 * ところでセグメントを切る。
 * scene_transition は回想状態を変えない（in_flashback は台詞行にのみ付き、scene_transition には
 * 付かない。回想の中の場面転換でセグメントを割って箱を分断しないため）。
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
    // scene_transition は回想状態を変えない（回想の中の場面転換で箱を分断しない）。
    if (line.type !== "scene_transition") {
      const fb = line.in_flashback ?? false;
      if (fb !== flashback) {
        flush();
        flashback = fb;
      }
    }
    run.push(line);
  }
  flush();

  return segments;
}

/**
 * 台詞配列を、選択肢・場面転換は単独・連続する同一話者の台詞はひとまとめに
 * グループ化する。
 */
export function groupLines(lines: Line[]): LineGroup[] {
  const groups: LineGroup[] = [];

  for (const line of lines) {
    if (line.type === "choice") {
      groups.push({ type: "choice", line });
      continue;
    }
    if (line.type === "scene_transition") {
      groups.push({ type: "scene-break" });
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
