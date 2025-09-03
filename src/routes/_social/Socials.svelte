<script
  lang="ts"
>
  import { socials } from "./Socials";
</script>

<style
  lang="css"
>
  @import "./Socials.css";
</style>

<div
  class="socials"
>
  <menu>
    {#each socials as social (social.app)}
      <li>
        <a
          href="https://{social.url}"
        >
          <img
            alt={social.app}
            src={social.icon}
          />
        </a>
      </li>
    {/each}
  </menu>
</div>
