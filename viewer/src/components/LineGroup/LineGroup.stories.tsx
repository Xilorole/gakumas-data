import type { Meta, StoryObj } from "@storybook/react";
import { LineGroup } from "./LineGroup";

const meta = {
  title: "本文/LineGroup",
  component: LineGroup,
  parameters: { layout: "padded" },
} satisfies Meta<typeof LineGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 単発の台詞: Story = {
  args: {
    group: {
      type: "dialogue",
      speaker: "広",
      lines: [{ index: 1, type: "dialogue", speaker: "広", text: "プロデューサー。" }],
    },
  },
};

export const 同一話者の連続台詞_名前は先頭のみ: Story = {
  args: {
    group: {
      type: "dialogue",
      speaker: "広",
      lines: [
        { index: 1, type: "dialogue", speaker: "広", text: "聞いてほしい。" },
        { index: 2, type: "dialogue", speaker: "広", text: "……まずは現状を確認する、ね。" },
        {
          index: 3,
          type: "dialogue",
          speaker: "広",
          text: "わたし、{一番星|プリマステラ}になる、よ。",
        },
      ],
    },
  },
};

export const 要確認を含む: Story = {
  args: {
    group: {
      type: "dialogue",
      speaker: "千奈",
      lines: [
        { index: 1, type: "dialogue", speaker: "千奈", text: "あら、篠澤さん。" },
        {
          index: 2,
          type: "dialogue",
          speaker: "千奈",
          text: "先に相談してくださいませぇ〜！",
          needs_review: true,
        },
      ],
    },
  },
};

export const ナレーション_話者なし: Story = {
  args: {
    group: {
      type: "dialogue",
      speaker: undefined,
      lines: [
        { index: 1, type: "dialogue", text: "――数日後。" },
        { index: 2, type: "dialogue", text: "初星学園、保健室。" },
      ],
    },
  },
};

export const 選択肢: Story = {
  args: {
    group: { type: "choice", line: { index: 1, type: "choice", text: "追い詰められてあげる" } },
  },
};

export const 複数行の発話が3回連続: Story = {
  // 各発話（Line）自体が複数行(\n入り)で、かつ同一話者がそれを3回連続で行うケース。
  // 吹き出し内の折り返しと、吹き出し同士の詰め方が同時に確認できる。
  args: {
    group: {
      type: "dialogue",
      speaker: "ろんしろ",
      lines: [
        {
          index: 1,
          type: "dialogue",
          speaker: "ろんしろ",
          text: "バラエティ番組に出演した広さんが、\n打ち合わせを無視して、\n激辛を注文した瞬間ですね。",
        },
        {
          index: 2,
          type: "dialogue",
          speaker: "ろんしろ",
          text: "補習組のおふたりから\n『はじめての友達』の称号を、\nはく奪しなければいけませんね。",
        },
        {
          index: 3,
          type: "dialogue",
          speaker: "ろんしろ",
          text: "きっと会場の全員が、\nあなたに共感していた。\n皆が篠澤広と共鳴していた。",
        },
      ],
    },
  },
};

export const 複数カード_別話者: Story = {
  // カード同士（話者の切り替え）の間隔を、単体では確認できないので複数並べて見る
  args: {
    group: {
      type: "dialogue",
      speaker: "広",
      lines: [{ index: 1, type: "dialogue", speaker: "広", text: "プロデューサー。" }],
    },
  },
  render: () => (
    <>
      <LineGroup
        group={{
          type: "dialogue",
          speaker: "広",
          lines: [
            { index: 1, type: "dialogue", speaker: "広", text: "プロデューサー。" },
            { index: 2, type: "dialogue", speaker: "広", text: "聞いてほしい。" },
            { index: 3, type: "dialogue", speaker: "広", text: "……まずは現状を確認する、ね。" },
          ],
        }}
      />
      <LineGroup
        group={{
          type: "dialogue",
          speaker: "プロデューサー",
          lines: [
            { index: 4, type: "dialogue", speaker: "プロデューサー", text: "なんでしょう。" },
          ],
        }}
      />
      <LineGroup
        group={{
          type: "dialogue",
          speaker: "千奈",
          lines: [
            { index: 5, type: "dialogue", speaker: "千奈", text: "あら、お取り込み中？" },
            {
              index: 6,
              type: "dialogue",
              speaker: "千奈",
              text: "先に相談してくださいませぇ〜！",
              needs_review: true,
            },
          ],
        }}
      />
    </>
  ),
};
