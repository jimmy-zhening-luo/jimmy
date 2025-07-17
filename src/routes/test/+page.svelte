<script
  lang="ts"
>
  import type { PageProps } from "./$types.js";

  const { data } = $props(),
    { content } = data as PageProps["data"];
</script>

<svelte:head>
  <title>Jimmy: Test</title>
  <meta
    name="description"
    content="Jimmy Luo's personal website: a test page"
  />
</svelte:head>

<section>
  <h1>
    {content}
  </h1>
</section>
