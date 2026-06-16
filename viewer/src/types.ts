/** マニフェスト 1 エントリ（index.json の 1 要素。本文 lines は含まない軽量メタ）。 */
export interface ManifestEntry {
  /** リポジトリルートからの相対パス（例: "アイドルコミュ/篠澤広/.../1話.json"）。 */
  path: string;
  /** path をグループ階層＋末尾の話ラベルに分解したもの。 */
  segments: string[];
  session?: string;
  title?: string | null;
  idol?: string | null;
  comm_type?: string | null;
  exported_at?: string;
  line_count?: number;
  needs_review?: number;
}

export type Manifest = ManifestEntry[];

/** 台詞 / 選択肢 1 行。 */
export interface Line {
  index: number;
  type?: "dialogue" | "choice";
  /** 話者名（choice では無い）。 */
  speaker?: string;
  /** 本文。傍点 《《…》》 と ルビ {漢字|よみ} 記法を含みうる。 */
  text: string;
  needs_review?: boolean;
}

/** 1 話ぶんの文字起こし（各 JSON ファイルの中身）。 */
export interface Transcript {
  session?: string;
  title?: string | null;
  idol?: string | null;
  comm_type?: string | null;
  exported_at?: string;
  line_count?: number;
  needs_review?: number;
  lines: Line[];
}
