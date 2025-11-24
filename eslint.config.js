import linted from "linted";
import plugin from "eslint-plugin-svelte";
import parser from "svelte-eslint-parser";

export default linted(
  {
    svelte: {
      plugin,
      parser,
    },
  },
);
