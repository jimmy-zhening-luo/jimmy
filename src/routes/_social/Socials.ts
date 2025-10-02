import { SocialFactory } from "./factory";
import { SocialIcons, SocialManifest } from "./assets";
import type { Social } from "./Social";

export const socials = SocialFactory<Social>(
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
  SocialIcons,
  SocialManifest,
);
