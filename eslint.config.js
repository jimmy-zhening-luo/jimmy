import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import Configs from "@jimbojet/lint";

export default [
  ...new Configs(
    stylistic,
    ts,
    tsParser,
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
