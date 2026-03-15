<script lang="ts">
  import type { Props } from "./Footer";

  const {
      copyright,
      source,
    }: Props = $props(),
    {
      author,
      year,
    } = (() => copyright)(),
    {
      href,
      string = "View Source",
    } = (() => source)();
</script>

<style lang="css">
  @import "./Footer.css";
</style>

<footer>
  <span class="copyright">
    <p>
      &copy; {year} {author}
    </p>
  </span>
  <span>
    <p>
      <code>
        <a href="https://{href}">
          { string }
        </a>
      </code>
    </p>
  </span>
</footer>
