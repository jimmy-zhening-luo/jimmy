<script
  lang="ts">
  import "./+page.css";
  import site_logo from "$lib/images/site/logo.svg";
  import Socials from "./_social/index.svelte";
</script>

<svelte:head>
  <title>Jimmy</title>
  <meta
    name="description"
    content="Jimmy Luo's personal website" />
</svelte:head>

<section
  class="front-content">
  <h1>
    <span
      class="welcome">
      <picture>
        <img
          alt="Jimmy"
          src={site_logo} />
      </picture>
    </span>
    <span>
      Why does the caged bird sing?
    </span>
  </h1>
</section>

<Socials />
