# markdown-css-typesetting

markDownとCSSで組版するテンプレートです

あとでしっかり書きます

## 前提

- 最新バージョンのnode・npm
- Chrome

## 準備

### リポジトリをクローンする場合(通常はこちら)

- ローカルにリポジトリをcloneし，`cd`でこのディレクトリに移動する
- npmパッケージをインストールする (例 : `npm install` )

### リポジトリをクローンしない場合

作業したいディレクトリで以下のコマンドを実行

```sh
$ npx download-cli -e -s 1 -o . https://codeload.github.com/takanakahiko/markdown-css-typesetting/zip/master
```

## 執筆する

- `articles/` 内に markdown のファイルを作成
- `config.json` にファイル名を追加
- 作成したmarkdownに内容を書く
    - 大見出し( `# hoge` )はファイルの先頭に一つだけにしてください
    - 画像のパスは `article/images/原稿ファイル名/hoge.jpg` としてください

## 見た目を確認する

### ブラウザで見たいとき

- `npm run preview`
- ブラウザが勝手に開くので確認
- `Ctrl + C` で停止する

### PDFで見たいとき

- `npm run build`
- `output.pdf` を確認する

## License

© 2018 [WTFPL](http://www.wtfpl.net/) – Do What the Fuck You Want to Public License.

注 : `template/` 以下は別ライセンスです
