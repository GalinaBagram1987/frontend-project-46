import globals from 'globals';
// import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pkg from 'globals';
const { jest } = pkg;

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const compat = new FlatCompat
// ({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

const options = {
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
};

const compat = new FlatCompat(options);

export default [
  { languageOptions: { globals: globals.node } },
  ...compat.extends('airbnb-base'),
  plugins('jest').extends('plugin:jest/recommended'),
  {
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/prefer-to-have-length': 'warn',
      'no-duplicate-imports': 'off', // Отключаем правило
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
          jsx: 'never',
        },
      ],
    },
  },
];
