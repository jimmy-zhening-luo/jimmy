<script
  lang="ts"
  strictEvents>
  import i_fb from "$lib/images/socials/0-facebook-rd.svg";
  import i_ig from "$lib/images/socials/1-instagram-rd.svg";
  import i_gh from "$lib/images/socials/2-github-rd.svg";
  import i_sp from "$lib/images/socials/3-spotify-rd.svg";
  import i_sc from "$lib/images/socials/4-soundcloud-rd.svg";
  import i_yt from "$lib/images/socials/5-youtube-rd.svg";
  import i_du from "$lib/images/socials/6-duolingo.svg";
  import i_su from "$lib/images/socials/7-substack.svg";
  import i_li from "$lib/images/socials/8-linkedin-rd.svg";
</script>

<div class="socials">
  <menu>
    <li>
      <a href="https://facebook.com/jimbojet">
        <img
          alt="Facebook"
          src={i_fb} />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/_jimbojet">
        <img
          alt="Instagram"
          src={i_ig} />
      </a>
    </li>
    <li>
      <a href="https://github.com/jimmy-zhening-luo">
        <img
          alt="GitHub"
          src={i_gh} />
      </a>
    </li>
    <li>
      <a href="https://open.spotify.com/user/1215989421">
        <img
          alt="Spotify"
          src={i_sp} />
      </a>
    </li>
    <li>
      <a href="https://soundcloud.com/jimmyluo">
        <img
          alt="SoundCloud"
          src={i_sc} />
      </a>
    </li>
    <li>
      <a href="https://youtube.com/@jimbojet">
        <img
          alt="YouTube"
          src={i_yt} />
      </a>
    </li>
    <li>
      <a href="https://duolingo.com/profile/jimbojet">
        <img
          alt="Duolingo"
          src={i_du} />
      </a>
    </li>
    <li>
      <a href="https://read.jimm.my">
        <img
          alt="Substack"
          src={i_su} />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/jimmy-zhening-luo">
        <img
          alt="LinkedIn"
          src={i_li} />
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
    list-style: none;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    margin: 0;
    padding: 0;
  }

  li {
    flex: 0 0 auto;
    width: 2.4rem;
    height: 2.4rem;
  }

  menu img {
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
</style>
