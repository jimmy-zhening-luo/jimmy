<script>
  import { page } from "$app/stores";
</script>

<header>
  <div class="corner"></div>

  <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"></path>
    </svg>
    <ul>
      <li aria-current="{$page.url.pathname === '/' ? 'page' : 'false'}">
        <a href="/"> Jimmy </a>
      </li>
      <li aria-current="{$page.url.pathname === '/debug/' || $page.url.pathname === '/debug' ? 'page' : 'false'}">
        <a href="/debug"> Debug </a>
      </li>
      <li aria-current="false">
        <a href="https://read.jimm.my"> Essays </a>
      </li>
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"></path>
    </svg>
  </nav>

  <div class="corner"></div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  .corner {
    width: 6em;
    height: 6em;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    display: block;
    width: 2em;
    height: 3em;
  }

  path {
    fill: var(--background);
  }

  ul {
    list-style: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 3em;
    background-size: contain;
    background: var(--background);
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"]::before {
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    --size: 6px;
    width: 0;
    height: 0;
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
    content: "";
  }

  nav a {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    height: 100%;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-text);
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
