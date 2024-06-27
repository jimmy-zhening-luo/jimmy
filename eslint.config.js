import linted from "linted";

export default [
  ...new linted(
    {
      js: [
        "eslint.config.js",
        "svelte.config.js",
      ],
      ts: [
        "vite.config.ts",
        "src/**/*.ts",
      ],
      svelte: ["src/**/*.svelte"],
      jest: ["src/**/*.spec.ts"],
      html: ["src/**/*.html"],
      jsonc: ["tsconfig.json"],
      json: ["package.json"],
      yml: [".github/workflows/*.yml"],
    },
  )
    .configs,
];
