import type { Meta, StoryObj } from "@storybook/react";
import { RichText } from "./RichText";

const meta = {
  title: "本文/RichText",
  component: RichText,
  parameters: { layout: "centered" },
  argTypes: { text: { control: "text" } },
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 素のテキスト: Story = {
  args: { text: "ふふ。……ままならないね。" },
};

export const 傍点: Story = {
  args: { text: "ねえ、《《広さん》》。だいすき。" },
};

export const ルビ: Story = {
  args: { text: "それが{一番星|プリマステラ}になる、ってこと。" },
};

export const 混在: Story = {
  args: {
    text: "《《ここ》》が{研鑽|けんさん}の場。{状況|しちゅえーしょん}は、わたしの趣味。",
  },
};
