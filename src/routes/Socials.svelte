<script
  lang="ts">
  import "./Socials.css";
  import socials from "./Socials";
</script>

<div
  class="socials">
  <menu>
    {#each socials as social (social.app)}
      <li>
        <a
          href={social.url}>
          <img
            alt={social.app}
            src={social.icon} />
        </a>
      </li>
    {/each}
  </menu>
</div>
