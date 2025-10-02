import { SocialButton } from "./button";

export function SocialFactory<App extends string>(
  apps: readonly App[],
  icons: Record<App, string>,
  manifest: Record<
    App,
    {
      host: string;
      username?: string;
      path?: Partial<Record<"pre" | "post", string>>;
    }
  >,
) {
  function assemble(app: App) {
    const {
      host,
      username = "",
      path: {
        pre = "",
        post = "",
      } = {},
    } = manifest[app];

    return new SocialButton<App>(
      app,
      host,
      username,
      pre,
      post,
      icons[app],
    );
  }

  return apps.map(app => assemble(app));
}
