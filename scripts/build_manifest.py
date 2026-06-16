#!/usr/bin/env python3
"""全 transcript JSON を走査して `index.json`（マニフェスト）を生成する。

GitHub Pages は静的配信で実行時にディレクトリ一覧を返せない。ビューア(docs/)は
この `index.json` を読んで「どの話があるか」を知る。`gakumas-commu` の export から
呼ばれる（書き出しのたびに再生成）想定だが、単体でも実行できる（依存は標準ライブラリのみ）。

使い方:
    python scripts/build_manifest.py [REPO_ROOT]

REPO_ROOT 省略時はこのスクリプトの 1 つ上（リポジトリルート）を使う。
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

# マニフェスト自身と、ビューア(viewer)・補助スクリプト・CI 設定は走査対象から外す。
# docs/assets は旧構成の名残。残しても無害。
_EXCLUDE_DIRS = {"viewer", ".github", "assets", "docs", "scripts", "node_modules", ".git"}
_MANIFEST_NAME = "index.json"

# マニフェストに載せる軽量メタ（本文 lines は載せない）。
_META_KEYS = ("session", "title", "idol", "comm_type", "exported_at", "line_count", "needs_review")


def _iter_transcripts(root: Path):
    """root 配下の transcript JSON を相対パス昇順で返す（除外ディレクトリは飛ばす）。"""
    for path in sorted(root.rglob("*.json")):
        rel = path.relative_to(root)
        if rel.name == _MANIFEST_NAME:
            continue
        if rel.parts and rel.parts[0] in _EXCLUDE_DIRS:
            continue
        yield path, rel


def _entry(path: Path, rel: Path) -> dict | None:
    """transcript 1 ファイルをマニフェスト 1 エントリに変換（壊れた JSON は None）。"""
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (ValueError, OSError):
        return None
    if "lines" not in data:  # transcript ではない JSON は無視。
        return None
    entry = {"path": rel.as_posix(), "segments": [*rel.parts[:-1], rel.stem]}
    for key in _META_KEYS:
        if data.get(key) is not None:
            entry[key] = data[key]
    return entry


def build_manifest(root: Path) -> list[dict]:
    """root 配下の全 transcript からマニフェスト（エントリ配列）を組み立てる。"""
    entries = []
    for path, rel in _iter_transcripts(root):
        entry = _entry(path, rel)
        if entry is not None:
            entries.append(entry)
    return entries


def main(argv: list[str]) -> int:
    root = Path(argv[1]).resolve() if len(argv) > 1 else Path(__file__).resolve().parent.parent
    entries = build_manifest(root)
    out = root / _MANIFEST_NAME
    out.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"manifest: {out} ({len(entries)} entries)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
