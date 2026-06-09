<script
  lang="ts"
  generics="Link extends {
    href: string;
    anchor: string;
  }"
>
  import { page } from "$app/state";
  import { resolve } from "$app/paths";

  const { url } = $state(page),
    { outlinks }: { outlinks: Link[]; } = $props();
</script>

<style lang="css">
  @import "./Header.css";
</style>

<header>
  <div class="corner"></div>

  <nav>
    <svg
      aria-hidden="true"
      viewBox="0 0 2 3"
    >
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      <li
        aria-current={url.pathname === "/"
        ? "page"
        : "false"}
      >
        <a href={resolve("/")}>
          Jimmy
        </a>
      </li>
      {#snippet button(outlink: Link)}
        <li aria-current="false">
          <a href="https://{outlink.href}">
            {outlink.anchor}
          </a>
        </li>
      {/snippet}

      {#each outlinks as outlink (outlink.anchor)}
        {@render button(outlink)}
      {/each}
    </ul>
    <svg
      aria-hidden="true"
      viewBox="0 0 2 3"
    >
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>

  <div class="corner"></div>
</header>
