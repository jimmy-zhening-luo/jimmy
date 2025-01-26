import { Social } from "./Socials.Social";

export default [
  new Social(
    "instagram",
    "www.instagram.com",
    "_jimbojet",
    {
      post: "/",
    },
  ),
  new Social(
    "facebook",
    "www.facebook.com",
    "jimbojet",
    {
      post: "/",
    },
  ),
  new Social(
    "substack",
    "read.jimm.my",
  ),
  new Social(
    "github",
    "github.com",
    "jimmy-zhening-luo",
    {},
    "GitHub",
  ),
  new Social(
    "youtube",
    "www.youtube.com",
    "@jimbojet",
    {},
    "YouTube",
  ),
  new Social(
    "spotify",
    "open.spotify.com",
    "1215989421",
    {
      pre: "user/",
    },
  ),
  new Social(
    "soundcloud",
    "soundcloud.com",
    "jimmyluo",
    {},
    "SoundCloud",
  ),
  new Social(
    "duolingo",
    "www.duolingo.com",
    "jimbojet",
    {
      pre: "profile/",
    },
  ),
  new Social(
    "linkedin",
    "www.linkedin.com",
    "jimmy-zhening-luo",
    {
      pre: "in/",
      post: "/",
    },
    "LinkedIn",
  ),
] as const;
