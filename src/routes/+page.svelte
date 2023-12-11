<script>
  import jimmy_logo from "$lib/images/site/jimmy-logo.svg";
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
        <img src="{jimmy_logo}" alt="Jimmy" />
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
    justify-content: center;
    align-items: center;
    flex: 0.2;
  }

  h1 {
    width: 100%;
    font-weight: 600;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 920) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
