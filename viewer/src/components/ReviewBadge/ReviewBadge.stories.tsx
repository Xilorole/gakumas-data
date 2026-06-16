import type { Meta, StoryObj } from "@storybook/react";
import { ReviewBadge } from "./ReviewBadge";

const meta = {
  title: "部品/ReviewBadge",
  component: ReviewBadge,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ReviewBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 既定: Story = { args: { count: 3 } };
export const アクセント面: Story = {
  args: { count: 3, onAccent: true },
  parameters: { backgrounds: { default: "accent" } },
};
export const ゼロは非表示: Story = { args: { count: 0 } };
