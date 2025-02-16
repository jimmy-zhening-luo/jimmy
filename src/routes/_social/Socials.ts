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
    "Duolingo",
    "LinkedIn",
  ] as const,
  manifest,
  icons,
);
