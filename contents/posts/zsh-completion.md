---
title: 'zsh補完ファイルの管理'
date: '2023-10-08'
slug: 'zsh-completion'
tag: ['dotfiles', 'zsh']
category: 'programming'
description: '.zshhistoryはコマンドの再実行に有効ですが新しいコマンドを実行する場合にはzshの補完機能が有効です。 普段利用するコマンドのサブコ'
---

.zshhistoryはコマンドの再実行に有効ですが新しいコマンドを実行する場合にはzshの補完機能が有効です。  
普段利用するコマンドのサブコマンドやオプションを全ては覚えていられないので補完を用いることで説明を読みつつ選択できるうえ、typoも減らすことができます。  
私の場合は[fzf-tab](https://github.com/Aloxaf/fzf-tab)を用いることでこれをインタラクティブに行っています。

とても便利な機能なので[zsh-completions](https://github.com/zsh-users/zsh-completions)をインストールすることはもちろん、インストールしてきたCLIツールにも補完を設定したいです。  
しかし、[brew](https://github.com/Homebrew/brew)などではコマンドのインストール時に補完スクリプトの設定も同時に行ってくれることがあるようですが、私が利用している[Aqua](https://github.com/aquaproj/aqua)にはそのような機能はありません。[^aqua]そのため利用者自身で補完の設定する必要があります。

## 保管ファイルのパターンについて

設定方法がツールごとにばらばらなため4つのパターンに分けて私の管理方法を紹介します。
まずはどのようにパターン分けしているかを表に示します。

### 補完ファイルの場所

- コマンドで生成
- リポジトリに置いてある

### 補完スクリプトの読み込み方法

- sourceを利用
- FPATHを利用
  - FPATHに設定したディレクトリのファイルを補完ファイルとして読み込む機能です。詳しい説明については[20 Completion System -zsh](https://zsh.sourceforge.io/Doc/Release/Completion-System.html#Autoloaded-files)を参照してください。

上記2要素の組み合わせで4パターンとなっています。  
それぞれのパターンの詳細な解説に移ります。

## パターンごとの読み込み方法の詳細

### コマンドで生成かつsourceを利用して読み込む場合

[Aqua](https://github.com/aquaproj/aqua)や[hugo](https://github.com/gohugoio/hugo)が当てはまります。  
恐らくですが[urfave/cli](https://github.com/urfave/cli)を使っている場合にこのパターンが多いのではないでしょうか。  
このパターンは.zshrc(この先同様の表記をした場合に.zshrcから読み込むファイルも含みます)に以下のように記載します。(各コマンドごとに生成用コマンドは異なるためhelp等を確認してください)

```shell title=".zshrc"
if command -v aqua &> /dev/null; then source <(aqua completion zsh); fi
```

### コマンドで生成かつFPATHを利用して読み込む場合

[gh](https://github.com/cli/cli)や[yq](https://github.com/mikefarah/yq)などが当てはまります。
補完ファイルを保存しておくためのフォルダを作成し、そこをFPATHに追加します。私の場合はzshの設定を$XDG_CONFIG_HOME/zshにまとめていますのでそこにcompletionフォルダを作成しています。  
FPATHの慣習に基づいてファイル名はアンダースコア+コマンド名にします。

```shell title=".zshrc"
if command -v gh &> /dev/null; then (gh completion --shell zsh)> $ZDOTDIR/completions/_gh; fi
```

### リポジトリに置いてあるかつsourceを利用して読み込む場合

[sheldon](https://github.com/rossmacarthur/sheldon)や[fzf](https://github.com/junegunn/fzf)などが当てはまります。  
リポジトリにあるものをダウンロードしそれを`source`すれば良いです。私の場合はzshのプラグインマネージャーとして[sheldon](https://github.com/rossmacarthur/sheldon)を利用しているので以下の様に設定できます。

```toml title="sheldon.toml"
[plugins.fzf-completion]
remote = "https://raw.githubusercontent.com/junegunn/fzf/master/shell/completion.zsh"
```

### リポジトリに置いてあるかつFPATHを利用して読み込む場合

[ghq](https://github.com/x-motemen/ghq)や[ripgrep](https://github.com/BurntSushi/ripgrep)などが当てはまります。  
[sheldon](https://github.com/rossmacarthur/sheldon)にはインストールしたプラグインのディレクトリをFPATHに設定する機能があるためそちらを利用します。詳しくはドキュメントを参照してください。
注意点としては[sheldon](https://github.com/rossmacarthur/sheldon)の読み込みを行ったあとに`compinit`をするようにしてください。

```toml title="sheldon.toml"
[plugins.ghq-completion]
remote = "https://raw.githubusercontent.com/x-motemen/ghq/master/misc/zsh/_ghq"
apply = ["fpath"]
```

---

私のzshの設定はこの[リポジトリ](https://github.com/Syu-fu/dotfiles/tree/main/.config/zsh)に置いてあります。  
補完ファイルは[zsh-defer](https://github.com/romkatv/zsh-defer)などを用いて遅延ロードできます。そのため補完ファイルを読み込むことで起動時間が増えるようなことはないので普段使うコマンドの補完ができない方はぜひ設定してみてください。

[^aqua]: デフォルト設定でなんでもいい感じにやってくれるものよりも自分で設定できるもののほうが好みです。
