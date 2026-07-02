import type { LineGroup as LineGroupData } from "../../lib/lineGroups";
import { isProducer } from "../../lib/speaker";
import { SpeakerLabel } from "../SpeakerLabel/SpeakerLabel";
import { LineView } from "../LineView/LineView";
import { ChoiceLine } from "../ChoiceLine/ChoiceLine";
import styles from "./LineGroup.module.css";

export interface LineGroupProps {
  group: LineGroupData;
}

/**
 * 台詞カード 1 枚（同一話者の連続台詞をまとめる）、または選択肢 1 件。
 * プロデューサーの発話だけ右寄せにする（他の話者と見分けやすくするため）。
 */
export function LineGroup({ group }: LineGroupProps) {
  if (group.type === "choice") {
    return <ChoiceLine line={group.line} />;
  }

  const align = isProducer(group.speaker) ? "end" : "start";

  return (
    <div className={styles.card}>
      {group.speaker && <SpeakerLabel speaker={group.speaker} align={align} />}
      {group.lines.map((line) => (
        <LineView key={line.index} line={line} plain={!group.speaker} align={align} />
      ))}
    </div>
  );
}
