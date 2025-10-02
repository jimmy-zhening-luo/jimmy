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
    {#snippet button(social: typeof socials[number])}
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
    {/snippet}

    {#each socials as social (social.app)}
      {@render button(social)}
    {/each}
  </menu>
</div>
