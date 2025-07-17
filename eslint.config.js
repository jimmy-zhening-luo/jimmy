import linted from "linted";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

export default linted(
  {
    svelte: {
      rules: {
        "@stylistic/indent": "off",
      },
    },
  },
  {
    svelte: {
      plugin: sveltePlugin,
      parser: svelteParser,
    },
  },
);
