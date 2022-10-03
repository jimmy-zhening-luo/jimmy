/**
 * The intention of this file in a Svelte project is to fully configure
 * the Svelte client app runtime and build.
 *
 * However, some Svelte configuration leaks into `svelte.config.js`
 * and into the TypeScript config `tsconfig.json`.
 *
 * See `svelte.config.js` for why that file exists.
 *
 * To get Svelte to compile from TypeScript, there's also some
 * Svelte-specific TypeScript typechecking logic that has leaked
 * into `tsconfig.json`.
 *
 * You can see `tsconfig.json`, particularly the `extends` statement at the
 * top of the config (as of v8.1.0), for more context on those Svelte-
 * specific `tsconfig.json` requirements. Anything not in the base config
 * being extended by this project's `tsconfig.json` is my own original
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

// TypeScript-specific imports
import typescript from "@rollup/plugin-typescript";
import sveltePreprocess from "svelte-preprocess";

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
        file: "./dist/bundle.js"
    },
    plugins: [
        svelte({
            dev: !production,
            include: "./src/**/*.svelte",
            css: css => {
                css.write("./dist/styles/bundle.css");
            },
            preprocess: sveltePreprocess({
                sourceMap: !production,
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
