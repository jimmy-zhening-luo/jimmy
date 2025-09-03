export type SocialAppManifest<App extends string> = Record<
  App,
  {
    host: string;
    username?: string;
    path?: Partial<Record<"pre" | "post", string>>;
  }
>;
