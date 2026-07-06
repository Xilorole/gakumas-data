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

/**
 * 台詞 / 選択肢 / 場面転換 1 行。
 *
 * type は行の構造的種別:
 * - dialogue: 通常の台詞（speaker を持ちうる）。
 * - choice: プレイヤーの選択肢（speaker なし）。
 * - scene_transition: 現在の話の中での場面転換（カット割り）。本文なしの区切り行。
 *
 * 回想は type ではなく in_flashback フラグで表す（回想区間の台詞行に一括で付く）。
 * パイプライン側が区間を検出してフラグを立てるので、ビューアも同じフラグをそのまま読む
 * （変換なしの単一スキーマ）。scene_transition には in_flashback は付かない（回想の中の
 * 場面転換でも区間を割らないため、groupSegments は scene_transition では回想状態を変えない）。
 *
 * inner_voice は心の中演出の行フラグ（dialogue のみ意味を持つ）。
 */
export interface Line {
  index: number;
  type?: "dialogue" | "choice" | "scene_transition";
  /** 話者名（choice / scene_transition では無い）。 */
  speaker?: string;
  /** 本文。傅点 《《…》》 と ルビ {漢字|よみ} 記法を含みうる。 */
  text: string;
  needs_review?: boolean;
  /** 回想区間内の台詞か（区間全体に一括付与される）。 */
  in_flashback?: boolean;
  /** 心の中演出（吹き出し輪郭のぼかし）の行か。 */
  inner_voice?: boolean;
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
