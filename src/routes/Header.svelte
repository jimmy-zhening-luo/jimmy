<script
  lang="ts"
>
  import { page } from "$app/state";

  const { url } = page;
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
          href="/"
        >
          Jimmy
        </a>
      </li>
      <li
        aria-current="false"
      >
        <a
          href="https://read.jimm.my"
        >
          Essays
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
