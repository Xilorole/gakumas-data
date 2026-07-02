import type { Meta, StoryObj } from "@storybook/react";
import { SpeakerLabel } from "./SpeakerLabel";

const meta = {
  title: "本文/SpeakerLabel",
  component: SpeakerLabel,
  parameters: { layout: "padded" },
} satisfies Meta<typeof SpeakerLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 広: Story = { args: { speaker: "広" } };
export const プロデューサー: Story = { args: { speaker: "プロデューサー" } };
export const プロデューサー_右寄せ: Story = {
  args: { speaker: "プロデューサー", align: "end" },
};
export const 未知の話者: Story = { args: { speaker: "名もなき生徒" } };
