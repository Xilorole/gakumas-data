import type { Meta, StoryObj } from "@storybook/react";
import { ChoiceLine } from "./ChoiceLine";

const meta = {
  title: "本文/ChoiceLine",
  component: ChoiceLine,
  parameters: { layout: "padded" },
} satisfies Meta<typeof ChoiceLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 選択肢: Story = {
  args: { line: { index: 1, type: "choice", text: "追い詰められてあげる" } },
};
