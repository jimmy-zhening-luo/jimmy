import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import Configs from "@jimbojet/lint";

export default [
  ...new Configs(
    {
      stylistic,
      files: ["*.config.js"],
    },
    {
      ts,
      parser: tsParser,
      files: [
        "*.config.ts",
        "src/**/*.ts",
      ],
    },
    { },
    {
      svelte,
      parser: svelteParser,
      files: ["src/**/*.svelte"],
    },
  ).configs,
];
