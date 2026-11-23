// XRPL 開発・学習リソースのデータ
// リンクを追加・修正するときはこのファイルだけを編集してください。
// items が空のグループはページに表示されません。
window.XRPL_LINKS = {
  title: "XRPL 開発・学習リソース",
  lead: "XRP Ledger（XRPL）で開発・学習するためのリンク集です。初めての方は「1. 学ぶ」から順に見てください。",
  updated: "2026-11-23",
  sections: [
    {
      id: "learn",
      title: "1. 学ぶ",
      groups: [
        {
          title: "学習サイト",
          items: [
            { icon: "📚", name: "XRPL Learning Portal", type: "Learn", url: "https://learn.xrpl.org/", note: "XRPLの基礎知識から開発まで学ぶことができる学習サイト（日本語対応）" },
            { icon: "📚", name: "XRPL Sample Code", type: "Learn", url: "https://github.com/XRPLJapan/xrpl-sample-code", note: "XRPLスクリプト集（日本語対応）" },
            { icon: "📚", name: "XRPL Dojo for Developer", type: "Learn", url: "https://xrpldojo.dev/", note: "XRPL学習サイト（日本語対応）" },
            { icon: "📚", name: "Xaman Developer Education", type: "Learn", url: "https://learn.xumm.dev/", note: "Xamanが提供しているXRP Ledgerの学習サイト" },
            { icon: "📚", name: "XRPL Commons Training Materials", type: "Learn", url: "https://github.com/XRPL-Commons/xrpl-training-2026-january", note: "XRPL Commons のトレーニング教材（2026年1月）" }
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
      groups: [
        {
          title: "公式ドキュメント",
          items: [
            { icon: "📘", name: "XRPL Docs - 開発者向けリソース", type: "Documents", url: "https://xrpl.org/ja/docs", note: "開発者向けのドキュメントをまとめたページ" },
            { icon: "📘", name: "XRPL Docs - 公開サーバー", type: "Documents", url: "https://xrpl.org/ja/docs/tutorials/public-servers", note: "公開されているサーバーリスト" },
            { icon: "📘", name: "XRPL Standards（XLS）", type: "Documents", url: "https://xls.xrpl.org/", note: "XRPLに新しい機能や仕様変更を導入するための公式な提案仕様" }
          ]
        },
        {
          title: "ライブラリ",
          items: []
        },
        {
          title: "ウォレット",
          items: [
            { icon: "👛", name: "Xaman", type: "Wallet", url: "https://xaman.app/developers", note: "モバイルウォレット / 秘密鍵をWebに渡さずにDApp連携が可能" },
            { icon: "👛", name: "GemWallet", type: "Wallet", url: "https://gemwallet.app/docs/user-guide/introduction", note: "ブラウザ拡張ウォレット / シンプルで扱いやすい" }
          ]
        },
        {
          title: "テスト用ツール",
          items: [
            { icon: "📌", name: "XRPL Services", type: "Tool", url: "https://xrpl.services/", note: "XRPLツール集" },
            { icon: "📌", name: "RLUSD Faucet", type: "Tool", url: "https://tryrlusd.com/", note: "RLUSDを受け取ることができる" },
            { icon: "📌", name: "XRPL Amendment Testing Suite", type: "Tool", url: "https://tests.xrpl-commons.org/", note: "最新のXRPL機能をテストすることができる" },
            { icon: "📤", name: "Transaction Sender", type: "Tool", url: "https://xrpl.org/resources/dev-tools/tx-sender", note: "テストネットで指定したアドレスに取引を送れる（公式）" },
            { icon: "🔍", name: "RPC Tool", type: "Tool", url: "https://xrpl.org/resources/dev-tools/rpc-tool", note: "アカウントや取引の情報をブラウザで確認できる（公式）" },
            { icon: "🔌", name: "WebSocket API Tool", type: "Tool", url: "https://xrpl.org/resources/dev-tools/websocket-api-tool", note: "ブラウザからXRPLのAPIを試せる（公式）" },
            { icon: "🚰", name: "XRP Faucets", type: "Tool", url: "https://xrpl.org/resources/dev-tools/xrp-faucets", note: "テストネット・デブネット用のXRPを受け取れる（公式）" }
          ]
        },
        {
          title: "ノード・データ",
          description: "NaaS（Node as a Service）は、自分でノードを運用せずに、APIでXRPLにアクセスできるサービスです。",
          items: [
            { icon: "🌐", name: "All That Node", type: "NaaS", url: "https://www.allthatnode.com/", note: "XRPLに対応したNaaS（無料枠あり）" },
            { icon: "🌐", name: "Nodit", type: "NaaS", url: "https://www.nodit.io/", note: "XRPLに対応したNaaS" },
            { icon: "⚡", name: "QuickNode", type: "NaaS", url: "https://www.quicknode.com/chains/xrpl", note: "XRPLに対応したNaaS（メインネット・テストネット、無料枠あり）" },
            { icon: "📊", name: "Dune", type: "SaaS", url: "https://dune.com/blockchains/xrpl", note: "XRPLデータを分析できるSaaS" },
            { icon: "🔍", name: "XRP Ledger Explorer", type: "Explorer", url: "https://livenet.xrpl.org/", note: "XRPL公式が提供するエクスプローラ" },
            { icon: "🔍", name: "Bithomp", type: "Explorer", url: "https://bithomp.com/ja", note: "オールインワンXRPLエクスプローラ / 開発者機能も提供されている" },
            { icon: "🔍", name: "XRPSCAN", type: "Explorer", url: "https://xrpscan.com/", note: "開発者・分析者向けのXRPLエクスプローラ" },
            { icon: "🔮", name: "DIA Oracles", type: "Oracle", url: "https://www.diadata.org/docs/guides/chain-specific-guide/xrp-ledger-xrpl", note: "XRPLの価格オラクル（メインネットで無料）" }
          ]
        },
        {
          title: "関連チェーン",
          items: [
            { icon: "⛓️", name: "XRPL EVM Sidechain", type: "Blockchain", url: "https://www.xrplevm.org/", note: "XRPLのEVM互換サイドチェーン" },
            { icon: "⛓️", name: "Xahau Network", type: "Blockchain", url: "https://xahau.network/", note: "XRPLから派生した、Hooks（スマートコントラクト）に対応したネットワーク" }
          ]
        },
        {
          title: "AI",
          items: [
            { icon: "🦞", name: "ClawCredit", type: "AI", url: "https://www.claw.credit/", note: "AIエージェント専用に設計されたクレジット決済インフラ" }
          ]
        }
      ]
    },
    {
      id: "community",
      title: "3. コミュニティ・フィードバック",
      groups: [
        {
          title: "コミュニティ",
          items: [
            { icon: "🌐", name: "XRPL Commons", type: "X", url: "https://x.com/xrpl_commons", note: "Global Community" },
            { icon: "🌐", name: "XRPL Commons", type: "Website", url: "https://www.xrpl-commons.org/", note: "XRPL Commons の公式サイト" },
            { icon: "🇯🇵", name: "XRPL Japan", type: "X", url: "https://x.com/XRPLJapan", note: "日本のコミュニティ" },
            { icon: "🇯🇵", name: "XRPL Japan", type: "Website", url: "https://xrpl.jp/", note: "XRPL Japan の公式サイト" },
            { icon: "🇯🇵", name: "XRPL Japan", type: "GitHub", url: "https://github.com/XRPLJapan", note: "XRPL Japan のGitHub（サンプルコードなど）" },
            { icon: "🇰🇷", name: "XRPL Korea", type: "X", url: "https://x.com/xrplkorea", note: "韓国のコミュニティ" },
            { icon: "🇨🇦", name: "XRPL Canada", type: "X", url: "https://x.com/XRPLCanada", note: "カナダのコミュニティ" },
            { icon: "🇲🇾", name: "XRPL Malaysia", type: "X", url: "https://x.com/xrplmalaysia", note: "マレーシアのコミュニティ" },
            { icon: "🌍", name: "XRPL Africa", type: "X", url: "https://x.com/XRPL_AF", note: "アフリカのコミュニティ" },
            { icon: "🇦🇺", name: "Wave of Innovation", type: "X", url: "https://x.com/wave_of_innov", note: "オーストラリアのコミュニティ" }
          ]
        },
        {
          title: "フィードバック・素材",
          items: [
            { icon: "💁", name: "XRPL Developer Feedback", type: "Form", url: "https://docs.google.com/forms/d/e/1FAIpQLSelUaPFyBfO1g0Dgqo2DfSNhJxRbza7qdDwJIM15F29YoZgjQ/viewform", note: "XRPLのフィードバックフォーム / Ripple開発チームに皆様の声が届きます！" },
            { icon: "📝", name: "Crypto Logos", type: "Others", url: "https://cryptologos.cc/", note: "暗号資産のロゴ素材集" }
          ]
        }
      ]
    }
  ]
};
