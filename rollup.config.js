import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'plotly.js/lib/index-cartesian.js',
    output: {
        file: "dist/index.js",
        format: 'es'
    },
    plugins: [commonjs(), nodePolyfills(), nodeResolve({ browser: true, preferBuiltins: false })]
};