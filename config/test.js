// Rollup plugins.
import multiEntry from 'rollup-plugin-multi-entry'
import buble from 'rollup-plugin-buble'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json';

export default {
    input: 'src/**/test_*.js',
    output: {
        file: '__test__/test.js',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        multiEntry(),
        json(),
        buble(),
        globals(),
        replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        resolve({
            browser: true,
            main: true,
            modulesOnly: true,
        }),
        cjs({
            exclude: 'node_modules/**',
            namedExports: {
                'node_modules/react-syntax-highlighter/index.js': ['SyntaxHighlighter'],
                'node_modules/react-syntax-highlighter/styles/hljs/index.js': ['githubGist']
            }
        }),
    ]
}
