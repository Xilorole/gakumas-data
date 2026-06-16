/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..");

/**
 * 開発サーバで、リポジトリルート（viewer の 1 つ上）にあるデータ JSON
 * （index.json と アイドルコミュ/… など）を配信する。
 *
 * 本番は GitHub Actions が dist にデータを同梱するので不要。dev だけの橋渡し。
 * viewer 配下の JSON（package.json 等）は対象外にして取り違えを防ぐ。
 */
function serveRepoData(): Plugin {
  const viewerDir = here;
  return {
    name: "serve-repo-data",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url?.split("?")[0] ?? "";
        if (!raw.endsWith(".json")) return next();
        let rel: string;
        try {
          rel = decodeURIComponent(raw).replace(/^\/+/, "");
        } catch {
          return next();
        }
        const file = path.resolve(repoRoot, rel);
        if (
          !file.startsWith(repoRoot + path.sep) ||
          file.startsWith(viewerDir + path.sep) ||
          !fs.existsSync(file) ||
          !fs.statSync(file).isFile()
        ) {
          return next();
        }
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}

export default defineConfig(({ mode }) => ({
  // プロジェクトページ（xilorole.github.io/gakumas-data/）配下に置くため base を付ける。
  // dev は "/"。本番ビルドのみ "/gakumas-data/"。
  base: mode === "production" ? "/gakumas-data/" : "/",
  plugins: [react(), serveRepoData()],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  test: {
    environment: "node",
    globals: true,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
}));
