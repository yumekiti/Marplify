const exampleText = `# HackU_2023

Hack ID 4 : _楽し(み)たい_

## 目次

1. 問題提議
2. 解決策
3. 作品紹介
4. 開発について
5. 今後について
6. 最後に

# 1. 問題提議

## :thumbsdown: スライドはそんなにすぐに作れない

情報共有の際には、わかりやすい形式で内容を伝えることが重要ですが、文書とスライドの間で情報を移行するプロセスは手間がかかります。

<div class="cheating">
    ここで問題提議を話す
</div>

## :thumbsdown: ドキュメントをスライド化するのが面倒

Marp という手段でドキュメントをスライド化できますが、Marp 形式に変換する必要があり、管理も乱雑になりがちです。

# 2. 解決策

## :bulb: ドキュメントからスライドを生成

- Marp 形式のドキュメントを生成
- Marp で表示することでスライドとして利用

# 3. 作品紹介

## :tada: MARPlify (マープリファイ)

MARPlify は、情報の伝達を迅速化し、効果的に伝えるためのツールです。

## :thumbsup: メリット

- ドキュメントからスライドへの簡単な変換
- Markdown 形式での一元管理
- prettier による整形によりメンテナンスが容易
- スライドで絵文字が簡単に使える

> https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md

## :bar_chart: 比較

|            | ドキュメント | スライド | 柔軟性 | 効率性 |
| ---------- | ------------ | -------- | ------ | ------ |
| _Marplify_ | O            | O        | △      | O      |
| Marp       | X            | O        | △      | O      |
| Markdown   | O            | X        | △      | O      |
| PowerPoint | X            | O        | △      | X      |
| Figma      | X            | O        | O      | X      |

## テーマ

- :wrench: **入社後に使える便利なツール**

> HackUは学生がアイデアを出し合い、実際の開発プロジェクトに取り組む場であり、将来のキャリアにつながる貴重な経験を積む機会だから

## :star2: コンセプト

- <strong>情報共有のシンプル化をサポート</strong>

> シンプルで使いやすいツールであることが重要だと考えたから

## :bulb: サービス

![w:250 bg right:30%](https://raw.githubusercontent.com/yumekiti/Markdown_to_Marp_Converter_web/main/public/images/icons/icon-128x128.png)

- 「MARPlify」というサービスは、\`Marp\`と\`Simplify\`を組み合わせたものです。
- MarpからMarkdownに変更できるとこからMarpアイコンの三角を逆にしたアイコンです。

# 4. 開発について

## :globe_with_meridians: システム構成

~~~mermaid
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
~~~

## :memo: 取り入れたこと

- 制作について
    - プロトタイピング手法
    - チケット管理

-  開発について
    - レイヤードアーキテクチャ
    - アトミックデザイン
    - スキーマ駆動
    - ~~飲酒駆動~~

開発プロセスを効率化し、品質の高いツールを提供

# 5. 今後について

## :seedling: 今後の展望

- AI を活用したドキュメント生成の実装
- Visual Studio Code での拡張機能の開発
- パフォーマンスの向上

UXの向上とさらなる便利さを提供

# 6. 最後に

## :white_check_mark: まとめ

文書をスライド形式に変換でき、情報共有のシンプル化を実現するツール「MARPlify」を開発した。これにより簡単な操作でスライドを作成できるため、効率的な情報伝達が可能です。

## めっちゃ便利なのでぜひ使ってみてください

### [https://marplify.yumekiti.net/](https://marplify.yumekiti.net/)

# :bow: ご清聴ありがとうございました！

<style>
    em {
        color: #EF4565;
    }
    .cheating {
        display: none;
    }
</style>
`;

const placeholder = `# Marplify
Markdown形式のドキュメントとスライドの相互変換ツール。

## Marpに変換したいMarkdownを入力してください。
便利な体験をお楽しみください！

## 分からない場合
右上の「？」アイコンをクリックしてから、Convertボタンを押してみてください。
`;

export { exampleText, placeholder };
