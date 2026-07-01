import type { Meta, StoryObj } from "@storybook/react";
import { LineView } from "./LineView";

const meta = {
  title: "本文/LineView",
  component: LineView,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      // LineGroup の 2 カラムグリッドを模した文脈（本文は 2 カラム目に乗る）
      <div style={{ display: "grid", gridTemplateColumns: "10px minmax(0, 1fr)", columnGap: 10 }}>
        <Story />
      </div>
    ),
  ],
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
