<script
  lang="ts">
  import "../app.css";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  type $$Slots = { "default": Record<string, never> };
</script>

<div
  class="app">
  <Header />
  <main><slot /></main>
  <Footer />
</div>

<style
  lang="css">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
