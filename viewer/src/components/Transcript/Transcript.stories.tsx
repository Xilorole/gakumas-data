import type { Meta, StoryObj } from "@storybook/react";
import { Transcript } from "./Transcript";
import type { ManifestEntry } from "../../types";

const entry: ManifestEntry = {
  path: "アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",
  segments: ["アイドルコミュ", "篠澤広", "親愛度", "STEP4", "第37話"],
  session: "hiro_37",
  line_count: 5,
  needs_review: 1,
};

const meta = {
  title: "本文/Transcript",
  component: Transcript,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Transcript>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 未選択: Story = {
  args: { entry: null, state: { status: "idle" } },
};

export const 読み込み中: Story = {
  args: { entry, state: { status: "loading" } },
};

export const 表示: Story = {
  args: {
    entry,
    state: {
      status: "ready",
      data: {
        lines: [
          { index: 1, type: "dialogue", speaker: "広", text: "プロデューサー。" },
          {
            index: 2,
            type: "dialogue",
            speaker: "広",
            text: "わたし、{一番星|プリマステラ}になる、よ。",
          },
          {
            index: 3,
            type: "dialogue",
            speaker: "広",
            text: "ううん。《《トップアイドル》》になる。",
          },
          { index: 4, type: "choice", text: "一緒に行きましょう" },
          {
            index: 5,
            type: "dialogue",
            speaker: "プロデューサー",
            text: "こちらこそ。ありがとう、広さん。",
            needs_review: true,
          },
        ],
      },
    },
  },
};

export const エラー: Story = {
  args: { entry, state: { status: "error", error: "本文取得失敗 (HTTP 404)" } },
};
