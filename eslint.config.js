import globals from "globals";
// import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

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
  ...compat.extends("airbnb-base"),
  {
    rules: {
      "no-duplicate-imports": "off", // Отключаем правило
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "always",
          jsx: "never",
        },
      ],
    },
  },
];
