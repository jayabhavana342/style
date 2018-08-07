import multiEntry from 'rollup-plugin-multi-entry'

export default {
    input: 'src/**/test_*.jsx',
    plugins: [multiEntry()],
    output: {
        file: '__test__/test.js',
        format: 'cjs'
    }
}
