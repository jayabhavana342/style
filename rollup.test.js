import multiEntry from "rollup-plugin-multi-entry";

export default {
    input: "src/components/**/test_*.js",
    plugins: [multiEntry()],
    output: {
        file: '__test__/test.js',
        format: 'cjs'
    }
};