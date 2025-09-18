// @ts-check

import { tanstackConfig } from "@tanstack/eslint-config"
import pluginQuery from "@tanstack/eslint-plugin-query"

export default [
  ...tanstackConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  // Optionally, ignore config files
  {
    ignores: ["eslint.config.js", "prettier.config.js", "vite.config.js"],
  },
]
