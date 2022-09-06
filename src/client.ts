import Client from "./views/App.svelte";

const client: Client = new Client({
    target: document.body,
    props: {
        name: "Jimmy DELUXE, the build-time-defined value."
    }
});

export default client;
