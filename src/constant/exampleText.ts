const exampleText = `
# HackU_2023

Hack ID 4 : _楽し(み)たい_

## 目次

1. 問題提議
2. 解決策
3. 作品紹介
4. 開発について
5. 今後について
6. 最後に

# 1. 問題提議

## スライドはそんなにすぐに作れない

情報共有の際には、わかりやすい形式で内容を伝えることが重要ですが、文書とスライドの間で情報を移行するプロセスは手間がかかります。

[](
複数行のときは\\
改行直前に\\
バックスラッシュがないと\\
ダメっぽい
)

## ドキュメントをスライド化するのが面倒

Marp という手段でドキュメントをスライド化できますが、Marp 形式に変換する必要があり、管理も乱雑になりがちです。

# 2. 解決策

## ドキュメントからスライドを生成

- Marp 形式のドキュメントを生成
- Marp で表示することでスライドとして利用

# 3. 作品紹介

## MARPlify (マープリファイ)

MARPlify は、情報の伝達を迅速化し、効果的に伝えるためのツールです。

## メリット

- ドキュメントからスライドへの簡単な変換
- Markdown 形式での一元管理
- prettier による整形によりメンテナンスが容易

## 比較

|            | ドキュメント | スライド | 柔軟性 | 効率性 |
| ---------- | ------------ | -------- | ------ | ------ |
| _Marplify_ | O            | O        | △      | O      |
| Marp       | X            | O        | △      | O      |
| Markdown   | O            | X        | △      | O      |
| PowerPoint | X            | O        | △      | X      |
| Figma      | X            | O        | O      | X      |

## テーマ

- 入社後に使える便利なツール

> HackUは学生がアイデアを出し合い、実際の開発プロジェクトに取り組む場であり、将来のキャリアにつながる貴重な経験を積む機会だから

## コンセプト

- 情報共有のシンプル化をサポート

> シンプルで使いやすいツールであることが重要だと考えたから

## サービス

![w:250 bg right:30%](https://raw.githubusercontent.com/yumekiti/Markdown_to_Marp_Converter_web/main/public/images/icons/icon-128x128.png)

- 「MARPlify」というサービスは、\`Marp\`と\`Simplify\`を組み合わせたものです。
- MarpからMarkdownに変更できるとこからMarpアイコンの三角を逆にしたアイコンです。

# 4. 開発について

## システム構成

\`\`\`mermaid
graph LR

subgraph "GitHub"
  webhook[Webhook]
end

subgraph "CI/CD"
  webhook -- Trigger --> jenkins[Jenkins]
  jenkins -- Build & Deploy --> server[Home Server]
end

subgraph "Cloudflare"
  dns[DNS]
  cdn[CDN]
  ssl[SSL/TLS]
end

subgraph "Home Server"
  react[React]
  fastapi[FastAPI]
end

subgraph "User"
  browser[Web Browser]
end

browser -- Access --> dns
dns -- Resolve --> cdn
cdn -- Proxy --> react
cdn -- Proxy --> fastapi
cdn -- Proxy --> ssl
ssl -- Secure --> cdn
cdn -- Proxy --> dns
dns -- Resolve --> cdn
cdn -- Proxy --> server
react -- Communicate --> fastapi
fastapi -- Communicate --> react
server -- Serve --> react
server -- Serve --> fastapi
\`\`\`

## 取り入れたこと

- 制作について
    - プロトタイピング手法

***

-  開発について
    - レイヤードアーキテクチャ
    - アトミックデザイン
    - ~~飲酒駆動~~

***

開発プロセスを効率化し、品質の高いツールを提供することが可能となりました。

# 5. 今後について

## 今後の展望

- AI を活用したドキュメント生成の実装
- Visual Studio Code での拡張機能の開発
- パフォーマンスの向上

ユーザーエクスペリエンスの向上とさらなる便利さを提供します。

# 6. 最後に

## まとめ

文書をスライド形式に変換でき、情報共有のシンプル化を実現するツール「MARPlify」を開発した。これにより簡単な操作でスライドを作成できるため、効率的な情報伝達が可能です。

## <small>めっちゃ便利なので</small>ぜひ使ってみてください

### [https://marplify.yumekiti.net/](https://marplify.yumekiti.net/)

<style>
    em {
        color: #EF4565;
    }
</style>
`;

export default exampleText;
