<script
  lang="ts">
  import "./Footer.css";
  import Footer from "./Footer";
</script>

<footer>
  <span
    class="copyright">
    <p>
      &copy; {Footer.copyright.year} {Footer.copyright.author}
    </p>
  </span>
  <span
    class="source">
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
