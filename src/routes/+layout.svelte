<script
  lang="ts"
>
  import "../app.css";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";

  type $$Slots = {
    "default": Record<string, never>;
  };
</script>

<style
  lang="css"
>
  @import "./+layout.css";
</style>

<div
  class="app"
>
  <Header/>
  <main>
    <slot/>
  </main>
  <Footer/>
</div>
