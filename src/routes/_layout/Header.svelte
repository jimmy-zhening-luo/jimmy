<script
  lang="ts"
>
  import { page } from "$app/state";
  import { resolve } from "$app/paths";

  const { url } = $state(page),
    {
      outlink,
    }: { outlink: Record<"href" | "anchor", string> } = $props(),
    out = () => outlink,
    {
      href,
      anchor,
    } = out();

</script>

<style
  lang="css"
>
  @import "./Header.css";
</style>

<header>
  <div
    class="corner"
  ></div>

  <nav>
    <svg
      aria-hidden="true"
      viewBox="0 0 2 3"
    >
      <path
        d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"
      />
    </svg>
    <ul>
      <li
        aria-current='{url.pathname === "/"
          ? "page"
          : "false"}'
      >
        <a
          href='{resolve("/")}'
        >
          Jimmy
        </a>
      </li>
      <li
        aria-current="false"
      >
        <a
          href="https://{href}"
        >
          {anchor}
        </a>
      </li>
    </ul>
    <svg
      aria-hidden="true"
      viewBox="0 0 2 3"
    >
      <path
        d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"
      />
    </svg>
  </nav>

  <div
    class="corner"
  ></div>
</header>
