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
{ icon: "📦", name: "xrpl.js", type: "Library", url: "https://js.xrpl.org/", note: "JavaScript / TypeScript 用の公式ライブラリ" },
```

- `items` が空のグループ（現在は「ライブラリ」）はページに表示されません。
- `type` に新しい値を入れると、絞り込みボタンが自動で増えます。
- 編集したら `updated` の日付も更新してください。

## ローカルで確認

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## ホスティング

静的ファイルをそのまま配信できるサービスならどこでも動きます。

- **GitHub Pages**: リポジトリの Settings → Pages → Source を「Deploy from a branch」、ブランチを `main` / `/ (root)` に設定
- **Cloudflare Pages / Netlify / Vercel**: ビルドコマンドなし、公開ディレクトリはリポジトリのルート
