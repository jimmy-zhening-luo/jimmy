import { menu } from "./classes";
import { manifest, icons } from "./manifest";

export const socials = menu<SocialApp>(
  [
    "Instagram",
    "Facebook",
    "GitHub",
    "LinkedIn",
    "Substack",
    "YouTube",
    "Spotify",
    "SoundCloud",
  ] as const,
  manifest,
  icons,
);
