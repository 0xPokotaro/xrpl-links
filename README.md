# XRPL 開発・学習リソース

XRP Ledger（XRPL）で開発・学習するためのリンク集サイトです。ビルド不要の静的サイト（HTML / CSS / JS）です。

## 構成

```
index.html        ページ本体
assets/data.js    リンクデータ（編集するのはここだけ）
assets/app.js     描画・検索・絞り込み
assets/style.css  スタイル（ライト / ダーク自動切替）
.nojekyll         GitHub Pages 用
```

## リンクの追加・編集

`assets/data.js` の該当グループの `items` に1行追加します。

```js
// 1つのリンク
{ icon: "📦", name: "xrpl.js", url: "https://js.xrpl.org/", note: "JavaScript / TypeScript 用のライブラリ", tags: ["公式"] },
// 複数のリンク（コミュニティなど）
{ icon: "🇯🇵", name: "XRPL Japan", note: "日本のコミュニティ", links: [{ label: "X", url: "https://x.com/XRPLJapan" }] },
```

- `items` が空のグループはページに表示されません。
- `tags` は `"公式"` `"日本語"` `"無料枠"` が使えます。上部の絞り込みボタンと連動します。新しいタグを使うときは `data.js` 冒頭の `tags` にも追加してください。
- 「（公式）」「（日本語対応）」などは説明文に書かず、`tags` で表してください。
- 編集したら `updated` の日付も更新してください。

## ローカルで確認

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## ホスティング

静的ファイルをそのまま配信できるサービスならどこでも動きます。

- **GitHub Pages**: `main` に push すると `.github/workflows/pages.yml` が自動でデプロイします（Settings → Pages → Source は「GitHub Actions」）。
  デプロイ時に `index.html` の `?v=__VERSION__` がコミットIDに置き換わり、更新がすぐブラウザに反映されます。
- **Cloudflare Pages / Netlify / Vercel**: ビルドコマンドなし、公開ディレクトリはリポジトリのルート
