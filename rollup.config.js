import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import svg from 'rollup-plugin-svg'
import image from '@rollup/plugin-image';
import styles from "rollup-plugin-styles";

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
      commonjs(),
      json(),
      resolve(),
      svg(),
      image(),
      styles(),
      typescript({
        tsconfigOverride:{
          exclude: [
            'src/**/*.test.tsx',
            'src/**/*.test.ts',
            'src/**/*.stories.tsx',
            'src/**/*.test.tsx'
          ]
        }
      }),
    ]
};