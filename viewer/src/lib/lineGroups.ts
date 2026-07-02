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
