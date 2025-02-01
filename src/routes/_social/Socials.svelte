<script
  lang="ts">
  import SocialsMenu from "./Socials";

  const socials = SocialsMenu([
    "Instagram",
    "Facebook",
    "Substack",
    "GitHub",
    "YouTube",
    "Spotify",
    "SoundCloud",
    "Duolingo",
    "LinkedIn",
  ]);
</script>

<style
  lang="css">
  @import "./Socials.css";
</style>

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
