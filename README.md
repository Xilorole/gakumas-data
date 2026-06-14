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

## ビューア（GitHub Pages）

`docs/` に依存ゼロ・ビルド不要の静的ビューアを置く。`index.json` を読んでコミュ一覧を作り、
話を選ぶと該当 JSON を取得して台詞を表示する。

- **公開元は `main` ブランチの「root」**（`/docs` 配信ではない）。データ JSON はリポジトリ
  ルート配下にあり、`/docs` 配信だと配れないため。ビューアは `…github.io/gakumas-data/docs/`。
- GitHub Action は不要。データもビューアも同じ `main` に push 済み。Settings → Pages で
  Source を `main` / `/ (root)` に設定するだけ。
- ローカル確認: `python -m http.server` をリポジトリルートで起動し、`/docs/` を開く。

```
docs/
├── index.html   骨組み（CSS は後回し、class のみ）
└── app.js       index.json と各 JSON を fetch して描画（依存なし）
index.json       全 transcript の軽量メタ索引（自動生成）
```
