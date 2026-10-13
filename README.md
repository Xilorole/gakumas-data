# gakumas-data

学園アイドルマスター（学マス）の**コミュ文字起こしデータ**を公開するリポジトリ。

[`gakumas-commu`](https://github.com/Xilorole/gakumas-commu) ツールで実機キャプチャ → OCR →
LLM 補正したコミュ（会話劇）を、構造化 JSON として保存する。

## ディレクトリ構成

ゲーム内のコミュ分類に沿って階層化する。

```
.
├── 初星コミュ/
│   └── <章>/                      例: 1章 初めまして初星学園
│       └── 第1話.json
├── アイドルコミュ/
│   └── <アイドル>/                例: 篠澤広
│       ├── 親愛度/
│       │   ├── STEP1/             第1〜10話
│       │   │   ├── 第1話.json
│       │   │   └── …
│       │   ├── STEP2/             第11〜20話
│       │   └── …
│       ├── プロデュース/
│       │   ├── 育成/              例: 定期公演『初』 / NEXT IDOL AUDITION / Hatsuboshi IDOL FESTIVAL
│       │   ├── 授業/              例: 広と勉強
│       │   ├── おでかけ/          例: 得意なことは？
│       │   └── 営業/              例: 街頭キャンペーン：大成功
│       ├── Pアイドル/
│       │   └── <カード名>/        例: [ガラクタロード]篠澤 広
│       │       ├── 1話.json
│       │       ├── 2話.json
│       │       └── 3話.json
│       └── その他/                例: 篠澤広誕生日 / プロデューサー誕生日
├── サポートコミュ/
│   └── <テーマ>/                  例: 私たちも成長していくぞ
│       └── トレーナー会議.json
└── イベントコミュ/
    └── <イベント名>/              例: 生徒会一年組の日常
        └── 第1話.json
```

### 命名規約

- **アイドル名・章・話**はゲーム内表記（日本語）をそのまま使う。
- **親愛度**は 10 話ごとに STEP が上がる（STEP1=第1〜10話, STEP2=第11〜20話, …）。
- ファイル名は話単位（`第8話.json` / `1話.json` / `<タイトル>.json`）。

`gakumas-commu` 側ではセッション名 `<アイドル略号>_<話数>`（例 `hiro_08`）を
`アイドルコミュ/篠澤広/親愛度/STEP1/第8話.json` へ自動ルーティングする
（`src/gakumas_commu/store/layout.py`）。プロデュース等はメタ情報で上書きする。

## JSON スキーマ

```jsonc
{
  "session": "hiro_08",       // 撮影セッション名
  "title": null,              // コミュタイトル（任意）
  "idol": null,               // アイドル（任意）
  "comm_type": null,          // コミュ種別（任意）
  "exported_at": "2026-...",  // 書き出し時刻(ISO8601)
  "line_count": 77,           // 本文ありの行数
  "needs_review": 0,          // 要確認フラグの残る行数
  "lines": [
    { "index": 1, "type": "dialogue", "speaker": "佑芽", "text": "…" },
    { "index": 5, "type": "choice", "text": "…" },
    { "index": 9, "type": "dialogue", "speaker": "広", "text": "…", "needs_review": true }
  ]
}
```

- `type`: `dialogue`（台詞） / `choice`（選択肢）
- `speaker`: 話者名（`choice` では省略）
- `needs_review`: OCR/補正で確定しきれなかった行にのみ `true`

## 更新方法

### 非公式オリジナルコミュ

創作作品は `アイドルコミュ/<アイドル>/オリジナルコミュ/<タイトル>.json` に置き、
公式コミュの文字起こしとは区別する。`comm_type` は `オリジナルコミュ` とし、タイトルと
冒頭にも非公式であること、独自設定がある場合はその前提を明記する。
同名の `.md` に完成稿・参考資料を保存し、JSON は既存スキーマでビューアに掲載する。
ト書きは話者なしの `dialogue`、場面間は `scene_transition`、心の声は
`inner_voice: true` とする。現行ビューアでも判別できるよう、心の声の話者表記は
`広（心の声）` のように明示する。JSON を追加したら `index.json` にも登録する。

「服の下にも」のJSONは、公式コミュの文字起こし（親愛度第24・37話、
ガラクタロード1話）の改行・発話単位を参考に、文節や心情の切り替わりで手動整形している。
1項目は原則1〜2行とし、長い独白は複数項目へ分割する。文字数だけで機械的に折り返さず、
本文・句読点・話者・心の声の区分は保持する。Markdownは読物としての段落構成を保つ。

収録作品: [篠澤広「服の下にも」](アイドルコミュ/篠澤広/オリジナルコミュ/服の下にも.md)
（19歳・プロ活動3年の独自未来設定）。

### 実機キャプチャからのエクスポート

`gakumas-commu` リポジトリで:

```bash
# .env に公開先と push 設定（このリポジトリの作業ツリーを指す）
#   GAKUMAS_EXPORT_DIR=../gakumas-data
#   GAKUMAS_EXPORT_PUSH=true
uv run gakumas export <session>     # 該当話の JSON を生成し、commit & push
```

export 時に `scripts/build_manifest.py` が自動で走り、`index.json`（ビューア用の索引）を
同じ commit に含める。手動で作り直すなら:

```bash
python scripts/build_manifest.py     # 全 JSON を走査して index.json を再生成
```

## ビューア（React + Vite SPA / GitHub Pages）

`viewer/` が **React + Vite + TypeScript** の SPA。`index.json` を読んでコミュ一覧（折りたたみ
ツリー）を作り、話を選ぶと該当 JSON を取得して台詞を表示する。傍点（`《《…》》`）とルビ
（`{漢字|よみ}`）もレンダリングする。**Storybook** でコンポーネント単位の調整ができる。

### デプロイの仕組み（重要）

データ JSON はリポジトリルート（`アイドルコミュ/…`）にあり、SPA は `viewer/dist` にビルド
される。この両方を配るため、**Pages の公開元は「GitHub Actions」**にする。`.github/workflows/
pages.yml` が ① `viewer` をビルド → ② データ JSON を `dist` に同梱 → ③ Pages にデプロイする。

> ⚠️ 一度だけ手動設定が必要: リポジトリ **Settings → Pages → Build and deployment →
> Source = 「GitHub Actions」** に切り替える（旧来の `main` / `root` から変更）。

- `main` への push でワークフローが走り、`…github.io/gakumas-data/` に**直接ビューアが開く**
  （README は出ない）。SPA の `base` は `/gakumas-data/`。
- ルーティングは **URL ハッシュ**（例 `#%E3%82%A2%E3%82%A4...`）。共有・ブックマーク・
  リロードに耐える（SPA の 404 問題が起きない）。ライト/ダーク・絞り込み検索つき。

### ローカル開発

```bash
cd viewer
npm install
npm run dev          # 開発サーバ。データ JSON はルートから自動配信（vite.config の橋渡し）
npm run build        # 本番ビルド（型チェック + vite build → dist）
npm run test         # 純ロジックの単体テスト（vitest）
npm run storybook    # コンポーネントカタログ（http://localhost:6006）
```

### 構成（クリーンアーキテクチャ）

DOM 非依存の純ロジック（`lib/`）と、描画コンポーネント（`components/`）を分離。状態は
React フック（`hooks/`）に閉じ込め、テーマ等はトークン CSS で切り替える。

```
viewer/
├── index.html
├── vite.config.ts          base / dev データ橋渡し / vitest 設定
├── .storybook/             Storybook 設定（テーマ切替デコレータつき）
└── src/
    ├── main.tsx  App.tsx   エントリ / 合成ルート
    ├── types.ts            ドメイン型（Manifest / Transcript / Line）
    ├── lib/                純関数: richtext(傍点/ルビ) · tree(階層化/絞り込み) · speaker · api
    ├── hooks/              useManifest · useTranscript · useHashSelection · useTheme
    └── components/         RichText · LineView · Tree · Sidebar · Header · Transcript
                            （各 .tsx + .module.css + .stories.tsx）
```

データの索引 `index.json` はルートに置き、`scripts/build_manifest.py` が生成する（不変）。
```
index.json               全 transcript の軽量メタ索引（自動生成）
scripts/build_manifest.py  index.json を再生成
```
