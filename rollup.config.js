/**
 * This file theoretically fully configures the Svelte client app
 * runtime and build.
 *
 * However, some Svelte configuration leaks into the mysterious
 * `svelte.config.js` and into the TypeScript config `tsconfig.json`.
 *
 * See `svelte.config.js` for context on why that file even exists at all
 * in this project, considering Svelte, at the time of its rollup integration
 * development, considered itself "zero config".
 *
 * To get Svelte to play along with TypeScript nicely, there's also some
 * highly Svelte-specific TypeScript typechecking logic that has leaked
 * into `tsconfig.json`.
 *
 * You can see `tsconfig.json`, particularly the `extends` statement at the
 * top of the config (as of v8.1.0), for more context on those Svelte-
 * specific `tsconfig.json` requirements. Anything not in the base config
 * being extended by this projects `tsconfig.json` is my own original
 * configuration used for developing and building the Express.js server, not
 * related to Svelte development and build requirements.
 */


/*******************
 * Loading rollup.config.js Module Dependencies
 *************/

// See npm `dotenv` documentation.
import dotenv from "dotenv";

// Vanilla Svelte.js Rollup imports
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
// TBD: Figure out why the `css` import shows as unused despite L84.

// TypeScript-specific imports
import typescript from "@rollup/plugin-typescript";
import sveltePreprocess from "svelte-preprocess";
import preprocessOptions from "./svelte.config";

// Hydrating my environmental variables into `process.env`, then getting them.
dotenv.config();
const production = (
    (process.env["NODE_ENV"] !== "development")
        &&
    !(process.env["ROLLUP_WATCH"])
);


/*******************
 * rollup.config.js Module Export
 *************/
function serve() {
    let server;
    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = require('child_process').spawn("npm", ["run"])
        }
    }
}

export default {
    input: "./src/client.ts",
    output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "./dist/views/bundle.js"
    },
    plugins: [
        svelte({
            dev: !production,
            include: "./src/**/*.svelte",
            css: css => {
                css.write("./dist/views/styles/bundle.css");
            },
            preprocess: sveltePreprocess({
                ...preprocessOptions,
                sourceMap: !production

                /**
                 * Commented out the below because this file is propagating the
                 * preprocessOptions from `svelte.config.js`, two lines above.
                 */

                // ,
                // scss: {
                //     prependData: `@import "./src/views/styles/variables.scss";`
                // },
                // postcss: {
                //     plugins: [
                //         require("autoprefixer")()
                //     ]
                // },
                // typescript: {
                //     tsconfigDirectory: "./",
                //     tsconfigFile: "./tsconfig.json"
                // }
            })
        }),
        resolve({
			browser: true,
			dedupe: ["svelte"]
		}),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production
        }),
        !production && serve(),
        !production && livereload("src"),
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
}
