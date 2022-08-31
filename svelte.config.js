import * as dotenv from "dotenv";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      out: "dist",
      envPrefix: "LOCAL_TEST_",
    }),
  },
};

export default config;
