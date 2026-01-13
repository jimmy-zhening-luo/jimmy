<script lang="ts">
  interface Props {
    copyright: {
      author: string;
      year?: string;
    };
    viewSource: {
      href: string;
    };
  }

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
