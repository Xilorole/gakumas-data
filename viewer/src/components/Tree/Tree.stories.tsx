import type { Meta, StoryObj } from "@storybook/react";
import { Tree } from "./Tree";
import { buildTree } from "../../lib/tree";
import type { ManifestEntry } from "../../types";

// STEP1 (親愛度) と Pアイドル・サポートコミュを混ぜ、"開いたまま" と
// "閉じたまま" のグループが両方見えるようにしたサンプルツリー。
const entries: ManifestEntry[] = [
  ...Array.from({ length: 3 }, (_, i) => ({
    path: `アイドルコミュ/篠澤広/親愛度/STEP1/第${i + 1}話.json`,
    segments: ["アイドルコミュ", "篠澤広", "親愛度", "STEP1", `第${i + 1}話`],
  })),
  {
    path: "アイドルコミュ/篠澤広/Pアイドル/[ガラクタロード]篠澤広/1話.json",
    segments: [
      "アイドルコミュ",
      "篠澤広",
      "Pアイドル",
      "[ガラクタロード]篠澤広",
      "1話",
    ],
  },
  {
    path: "サポートコミュ/進化したお弁当、気になる/あいさつしてもいい？.json",
    segments: [
      "サポートコミュ",
      "進化したお弁当、気になる",
      "あいさつしてもいい？",
    ],
  },
  {
    path: "サポートコミュ/進化したお弁当、気になる/もうひとりの妹？.json",
    segments: ["サポートコミュ", "進化したお弁当、気になる", "もうひとりの妹？"],
  },
];

const root = buildTree(entries);

const meta = {
  title: "枠/Tree",
  component: Tree,
  parameters: { layout: "padded" },
  args: {
    root,
    selectedPath: null,
    selectedGroups: null,
    visible: null,
    onSelect: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320, background: "var(--surface)" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

// 「アイドルコミュ」「篠澤広」は浅い階層なので自動で開き、
// 「親愛度」「STEP1」「Pアイドル」は閉じたまま表示される
// （現状の挙動を再現）。開閉混在の状態でフォルダアイコンの切り替わりを確認する。
export const 開閉混在: Story = {};
