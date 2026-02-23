<script lang="ts">
  import logo from "$lib/img/site/logo.svg";
  import Socials from "./_social/Socials.svelte";

  const src = $state(logo);
</script>

<style lang="css">
  @import "./+page.css";
</style>

<svelte:head>
  <meta
    name="description"
    content="Jimmy Luo's personal website"
  />
  <title>Jimmy</title>
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <img
          alt="Jimmy"
          {src}
        />
      </picture>
    </span>
    <span>
      Why does the caged bird sing?
    </span>
  </h1>
</section>

<section>
  <Socials />
</section>
