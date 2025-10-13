import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "base-uri": ["self"],
        "form-action": ["none"],
        "default-src": ["none"],
        "style-src": ["self"],
        "img-src": [
          "self",
          "data:",
        ],
        "upgrade-insecure-requests": true,
      },
    },
    outDir: "dist",
  },
};
