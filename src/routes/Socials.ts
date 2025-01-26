import { Social } from "./_social";

export default [
  new Social(
    "Instagram",
    "www.instagram.com",
    "_jimbojet",
    {
      post: "/",
    },
  ),
  new Social(
    "Facebook",
    "www.facebook.com",
    "jimbojet",
    {
      post: "/",
    },
  ),
  new Social("Substack", "read.jimm.my"),
  new Social("GitHub", "github.com", "jimmy-zhening-luo"),
  new Social("YouTube", "www.youtube.com", "@jimbojet"),
  new Social(
    "Spotify",
    "open.spotify.com",
    "1215989421",
    {
      pre: "user/",
    },
  ),
  new Social("SoundCloud", "soundcloud.com", "jimmyluo"),
  new Social(
    "Duolingo",
    "www.duolingo.com",
    "jimbojet",
    {
      pre: "profile/",
    },
  ),
  new Social(
    "LinkedIn",
    "www.linkedin.com",
    "jimmy-zhening-luo",
    {
      pre: "in/",
      post: "/",
    },
  ),
] as const;
