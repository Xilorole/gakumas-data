import type { Meta, StoryObj } from "@storybook/react";
import { Transcript } from "./Transcript";
import type { ManifestEntry } from "../../types";
import { buildTree } from "../../lib/tree";

const entry: ManifestEntry = {
  path: "アイドルコミュ/篠澤広/親愛度/STEP4/第37話.json",
  segments: ["アイドルコミュ", "篠澤広", "親愛度", "STEP4", "第37話"],
  session: "hiro_37",
  line_count: 6,
  needs_review: 1,
};

// 前後の話ボタンの動作確認用に、前後のエピソードも含めたツリーを組む
const root = buildTree([
  {
    path: "アイドルコミュ/篠澤広/親愛度/STEP4/第36話.json",
    segments: ["アイドルコミュ", "篠澤広", "親愛度", "STEP4", "第36話"],
  },
  entry,
  {
    path: "アイドルコミュ/篠澤広/親愛度/STEP4/第38話.json",
    segments: ["アイドルコミュ", "篠澤広", "親愛度", "STEP4", "第38話"],
  },
]);

const meta = {
  title: "本文/Transcript",
  component: Transcript,
  parameters: { layout: "fullscreen" },
  args: { root, onNavigate: () => {} },
  decorators: [
    (Story) => (
      <>
        {/* 本番ではこの上に実際のアプリヘッダー(高さ var(--header-h))が乗る。
            Transcript 自身のヘッダーはその下に sticky するので、ダミーの
            高さぶんを置いておかないと、Story 単体では sticky が本来より
            早く貼り付いてしまい本文の頭に重なって見える（本番では起きない）。 */}
        <div style={{ height: "var(--header-h)", background: "var(--surface-2)" }} />
        <Story />
      </>
    ),
  ],
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
          { index: 1, type: "dialogue", text: "――放課後、保健室。" },
          { index: 2, type: "dialogue", speaker: "広", text: "プロデューサー。" },
          {
            index: 3,
            type: "dialogue",
            speaker: "広",
            text: "わたし、{一番星|プリマステラ}になる、よ。",
          },
          {
            index: 4,
            type: "dialogue",
            speaker: "広",
            text: "ううん。《《トップアイドル》》になる。",
          },
          { index: 5, type: "choice", text: "一緒に行きましょう" },
          {
            index: 6,
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

// スクロールしてもヘッダー（パンくず・タイトル・前後の話ボタン）が
// 画面上に貼り付いたままになることを確認するための、行数の多いStory。
// Storybookのキャンバス自体をスクロール領域にするため、高さを制限した
// div でラップしている（sticky はどの祖先がスクロールしても機能する）。
const 長い会話 = Array.from({ length: 24 }, (_, i) => {
  const speakers = ["広", "プロデューサー", "千奈", "佑芽"] as const;
  const speaker = speakers[i % speakers.length];
  return {
    index: i + 1,
    type: "dialogue" as const,
    speaker,
    text: `${speaker}の台詞、その${i + 1}。スクロールしてもヘッダーが上に残るか確認する、ね。`,
  };
});

export const 長い話_スクロールでヘッダーがsticky: Story = {
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div style={{ height: "70vh", overflow: "auto" }}>
        {/* 本番ではこの上に実際のアプリヘッダー(高さ var(--header-h))が乗る。
            Transcript のヘッダーはその下に sticky するので、ここでは
            見た目の目安として同じ高さのダミーバーを置いている。 */}
        <div
          style={{
            height: "var(--header-h)",
            background: "var(--surface-2)",
            borderBottom: "1px solid var(--border)",
            display: "grid",
            placeItems: "center",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
          }}
        >
          （アプリヘッダーの位置・ダミー）
        </div>
        <Story />
      </div>
    ),
  ],
  args: {
    entry,
    state: { status: "ready", data: { lines: 長い会話 } },
  },
};
