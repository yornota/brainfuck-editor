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

require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' } });
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
