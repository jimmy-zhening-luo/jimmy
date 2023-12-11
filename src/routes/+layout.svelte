<script>
  import Header from "./Header.svelte";
  import "./styles.css";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <span class="copyright">
      <p>&copy; 2023 Jimmy Zhening Luo</p>
    </span>
    <span class="view-source">
      <p><code><a href="https://github.com/jimmy-zhening-luo/jimmy">View Source</a></code></p>
    </span>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 12px 12px 85px 12px;
  }

  footer p {
    font-size: 0.8rem;
  }

  footer .copyright p {
    font-weight: 600;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0px 85px 0px;
    }
  }
</style>
