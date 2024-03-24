<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "./styles.css";
</script>

<div class="app">
  <Header />
  <main><slot /></main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
  }
</style>
