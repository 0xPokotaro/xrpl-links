// XRPL 開発・学習リソースのデータ
// リンクを追加・修正するときはこのファイルだけを編集してください。
//
// item の書き方:
//   { icon, name, url, note, tags }           … 1つのリンク
//   { icon, name, links: [{label, url}], note } … 複数のリンク（X / Website / GitHub など）
// tags に使える値: "公式" "日本語" "無料枠"（絞り込みボタンになります）
// items が空のグループはページに表示されません。
window.XRPL_LINKS = {
  title: "XRPL 開発・学習リソース",
  lead: "XRP Ledger（XRPL）で開発・学習するためのリンク集です。初めての方は「1. 学ぶ」から順に見てください。",
  updated: "2026-11-23",
  tags: ["公式", "日本語", "無料枠"],
  sections: [
    {
      id: "learn",
      title: "1. 学ぶ",
      description: "まずはここから。XRPLの基礎から開発の始め方までを学べます。",
      groups: [
        {
          title: "学習サイト",
          items: [
            { icon: "📚", name: "XRPL Learning Portal", url: "https://learn.xrpl.org/", note: "XRPLの基礎知識から開発まで学べる学習サイト", tags: ["日本語"] },
            { icon: "📚", name: "XRPL Sample Code", url: "https://github.com/XRPLJapan/xrpl-sample-code", note: "XRPLのスクリプト集", tags: ["日本語"] },
            { icon: "📚", name: "XRPL Dojo for Developer", url: "https://xrpldojo.dev/", note: "XRPLの学習サイト", tags: ["日本語"] },
            { icon: "📚", name: "Xaman Developer Education", url: "https://learn.xumm.dev/", note: "Xamanが提供するXRP Ledgerの学習サイト" },
            { icon: "📚", name: "XRPL Commons Training Materials", url: "https://github.com/XRPL-Commons/xrpl-training-2026-january", note: "XRPL Commons のトレーニング教材（2026年1月）" }
          ]
        }
      ],
      videos: [
        { id: "BZ3QLa3-ZRU", title: "XRPL Hackathon TOKYO 2025 KICK OFF", note: "XRPLで開発するために必要な基礎知識を知ることができます。" },
        { id: "1EyefA6x_tA", title: "【XRPL入門】ビジネス活用で広がる！XRP Ledgerの魅力", note: "XRPL / XRP の歴史から特徴までを知ることができます。" }
      ]
    },
    {
      id: "build",
      title: "2. 開発する",
      description: "ドキュメント、ウォレット、テスト用ツール、ノードなど、開発で使うサービスです。",
      groups: [
        {
          title: "公式ドキュメント",
          items: [
            { icon: "📘", name: "XRPL Docs", url: "https://xrpl.org/ja/docs", note: "開発者向けのドキュメントをまとめたページ", tags: ["公式", "日本語"] },
            { icon: "📘", name: "公開サーバー一覧", url: "https://xrpl.org/ja/docs/tutorials/public-servers", note: "誰でも接続できる公開サーバーのリスト", tags: ["公式", "日本語"] },
            { icon: "📘", name: "XRPL Standards（XLS）", url: "https://xls.xrpl.org/", note: "XRPLに新しい機能や仕様変更を導入するための提案仕様", tags: ["公式"] }
          ]
        },
        {
          title: "ライブラリ",
          items: [
            { icon: "📦", name: "xrpl.js", note: "JavaScript / TypeScript 用のXRPLライブラリ", tags: ["公式"], links: [
              { label: "Docs", url: "https://js.xrpl.org/" },
              { label: "GitHub", url: "https://github.com/XRPLF/xrpl.js" }
            ] },
            { icon: "📦", name: "xrpl-py", note: "Python 用のXRPLライブラリ", tags: ["公式"], links: [
              { label: "Docs", url: "https://xrpl-py.readthedocs.io/" },
              { label: "GitHub", url: "https://github.com/XRPLF/xrpl-py" }
            ] }
          ]
        },
        {
          title: "ウォレット",
          items: [
            { icon: "👛", name: "Xaman", url: "https://xaman.app/developers", note: "モバイルウォレット。秘密鍵をWebに渡さずにDApp連携できる" },
            { icon: "👛", name: "GemWallet", url: "https://gemwallet.app/docs/user-guide/introduction", note: "ブラウザ拡張ウォレット。シンプルで扱いやすい" }
          ]
        },
        {
          title: "テスト用ツール",
          items: [
            { icon: "🚰", name: "XRP Faucets", url: "https://xrpl.org/resources/dev-tools/xrp-faucets", note: "テストネット・デブネット用のXRPを受け取れる", tags: ["公式"] },
            { icon: "📤", name: "Transaction Sender", url: "https://xrpl.org/resources/dev-tools/tx-sender", note: "テストネットで指定したアドレスに取引を送れる", tags: ["公式"] },
            { icon: "🔍", name: "RPC Tool", url: "https://xrpl.org/resources/dev-tools/rpc-tool", note: "アカウントや取引の情報をブラウザで確認できる", tags: ["公式"] },
            { icon: "🔌", name: "WebSocket API Tool", url: "https://xrpl.org/resources/dev-tools/websocket-api-tool", note: "ブラウザからXRPLのAPIを試せる", tags: ["公式"] },
            { icon: "🧰", name: "XRPL Services", url: "https://xrpl.services/", note: "XRPLのツール集" },
            { icon: "💵", name: "RLUSD Faucet", url: "https://tryrlusd.com/", note: "テスト用のRLUSDを受け取れる" },
            { icon: "🧪", name: "XRPL Amendment Testing Suite", url: "https://tests.xrpl-commons.org/", note: "最新のXRPL機能をテストできる" }
          ]
        },
        {
          title: "ノード（NaaS）",
          description: "NaaS（Node as a Service）は、自分でノードを運用せずに、APIでXRPLにアクセスできるサービスです。",
          items: [
            { icon: "🌐", name: "All That Node", url: "https://www.allthatnode.com/", note: "XRPLに対応したNaaS", tags: ["無料枠"] },
            { icon: "🌐", name: "Nodit", url: "https://www.nodit.io/", note: "XRPLに対応したNaaS" },
            { icon: "⚡", name: "QuickNode", url: "https://www.quicknode.com/chains/xrpl", note: "メインネット・テストネットに対応したNaaS", tags: ["無料枠"] }
          ]
        },
        {
          title: "エクスプローラ",
          description: "アカウントや取引の状態をブラウザで確認できるサービスです。",
          items: [
            { icon: "🔍", name: "XRP Ledger Explorer", url: "https://livenet.xrpl.org/", note: "XRPLの標準エクスプローラ", tags: ["公式"] },
            { icon: "🔍", name: "Bithomp", url: "https://bithomp.com/ja", note: "オールインワンのエクスプローラ。開発者向け機能もある", tags: ["日本語"] },
            { icon: "🔍", name: "XRPSCAN", url: "https://xrpscan.com/", note: "開発者・分析者向けのエクスプローラ" }
          ]
        },
        {
          title: "データ・オラクル",
          items: [
            { icon: "📊", name: "Dune", url: "https://dune.com/blockchains/xrpl", note: "XRPLのデータを分析できるSaaS" },
            { icon: "🔮", name: "DIA Oracles", url: "https://www.diadata.org/docs/guides/chain-specific-guide/xrp-ledger-xrpl", note: "XRPLの価格オラクル（メインネットで無料）" }
          ]
        },
        {
          title: "関連チェーン",
          items: [
            { icon: "⛓️", name: "XRPL EVM Sidechain", url: "https://www.xrplevm.org/", note: "XRPLのEVM互換サイドチェーン" },
            { icon: "⛓️", name: "Xahau Network", url: "https://xahau.network/", note: "XRPLから派生した、Hooks（スマートコントラクト）に対応したネットワーク" }
          ]
        },
        {
          title: "AI",
          items: [
            { icon: "🦞", name: "ClawCredit", url: "https://www.claw.credit/", note: "AIエージェント専用に設計されたクレジット決済インフラ" }
          ]
        }
      ]
    },
    {
      id: "community",
      title: "3. コミュニティ・フィードバック",
      description: "世界各地のXRPLコミュニティと、開発者の声を届ける窓口です。",
      groups: [
        {
          title: "コミュニティ",
          items: [
            { icon: "🇯🇵", name: "XRPL Japan", note: "日本のコミュニティ。GitHubでサンプルコードを公開", links: [
              { label: "Website", url: "https://xrpl.jp/" },
              { label: "X", url: "https://x.com/XRPLJapan" },
              { label: "GitHub", url: "https://github.com/XRPLJapan" }
            ] },
            { icon: "🌐", name: "XRPL Commons", note: "グローバルコミュニティ", links: [
              { label: "Website", url: "https://www.xrpl-commons.org/" },
              { label: "X", url: "https://x.com/xrpl_commons" }
            ] },
            { icon: "🇰🇷", name: "XRPL Korea", note: "韓国のコミュニティ", links: [{ label: "X", url: "https://x.com/xrplkorea" }] },
            { icon: "🇨🇦", name: "XRPL Canada", note: "カナダのコミュニティ", links: [{ label: "X", url: "https://x.com/XRPLCanada" }] },
            { icon: "🇲🇾", name: "XRPL Malaysia", note: "マレーシアのコミュニティ", links: [{ label: "X", url: "https://x.com/xrplmalaysia" }] },
            { icon: "🇦🇺", name: "Wave of Innovation", note: "オーストラリアのコミュニティ", links: [{ label: "X", url: "https://x.com/wave_of_innov" }] },
            { icon: "🌍", name: "XRPL Africa", note: "アフリカのコミュニティ", links: [{ label: "X", url: "https://x.com/XRPL_AF" }] }
          ]
        },
        {
          title: "フィードバック・素材",
          items: [
            { icon: "💬", name: "XRPL Developer Feedback", url: "https://docs.google.com/forms/d/e/1FAIpQLSelUaPFyBfO1g0Dgqo2DfSNhJxRbza7qdDwJIM15F29YoZgjQ/viewform", note: "XRPLのフィードバックフォーム。Ripple開発チームに声が届きます" },
            { icon: "📝", name: "Crypto Logos", url: "https://cryptologos.cc/", note: "暗号資産のロゴ素材集" }
          ]
        }
      ]
    }
  ]
};
