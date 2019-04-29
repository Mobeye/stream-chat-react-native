// @flow
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import url from 'rollup-plugin-url';
import copy from 'rollup-plugin-copy-glob';

import replace from 'rollup-plugin-replace';

import pkg from './package.json';

import process from 'process';
process.env.NODE_ENV = 'production';

const baseConfig = {
  input: 'src/index.js',
  cache: false,
  watch: {
    chokidar: false,
  },
};

const normalBundle = {
  ...baseConfig,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [
    'anchorme',
    'moment',
    'lodash/debounce',
    'lodash/throttle',
    'lodash/truncate',
    'lodash/uniq',
    'lodash-es',
    'deep-equal',
    'seamless-immutable',
    'stream-chat',
    'prop-types',
    'react-native',
    'react-native-gesture-handler',
    'react-native-actionsheet',
    'uuid/v4',
    '@fortawesome/react-native-fontawesome',
    '@fortawesome/free-solid-svg-icons',
    '@babel/runtime/regenerator',
    '@babel/runtime/helpers/asyncToGenerator',
    '@babel/runtime/helpers/objectWithoutProperties',
    '@babel/runtime/helpers/toConsumableArray',
    '@babel/runtime/helpers/objectSpread',
    '@babel/runtime/helpers/extends',
    '@babel/runtime/helpers/defineProperty',
    '@babel/runtime/helpers/assertThisInitialized',
    '@babel/runtime/helpers/inherits',
    '@babel/runtime/helpers/getPrototypeOf',
    '@babel/runtime/helpers/possibleConstructorReturn',
    '@babel/runtime/helpers/createClass',
    '@babel/runtime/helpers/classCallCheck',
    '@babel/runtime/helpers/slicedToArray',
    '@babel/runtime/helpers/typeof',
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    external(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    copy([{ files: 'src/assets/*', dest: 'dist/assets' }], {
      verbose: true,
      watch: process.env.ROLLUP_WATCH,
    }),
    url(),
    commonjs(),
    json(),
  ],
};

export default () =>
  process.env.ROLLUP_WATCH ? [normalBundle] : [normalBundle];