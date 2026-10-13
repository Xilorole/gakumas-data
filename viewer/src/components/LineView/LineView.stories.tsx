import type { Meta, StoryObj } from "@storybook/react";
import { LineView } from "./LineView";
import { LineGroup } from "../LineGroup/LineGroup";
import { FlashbackBlock } from "../FlashbackBlock/FlashbackBlock";

const meta = {
  title: "本文/LineView",
  component: LineView,
  parameters: { layout: "padded" },
} satisfies Meta<typeof LineView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 本文: Story = {
  args: {
    line: {
      index: 1,
      type: "dialogue",
      speaker: "広",
      text: "ふふ。やっぱりアイドルって、ままならないね。",
    },
  },
};

export const 傍点とルビ: Story = {
  args: {
    line: {
      index: 2,
      type: "dialogue",
      speaker: "広",
      text: "わたしは《《広さん》》。{一番星|プリマステラ}になる、よ。",
    },
  },
};

export const 要確認: Story = {
  args: {
    line: {
      index: 3,
      type: "dialogue",
      speaker: "千奈",
      text: "先に相談してくださいませぇ〜！",
      needs_review: true,
    },
  },
};

export const 単一の発話が3行_実データ: Story = {
  // 1つの Line.text に改行が2つ入り、3行分の本文になる実例
  // （[ガラクタロード]篠澤広/2話.json index=19）。1つの吹き出しの中で
  // 折り返す（別の吹き出しに分割されない）ことを確認するためのケース。
  args: {
    line: {
      index: 19,
      type: "dialogue",
      speaker: "プロデューサー",
      text: "バラエティ番組に出演した広さんが、\n打ち合わせを無視して、\n激辛を注文した瞬間ですね。",
    },
  },
};

export const ト書きとセリフ: Story = {
  args: {
    line: { index: 2, type: "dialogue", text: "広が端末を差し出す。\n画面には、水色の石が写っている。" },
    plain: true,
  },
  render: ({ line }) => {
    const content = (
      <>
        <LineGroup
          group={{
            type: "dialogue",
            speaker: "広",
            lines: [{ index: 1, type: "dialogue", speaker: "広", text: "写真、見て。" }],
          }}
        />
        <LineGroup
          group={{
            type: "dialogue",
            lines: [
              line,
              { index: 3, type: "dialogue", text: "プロデューサーがうなずく。", needs_review: true },
            ],
          }}
        />
        <LineGroup
          group={{
            type: "dialogue",
            speaker: "プロデューサー",
            lines: [{ index: 4, type: "dialogue", speaker: "プロデューサー", text: "よく似合っています。" }],
          }}
        />
      </>
    );
    return (
      <div style={{ maxWidth: 390, padding: 18, background: "var(--surface)" }}>
        {content}
        <FlashbackBlock>{content}</FlashbackBlock>
      </div>
    );
  },
};
