# markdown-css-typesetting
markDownとCSSで組版するテンプレートです

あとでしっかり書きます

# 前提

- 適当なバージョンのnode・npm (あとでDockerにする)
- Chrome

# 準備

- ローカルにリポジトリをcloneし，`cd`でこのディレクトリに移動する
- npmパッケージをインストールする (例 : `npm install` )

# 執筆する

- `articles/` 内に markdown のファイルを作成
- `config.json` にファイル名を追加
- 作成したmarkdownに内容を書く
    - 大見出し( `# hoge` )はファイルの先頭に一つだけにしてください
    - 画像は `article/images/原稿ファイル名` としてください

# 見た目を確認する

## ブラウザで見たいとき

- `npm run preview`
- ブラウザが勝手に開くので確認
- `Ctrl + C` で停止する

## PDFで見たいとき

- `npm run build`
- `output.pdf` を確認する