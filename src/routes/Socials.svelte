<script>
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
        <img src="{i_fb}" alt="Facebook" />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/_jimbojet">
        <img src="{i_ig}" alt="Instagram" />
      </a>
    </li>
    <li>
      <a href="https://github.com/jimmy-zhening-luo">
        <img src="{i_gh}" alt="GitHub" />
      </a>
    </li>
    <li>
      <a href="https://open.spotify.com/user/1215989421">
        <img src="{i_sp}" alt="Spotify" />
      </a>
    </li>
    <li>
      <a href="https://soundcloud.com/jimmyluo">
        <img src="{i_sc}" alt="SoundCloud" />
      </a>
    </li>
    <li>
      <a href="https://youtube.com/@jimbojet">
        <img src="{i_yt}" alt="YouTube" />
      </a>
    </li>
    <li>
      <a href="https://duolingo.com/profile/jimbojet">
        <img src="{i_du}" alt="Duolingo" />
      </a>
    </li>
    <li>
      <a href="https://read.jimm.my">
        <img src="{i_su}" alt="Substack" />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/jimmy-zhening-luo">
        <img src="{i_li}" alt="LinkedIn" />
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
