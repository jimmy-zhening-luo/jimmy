import stylisticPlugin from "@stylistic/eslint-plugin";
import tsLintPlugin from "@typescript-eslint/eslint-plugin";
import tsLintParser from "@typescript-eslint/parser";
import Configs from "@jimbojet/lint";

export default [
  ...new Configs(
    stylisticPlugin,
    tsLintPlugin,
    tsLintParser,
    [
      "svelte.config.js",
      "eslint.config.js",
    ],
    [
      "vite.config.ts",
      "src/**/*.ts",
    ],
    undefined,
  ).configs,
];
