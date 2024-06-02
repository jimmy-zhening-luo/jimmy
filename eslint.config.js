import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import Lint from "@jimbojet/lint";

export default [
  ...new Lint(
    {
      js: ["*.config.js"],
      ts: [
        "*.config.ts",
        "src/**/*.ts",
      ],
      svelte: ["src/**/*.svelte"],
    },
    { },
    {
      plugin: svelte,
      parser: svelteParser,
    },
  ).configs,
];
