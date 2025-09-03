import linted from "linted";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

export default linted(
  {},
  {
    svelte: {
      plugin: sveltePlugin,
      parser: svelteParser,
    },
  },
);
