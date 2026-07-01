import type { LineGroup as LineGroupData } from "../../lib/lineGroups";
import { SpeakerLabel } from "../SpeakerLabel/SpeakerLabel";
import { LineView } from "../LineView/LineView";
import { ChoiceLine } from "../ChoiceLine/ChoiceLine";
import { cn } from "../../lib/cn";
import styles from "./LineGroup.module.css";

export interface LineGroupProps {
  group: LineGroupData;
}

/** 台詞カード 1 枚（同一話者の連続台詞をまとめる）、または選択肢 1 件。 */
export function LineGroup({ group }: LineGroupProps) {
  if (group.type === "choice") {
    return <ChoiceLine line={group.line} />;
  }

  return (
    <div className={cn(styles.card, !group.speaker && styles.narration)}>
      {group.speaker && <SpeakerLabel speaker={group.speaker} />}
      {group.lines.map((line) => (
        <LineView key={line.index} line={line} />
      ))}
    </div>
  );
}
