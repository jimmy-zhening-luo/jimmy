/*
    In the context of this project, the purpose of svelte.config.js is solely
    to enable VSCode Svelte extension type checking.

    This was at least true as of 2020 around the start of official Svelte
    TypeScript support... I will verify as I complete the project whether
    svelte.config.js is still required to get VSCode type checking, or if the
    extension has evolved since 2020.

    Reference:
    https://github.com/sveltejs/language-tools/issues/397
*/

const sveltePreprocess = require("svelte-preprocess");

const preprocessOptions = {
    sourceMap: true,
    defaults: {
        script: "typescript",
        style: "scss"
    },
    scss: {
        prependData: `@import "./src/views/styles/variables.scss";`
    },
    postcss: {
        plugins: [
            require('autoprefixer')()
        ]
    },
    typescript: {
        tsconfigDirectory: "./",
        tsconfigFile: "./tsconfig.json"
    }
};

module.exports = {
    preprocess: sveltePreprocess(preprocessOptions)
}

export default preprocessOptions;
