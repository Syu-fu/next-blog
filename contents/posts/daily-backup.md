---
title: '異なるクラウドストレージに日次バックアップを作成する'
date: '2023-10-01'
slug: 'daily-backup'
tag: ['dotfiles', 'zsh']
categories: 'programming'
description: '以前実行したコマンドを再度実行する際、.historyファイルは非常に役に立ちます。 しかし、.historyファイルは変更が多く機密情報を含'
---

以前実行したコマンドを再度実行する際、.historyファイルは非常に役に立ちます。  
しかし、.historyファイルは変更が多く機密情報を含むこともあるためGitHubでの管理は避けたいところです。  
私はそういった類いのものはDropboxのdevフォルダ内に暗号化して保存しています。
例えば私はzshを利用しているので.zsh_historyの保存先を以下のように設定してます。

```bash title=".zshenv"
export HISTFILE=~/Dropbox/dev/zsh/.zsh_history
```

ここで問題になるのは、なにかの拍子に履歴を削除してしまったり壊してしまったりした場合です。  
ソースコードであればGitから復元できますが、履歴ファイルは前述の通りGit管理していないためそうは行きません。  
そのため今回の表題の通りDropboxに保存している.zsh_historyファイルをGoogle Driveに日次バックアップする方法を自動化しました。  
このプログラムを実行する前に`%Y-%m-%d`形式のフォルダを前日から5日間分作成しておきます。ソースコードは以下になります。

```bash title="cron.sh"
#!/bin/sh

CURRENT_DATE=$(date +'%Y-%m-%d')
DELETE_DATE=$(date +'%Y-%m-%d' --date '5 days ago')
rclone sync dropbox:/dev "drive:/${CURRENT_DATE}"
rclone purge "drive:/${DELETE_DATE}"
```

こちらのスクリプトをcronで毎日自分がPCを触らない時間帯に実行するよう設定しています。  
やっていることは単純で[rclone](https://rclone.org)を用いて実行日付のフォルダを作成しそこにコピー元のDropboxのファイルをコピーし、その後5日前のフォルダのデータを削除しています。  
非常に単純ですが失いたくない.zsh_historyファイルをバックアップするには十分有効なはずです。
