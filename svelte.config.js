import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const basePath = (process.env.NODE_ENV === "production" && process.env.BASE_PATH) || "";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "index.html",
    }),
    paths: {
      base: basePath,
    },
  },
};

export default config;
