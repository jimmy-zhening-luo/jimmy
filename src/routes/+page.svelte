<script>
  import site_logo from "$lib/images/site/logo.svg";
  import Socials from "./Socials.svelte";
</script>

<svelte:head>
  <title>Jimmy</title>
  <meta name="description" content="Jimmy Luo's personal website" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <img src="{site_logo}" alt="Jimmy" />
      </picture>
    </span>
    Why does the caged bird sing?
  </h1>
</section>

<section>
  <Socials />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    flex: 0.2;
    justify-content: center;
    align-items: center;
  }

  h1 {
    width: 100%;
    font-weight: 600;
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
