// Rollup plugins.
import buble from 'rollup-plugin-buble'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: 'src/index.js',
    output: {
        file: 'build/app.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        buble(),
        cjs({
            exclude: 'node_modules/process-es6/**',
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react-syntax-highlighter/index.js': ['SyntaxHighlighter'],
                'node_modules/react-syntax-highlighter/styles/hljs/index.js': ['docco']
            }
        }),
        globals(),
        replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        resolve({
            browser: true,
            main: true
        })
    ]
}
