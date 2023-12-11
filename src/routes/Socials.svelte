<script>
  import i_facebook from "$lib/images/socials/0-facebook-rd.svg";
  import i_instagram from "$lib/images/socials/1-instagram-rd.svg";
  import i_github from "$lib/images/socials/2-github-rd.svg";
  import i_spotify from "$lib/images/socials/3-spotify-rd.svg";
  import i_soundcloud from "$lib/images/socials/4-soundcloud-rd.svg";
  import i_youtube from "$lib/images/socials/5-youtube-rd.svg";
  import i_duolingo from "$lib/images/socials/6-duolingo.svg";
  import i_substack from "$lib/images/socials/7-substack.svg";
  import i_linkedin from "$lib/images/socials/8-linkedin-rd.svg";
</script>

<div class="socials">
  <menu>
    <li>
      <a href="https://facebook.com/jimbojet">
        <img src="{i_facebook}" alt="Facebook" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/_jimbojet">
        <img src="{i_instagram}" alt="Instagram" />
      </a>
    </li>
    <li>
      <a href="https://github.com/jimmy-zhening-luo">
        <img src="{i_github}" alt="GitHub" />
      </a>
    </li>
    <li>
      <a href="https://open.spotify.com/user/1215989421">
        <img src="{i_spotify}" alt="Spotify" />
      </a>
    </li>
    <li>
      <a href="https://soundcloud.com/jimmyluo">
        <img src="{i_soundcloud}" alt="SoundCloud" />
      </a>
    </li>
    <li>
      <a href="https://youtube.com/@jimbojet">
        <img src="{i_youtube}" alt="YouTube" />
      </a>
    </li>
    <li>
      <a href="https://duolingo.com/profile/jimbojet">
        <img src="{i_duolingo}" alt="Duolingo" />
      </a>
    </li>
    <li>
      <a href="https://read.jimm.my">
        <img src="{i_substack}" alt="Substack" />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/jimmy-zhening-luo">
        <img src="{i_linkedin}" alt="LinkedIn" />
      </a>
    </li>
  </menu>
</div>

<style>
  div.socials {
    display: flex;
    justify-content: space-between;
  }

  menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    height: 2.4rem;
  }

  menu img {
    height: 100%;
    width: 100%;
  }

  menu a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    height: 100%;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-2);
  }
</style>
