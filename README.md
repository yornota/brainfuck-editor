# [brainfuck-editor](https://bowcalm.github.io/brainfuck-editor/)

Bad English? That's because it's managed by Japanese who don't speak English well.

[日本語版はこちら](./README.ja.md)

## Overview

A very practical and dreamy editor that allows you to edit brainfuck with highlights in your browser (whether it's actually used or not).

## Implementation

- monaco-editor
  - [microsoft/monaco-editor - github](https://github.com/microsoft/monaco-editor)
  - referencing: [How to run the Monaco editor from a CDN like cdnjs? - stackoverflow](https://stackoverflow.com/questions/63179813/how-to-run-the-monaco-editor-from-a-cdn-like-cdnjs)
- brainfuck.js
  - I made it myself

## Unfinished business

- Layout collapse on smartphones
  - Implement using `@media (max-height: 768px) {}`
- Scroll bar color (check on Windows)
  - It's getting to be a pain in the ass to fiddle with CSS...
- Other
  - If you have any problems or comments, please contact [@bow_calm](https://twitter.com/bow_calm/)
