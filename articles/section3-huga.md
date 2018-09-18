# ubuntuで自分の環境作るメモ

## anyenvいれる

```
git clone https://github.com/riywo/anyenv ~/.anyenv
echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(anyenv init -)"' >> ~/.bash_profile
exec $SHELL -l
```

`exec $SHELL -l`はPATH通すためのシェルの再起動らしい？

## pyenvいれる

```
anyenv install pyenv
exec $SHELL -l
```

## pythonビルドする準備する

```
sudo apt-get install git gcc make openssl libssl-dev libbz2-dev libreadline-dev libsqlite3-dev
```

## pythonいれる

```
pyenv install 3.6.4
pyenv global 3.6.4
exec $SHELL -l
```