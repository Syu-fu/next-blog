---
title: 'このブログにBudouxを導入した'
date: '2023-10-22'
slug: 'introduce-budoux'
tag: ['blog', 'hugo']
categories: 'programming'
description: 'このブログにもBudouXを導入してみました。 導入前より全体的に読みやすくなったと感じています。 BudouXとは A small, standalone, and language-neutral line break organizer. とプ'
---

このブログにも[BudouX](https://github.com/google/budoux)を導入してみました。  
導入前より全体的に読みやすくなったと感じています。

## BudouXとは

> A small, standalone, and language-neutral line break organizer.

とプロジェクトの[GitHub Pages](https://google.github.io/budoux/)に記載があります。
簡単に言うと、小さなツールで、言語に依存せず改行を整理してくれるものです。
小さいという表現だけでは抽象的なので、具体的な数値として、約15KB程度であることがドキュメントに記載されています。

> It is small. It takes only around 15 KB including its machine learning model. It's reasonable to use it even on the client-side.

この程度のサイズなら、クライアントサイドでも問題なく使用できると感じます。

## 導入手順

Web componentsを利用して導入します。  
[ドキュメント](https://github.com/google/budoux/blob/main/javascript/README.md#web-components)の内容をほぼそのまま利用しますが以下のスクリプトを読み込みます。

```html
<script src="https://unpkg.com/budoux/bundle/budoux-ja.min.js"></script>
```

その後、改行を整理するための文章を日本語用のタグ`<budoux-ja>`で囲います。

```html
<budoux-ja>今日は天気です。</budoux-ja>
```

これで手順は以上になります。  
このブログの場合はコンテンツ内の`<p>`タグを`<budoux-ja>`タグに置き換えています。
このブログは[hugo](https://github.com/gohugoio/hugo)を利用して生成しているためその方法についても記載します。  
hugoには生成後に特定の文字列を置換する機能が備わっています。([strings.ReplaceRE | Hugo](https://gohugo.io/functions/strings/replacere/))
こちらを利用して次のように`<p>`タグを置換します。
これは単純な文字列の置換ですので、終了タグも置換するのを忘れないようにします。

```html {name="layouts/_default/single.html"}
{{ .Content | replaceRE "<p>" "<budoux-ja>" | replaceRE "</p>" "</budoux-ja>" | safeHTML }}
```

実際に使ってみた感想としては導入が非常に簡単でバンドルサイズや手間などのデメリットが小さく、読みやすさにはある程度の効果を感じました。
