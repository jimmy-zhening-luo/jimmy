export { icons } from "./assets";
export const manifest = {
  Facebook: {
    host: "www.facebook.com",
    username: "jimbojet",
    path: {
      post: "/",
    },
  },
  GitHub: {
    host: "github.com",
    username: "jimmy-zhening-luo",
  },
  Instagram: {
    host: "www.instagram.com",
    username: "_jimbojet",
    path: {
      post: "/",
    },
  },
  LinkedIn: {
    host: "www.linkedin.com",
    username: "jimmy-zhening-luo",
    path: {
      pre: "in/",
      post: "/",
    },
  },
  SoundCloud: {
    host: "soundcloud.com",
    username: "jimmyluo",
  },
  Spotify: {
    host: "open.spotify.com",
    username: "1215989421",
    path: {
      pre: "user/",
    },
  },
  Substack: {
    host: "read.jimm.my",
  },
  YouTube: {
    host: "www.youtube.com",
    username: "@jimbojet",
  },
} as const;
