import type { Meta, StoryObj } from "@storybook/react";
import { SpeakerLabel } from "./SpeakerLabel";

const meta = {
  title: "本文/SpeakerLabel",
  component: SpeakerLabel,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      // LineGroup の 2 カラムグリッドを模した文脈（点は 1 カラム目・名前は 2 カラム目）
      <div style={{ display: "grid", gridTemplateColumns: "10px minmax(0, 1fr)", columnGap: 10 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SpeakerLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 広: Story = { args: { speaker: "広" } };
export const プロデューサー: Story = { args: { speaker: "プロデューサー" } };
export const 未知の話者: Story = { args: { speaker: "名もなき生徒" } };
