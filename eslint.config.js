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
  ).configs,
];
