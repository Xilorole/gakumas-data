import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties } from "react";
import { speakerHue } from "../../lib/speaker";
import { RichText } from "../RichText/RichText";

/**
 * 意匠案の検討用。発話（1行）ごとに角丸四角形で囲む案を 3 種類並べて比較する。
 * まだ本番の LineView/LineGroup には組み込んでいない（見た目を選ぶための Storybook 専用）。
 */

interface Line {
  speaker?: string;
  text: string;
}

const conversation: Line[] = [
  { speaker: "広", text: "聞いてほしい。" },
  { speaker: "広", text: "……まずは現状を確認する、ね。" },
  { speaker: "広", text: "わたし、{一番星|プリマステラ}になる、よ。" },
  { speaker: "プロデューサー", text: "だから……どうしてそうなるんですか。" },
  { speaker: "千奈", text: "先に相談してくださいませぇ〜！" },
];

function Bubble({
  line,
  style,
}: {
  line: Line;
  style: CSSProperties;
}) {
  return (
    <div style={{ ...style, padding: "8px 14px", marginTop: 8 }}>
      <RichText text={line.text} />
    </div>
  );
}

const meta = {
  title: "本文/意匠案_発話バブル",
  render: () => <></>,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const A_淡いグレー: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      {conversation.map((line, i) => (
        <Bubble
          key={i}
          line={line}
          style={{
            background: "var(--surface-2)",
            borderRadius: 14,
            border: "none",
          }}
        />
      ))}
    </div>
  ),
};

export const B_話者色の淡いティント: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      {conversation.map((line, i) => {
        const hue = speakerHue(line.speaker);
        return (
          <Bubble
            key={i}
            line={line}
            style={{
              background: hue == null ? "var(--surface-2)" : `hsl(${hue} 55% 95%)`,
              borderRadius: 14,
              border: "none",
            }}
          />
        );
      })}
    </div>
  ),
};

export const C_白背景ソフトシャドウ: Story = {
  render: () => (
    <div style={{ maxWidth: 480 }}>
      {conversation.map((line, i) => (
        <Bubble
          key={i}
          line={line}
          style={{
            background: "var(--surface)",
            borderRadius: 14,
            border: "none",
            boxShadow: "var(--shadow-soft)",
          }}
        />
      ))}
    </div>
  ),
};
