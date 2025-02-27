<script
  lang="ts"
>
  import site_logo from "$lib/images/site/logo.svg";
  import Socials from "./_social/Socials.svelte";
</script>

<style
  lang="css"
>
  @import "./+page.css";
</style>

<svelte:head>
  <title>Jimmy</title>
  <meta
    name="description"
    content="Jimmy Luo's personal website"
  />
</svelte:head>

<section>
  <h1>
    <span
      class="welcome"
    >
      <picture>
        <img
          alt="Jimmy"
          src={site_logo}
        />
      </picture>
    </span>
    <span>
      Why does the caged bird sing?
    </span>
  </h1>
</section>

<section>
  <Socials/>
</section>
