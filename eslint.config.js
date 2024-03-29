import stylisticPlugin from "@stylistic/eslint-plugin";
import jsLintPlugin from "@eslint/js";
import tsLintPlugin from "@typescript-eslint/eslint-plugin";
import tsLintParser from "@typescript-eslint/parser";
import Configs from "@jimbojet/lint";

export default [
  ...new Configs(
    stylisticPlugin,
    jsLintPlugin,
    tsLintPlugin,
    tsLintParser,
    [
      "eslint.config.js",
      "svelte.config.js",
    ],
    [
      "vite.config.ts",
      "src/**/*.ts",
    ],
    undefined,
    {
      "@typescript-eslint/require-await": "off",
    },
  ).configs,
];
