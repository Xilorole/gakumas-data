import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "枠/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 既定: Story = { args: { total: 59, review: 0 } };
export const 要確認あり: Story = { args: { total: 59, review: 4 } };
