<script lang="ts">
  import "../app.css";
  import Header from "./_layout/Header.svelte";
  import Footer from "./_layout/Footer.svelte";
  import type { Snippet } from "svelte";

  const { children }: {
    children: Snippet;
  } = $props();
</script>

<style lang="css">
  @import "./+layout.css";
</style>

<div class="app">
  <Header
    outlink={{
      href: "read.jimm.my",
      anchor: "Essays",
    }}
  />
  <main>
    {@render children()}
  </main>
  <Footer
    copyright={{ author: "Jimmy Zhening Luo" }}
    viewSource={{ href: "github.com/jimmy-zhening-luo/jimmy" }}
  />
</div>
