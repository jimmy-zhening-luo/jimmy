<script
  lang="ts">
  import Footer from "./Footer";
</script>

<style
  lang="css">
  @import "./Footer.css";
</style>

<footer>
  <span
    class="copyright">
    <p>
      &copy; {Footer.copyright.year} {Footer.copyright.author}
    </p>
  </span>
  <span>
    <p>
      <code>
        <a
          href={Footer.source.target}>
          {Footer.source.label}
        </a>
      </code>
    </p>
  </span>
</footer>
