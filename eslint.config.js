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
      files: [
        "svelte.config.js",
        "eslint.config.js",
      ],
    },
    {
      ts,
      parser: tsParser,
      files: [
        "vite.config.ts",
        "src/**/*.ts",
      ],
    },
    {
      overrideSvelte: {
        "svelte/block-lang": [
          "error",
          {
            enforceScriptPresent: true,
            enforceStylePresent: false,
            script: ["ts"],
          },
        ],
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    {
      svelte,
      parser: svelteParser,
      processor: "svelte/svelte",
      files: ["src/**/*.svelte"],
    },
  ).configs,
];
