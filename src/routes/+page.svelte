<script
  lang="ts"
  strictEvents>
  import site_logo from "$lib/images/site/logo.svg";
  import Socials from "./Socials.svelte";
</script>

<svelte:head>
  <title>Jimmy</title>
  <meta
    name="description"
    content="Jimmy Luo's personal website" />
</svelte:head>

<section>
  <h1>
    <span
      class="welcome">
      <picture>
        <img
          alt="Jimmy"
          src={site_logo} />
      </picture>
    </span>
    Why does the caged bird sing?
  </h1>
</section>

<section>
  <Socials />
</section>

<style
  lang="css">
  h1 {
    width: 100%;
  }

  .welcome {
    position: relative;
    display: block;
    padding: 0 0 calc(100% * 495 / 935) 0;
    width: 100%;
    height: 0;
  }

  .welcome img {
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
