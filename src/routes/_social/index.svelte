<script
  lang="ts">
  import "./index.css";
  import SocialsMenu from "./index";

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

<section
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
</section>
