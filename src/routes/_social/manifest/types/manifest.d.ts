declare type SocialAppManifest<A extends string> = Record<
  A,
  {
    host: string;
    username?: string;
    path?: Partial<Record<"pre" | "post", string>>;
  }
>;
