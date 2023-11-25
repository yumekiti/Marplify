const exampleText = `# HackU_2023

チーム名 : _楽し(み)たい_

### 目次

1. 問題定義
2. 解決策
3. 作品紹介
4. 開発について
5. 今後について
6. 最後に

## 1. 問題定義

### :eyes: 頻繁に発表している方

**スライド作り大変じゃないですか？**

### :thumbsdown: スライドはすぐに作れない

情報共有の際には、わかりやすい形式で内容を伝えることが重要ですが、文書の内容をスライドにまとめる際には情報の整理や要約、デザインなどが必要となり、このプロセスは時間や手間を要することがあります。

### :thumbsdown: スライド化するのも手間

Marp という手段でドキュメントをスライド化できますが、Marp 形式に変換する必要があり、管理も乱雑になりがちです。

> 問題定義に入ります
頻繁に発表している方スライド作り大変じゃないですか？
スライドはわかりやすい形式なので情報共有に向いており
情報共有の際に使用されることが多いのですが文章の内容をまとめたり
情報の整理やデザインなどが必要となり、時間や手間を要します。
この場合、Marpで書くと手段があるのですがドキュメントを
Marp形式に変換する必要があり、管理も乱雑になることが懸念されます。

## 2. 解決策

### :bulb: ドキュメントからスライドを生成

- Marp 形式のドキュメントを生成
- Marp で表示することでスライドとして利用

> そこで私達は解決策としてドキュメントからMarpスライドを生成すれば
良いのではと考え、次のツールを作成しました

## 3. 作品紹介

### :tada: MARPlify (マープリファイ)

MARPlify は、情報の伝達を迅速化し、効果的に伝えるためのツールです。

### :thumbsup: メリット

- MarpとMarkdowのいいとこ取り
- ドキュメントからスライドへの簡単な変換
- Markdown 形式での一元管理
- prettier による整形によりメンテナンスが容易
- スライドで絵文字が簡単に使える

https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md

> 作品紹介です。私達は「マープリファイ」というツールを作成しました。
特徴としてはドキュメントからスライドへの簡単な変換でき
Markdown形式での一元管理やフォーマットによる整形により
メンテナンスの簡易化（かんいか）が可能です
これによりとても素早くスライドを作成することが可能になりました

### :bar_chart: 比較

||ドキュメント|スライド|柔軟性|効率性
-|-|-|-|-
_Marplify_|O|O|△|O
Marp|X|O|△|△
Markdown|O|X|△|O
PowerPoint|X|O|△|X
Figma|X|O|O|X

> 比較として既存のプレゼンソフトではできない、
スライド資料をドキュメントにすることができたり
そのドキュメントをスライドにすることができたりするので
効率よくスライドが作れることが分かります

### :wrench: テーマ

- **入社後に使える便利なツール**

HackUは学生がアイデアを出し合い、実際の開発プロジェクトに取り組む場であり、将来のキャリアにつながる貴重な経験を積む機会だと考えています。
そこで、入社後に使える便利なツールを作成しました。

### :star2: コンセプト

- <strong>情報共有のシンプル化をサポート</strong>

入社後には情報共有が多く、様々な人がいるのでシンプルにする必要があると考えたから

### :bulb: サービス名・ロゴ

- \`Marp\`と\`Simplify\`を組み合わせたもの。
- Marpアイコンの三角を逆にしたアイコン

> テーマとしては、HackUとプレヤフという立場から「入社後に使える便利なツール」になり、
コンセプトは、入社後には情報共有が多いと考えており、また様々な人がいるため
シンプル性も必要だと考えました
サービス名は「Marp」と「Simplify」を組み合わせたもので
ロゴはMarpアイコンの三角を逆にしたアイコンになっています。

## 4. 開発について

### :globe_with_meridians: システム構成

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

### :memo: 開発に取り入れたこと（制作について）
- プロトタイピング手法
- チケット管理

### :memo: 開発に取り入れたこと（開発について）
- レイヤードアーキテクチャ
- アトミックデザイン
- スキーマ駆動
- ~~飲酒駆動~~

開発プロセスを効率化し、品質の高いツールを提供

> システム構築としてはReactとFastAPIで構築されており
Cloudflareを通してユーザーに提供しています
また、開発に取り入れたこととしては
プロトタイプ手法やチケット管理、レイヤードアーキテクチャなどを取り入れました
これにより開発を効率化し、質の良いツールを提供しています

## 5. 今後について

### :seedling: 今後の展望

- AI を活用したドキュメント生成の実装
- Visual Studio Code での拡張機能の開発
- パフォーマンスの向上

UXの向上とさらなる便利さを提供

> 今後につきましては、AIでのドキュメント生成や
vscodeの拡張機能の実装、パフォーマンス向上を目指しており、
UX向上と便利さを提供できたら良いなと考えています。

## 6. 最後に

### :white_check_mark: まとめ

文書をスライド形式に変換でき、情報共有のシンプル化を実現するツール「MARPlify」を開発した。これにより簡単な操作でスライドを作成できるため、効率的な情報伝達が可能です。

### ぜひ使ってみてください

[https://marplify.yumekiti.net/](https://marplify.yumekiti.net/)

# :bow: ご清聴ありがとうございました！

<style>
  blockquote {
    display: none;
  }
</style>

<style>
/* blockquoteをカンペとして扱っています。
  下記の上下のコメントアウトを消すと blockquote ( > 文字 ) が見れるようになります */
/*
  .markdown-body div > :not(blockquote) { display: none; }
  blockquote { display: block; }
*/
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
