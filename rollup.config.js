import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import globals from 'rollup-plugin-node-globals';

export default [{
    input: 'src/styleguide/index.js',
    output: {
        file: 'site/js/index.js',
        format: 'umd',
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel({
          exclude: 'node_modules/**'
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement']
            }
        }),
        globals(),
        replace({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}, {
    input: 'src/components/index.js',
    output: {
        file: 'dist/ttam-style.js',
        format: 'umd'
    },
    plugins: [
        resolve(),
        babel({
          exclude: 'node_modules/**'
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement']
            }
        })
    ]
}];
