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
- config

# 見た目を確認する

## ブラウザで見たいとき

- `npm run preview`
- ブラウザが勝手に開くので確認

## PDFで見たいとき

- `npm run build`
- `output.pdf` を確認する