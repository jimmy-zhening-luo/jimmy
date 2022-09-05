import Client from "./views/App.svelte";

const client: Client = new Client({
    target: document.body,
    props: {
        name: "Jimbob"
    }
});

export default client;
