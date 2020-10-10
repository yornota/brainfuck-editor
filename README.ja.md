# brainfuck editor

[English version is here.](./README.md)

## 概要

brainfuckをブラウザ上でハイライト付きで編集できる、とても実用的で夢のようなエディタ(実際に使われるかどうかは別問題)。

## 実装

- monaco-editor
  - [microsoft/monaco-editor - github](https://github.com/microsoft/monaco-editor)
  - 参考: [How to run the Monaco editor from a CDN like cdnjs? - stackoverflow](https://stackoverflow.com/questions/63179813/how-to-run-the-monaco-editor-from-a-cdn-like-cdnjs)
- brainfuck.js
  - 管理主の自作

## 未着手の課題

- スマホでのレイアウト崩れ
  - `@media (max-height: 768px) {}`とか使うやつ
- スクロールバーの色(Windowsで確認)
  - CSSいじるだけなんだけど面倒になっちまったよ...
- その他
  - 何か不具合・意見等があれば[@bow_calm](https://twitter.com/bow_calm/)までどうぞ
