---
title: 'gh-dot-tmplを作った'
date: '2024-07-07'
slug: 'introduce-gh-dot-tmpl'
tag: ['github', 'cli']
category: 'programming'
description: 'gh-dot-tmplというGitHub CLI拡張を作りました。.github以下のファイルのテンプレートをあらかじめ作成しておき、選択したものを現在のリポジトリの.githubフォルダ配下にコピーするだけのコマンドです。'
---

[gh-dot-tmpl](https://github.com/Syu-fu/gh-dot-tmpl)というGitHub CLI拡張を作りました。  
`.github`以下のファイルのテンプレートをあらかじめ作成しておき、選択したものを現在のリポジトリの`.github`フォルダ配下にコピーするだけのコマンドです。  
なにかを作る際、新しくリポジトリを作成した後に他の自分のリポジトリから`.github`フォルダの中身をコピーする作業が多かったのでその作業を楽にするために作成しました。

## インストール方法

動作には[gh](https://github.com/cli/cli)が必要です。
以下のコマンドでインストール可能です。

```bash
gh extension install Syu-fu/dot-tmpl
```

アップデートの際は以下のコマンドを実行します。

```bash
gh extension upgrade dot-tmpl
```

## 使い方

以下のようなコンフィグファイルを`$XDG_CONFIG_HOME/gh-dot-tmpl/config.yaml`に配置します。
テンプレートファイルも同時に用意してください。

```yaml
templates:
  issue:
    template_file: ~/.config/gh-dot-tmpl/template/issue.md
    output_file: .github/ISSUE_TEMPLATE.md
  pr:
    template_file: ~/.config/gh-dot-tmpl/template/pullrequest.md
    output_file: .github/PULL_REQUEST_TEMPLATE.md
```

この状態で適用するリポジトリ内で以下のコマンドを実行します。

```bash
gh dot-tmpl issue pr
```

するとリポジトリの`.github`フォルダ内に`ISSUE_TEMPLATE.md`と`PULL_REQUEST_TEMPLATE.md`が作成されます。

その他細かい機能については[README.md](https://github.com/Syu-fu/gh-dot-tmpl/blob/main/README.md)を参照してください。

## ライセンスチェック

これを作っている最中にライセンスチェックもCIに含めたかったので[go-licenses](https://github.com/google/go-licenses)をGitHub Actionsで簡単に使える[go-licenses](https://github.com/Syu-fu/go-licenses)を作ってみました。  
こちらは以下のように呼び出せばライセンスの違反を確認できるようにしてあります。

```yaml title="~/.config/gh-dot-tmpl/config.yaml"
jobs:
  license-check:
    runs-on: ubuntu-latest
    name: license check
    steps:
      - uses: actions/checkout@v4.1.7

      - uses: Syu-fu/go-licenses@v0.1.0
```

## 終わりに

今回は開発を快適に進めるためにCI/CDに力を入れて開発してみましたがリポジトリをきれいに保ちやすくライブラリの更新も楽なので他のプロジェクトに対しても適用していきたいです。  
同じファイルがあるとき強制的に上書きされてしまったり、コンフィグファイルの拡張子が固定されていたりとまだ課題は残っていますが割ときれいに作れたので良ければ使ってみてください。
