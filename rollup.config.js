export default [{
    input: 'src/styleguide/assets/js/index.js',
    output: {
        file: 'site/js/index.js',
        format: 'umd'
    }
}, {
    input: 'src/components/index.js',
    output: {
        file: 'dist/ttam-style.js',
        format: 'umd'
    }
}];
