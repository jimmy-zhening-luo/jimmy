import { menu } from "./classes";
import { manifest, icons } from "./manifest";

export const socials = menu<SocialApp>(
  [
    "Instagram",
    "Facebook",
    "Substack",
    "GitHub",
    "YouTube",
    "Spotify",
    "SoundCloud",
    "LinkedIn",
  ] as const,
  manifest,
  icons,
);
