import preprocess from 'svelte-preprocess';
// import adapter_azure_static from 'svelte-adapter-azure-swa';
import adapter_node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter_node()
	}
};

export default config;
