<script lang="ts">
  import type Props from "./Footer";

  const {
      copyright,
      viewSource,
    }: Props = $props(),
    copy = () => copyright,
    {
      author,
      year = new Date()
        .getFullYear()
        .toFixed(0),
    } = copy();
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
        <a href="https://{viewSource.href}">
          View Source
        </a>
      </code>
    </p>
  </span>
</footer>
