'use strict';

const helloworld_bf = [
    'Hello World!',
    '',
    '++++++++',
    '[',
    '\t>++++',
    '\t[',
    '\t\t>++',
    '\t\t>+++',
    '\t\t>+++',
    '\t\t>+',
    '\t\t<<<<-',
    '\t]',
    '\t>+',
    '\t>+',
    '\t>-',
    '\t>>+',
    '\t[',
    '\t\t<',
    '\t]',
    '\t<-',
    ']',
    '>>.',
    '>---.+++++++..+++.',
    '>>.',
    '<-.',
    '<.+++.------.--------.',
    '>>+.',
    '>++.',
    '',
].join('\n');

// monaco-editor cdn setting
const monaco_editor_version = '0.21.2';
require.config({ paths: { 'vs': `https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${monaco_editor_version}/min/vs` } });
window.MonacoEnvironment = { getWorkerUrl: () => proxy };
let proxy_content = [
    `self.MonacoEnvironment = {`,
    `    baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${monaco_editor_version}/min'`,
    `};`,
    `importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${monaco_editor_version}/min/vs/base/worker/workerMain.min.js');`,
].join('\n');
let proxy = URL.createObjectURL(
    new Blob(
        [proxy_content],
        { type: 'text/javascript' }
    )
);

var editor;
require(
    ['vs/editor/editor.main'],
    function () {
        monaco.languages.register(
            {
                id: 'brainfuck',
                extensions: '.bf',
                aliases: ['brainfuck', 'Brainfuck', 'brainf*ck', 'Brainf*ck', 'brainf**k', 'Brainf**k', 'bf'],
            }
        );
        monaco.languages.setMonarchTokensProvider(
            'brainfuck',
            {
                tokenizer: {
                    root: [
                        [/[\>\<]/, "bf-ptr"],
                        [/[\[\]]/, "bf-bracket"],
                        [/\,/, "bf-input"],
                        [/\./, "bf-output"],
                        [/[^\+-\>\<\.\,\[\]]/, "comment"],
                        [/[0-9]/, "comment"],
                    ]
                }
            }
        );
        monaco.editor.defineTheme(
            'brainfuck',
            {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: 'bf-ptr', foreground: '0088ff' },
                    { token: 'bf-bracket', foreground: '88ff88' },
                    { token: 'bf-input', foreground: 'ff66ff' },
                    { token: 'bf-output', foreground: 'ffaaff' },
                ]
            }
        );
    
        editor = monaco.editor.create(
            document.getElementById('editor'),
            {
                theme: 'brainfuck',
                value: helloworld_bf,
                language: 'brainfuck',
                automaticLayout: true,
            }
        );
    }
);

function exec() {
    let src = editor.getValue();
    let input = document.getElementById('input-field').value;
    let result = brainfuck(src, input);
    document.getElementById('output-field').value = result.output;
    document.getElementById('log-field').value = result.log;
}
