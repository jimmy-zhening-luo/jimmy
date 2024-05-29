import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import Lint from "@jimbojet/lint";

export default [
  ...new Lint(
    {
      stylistic,
      files: ["*.config.js"],
    },
    {
      ts,
      parser,
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
