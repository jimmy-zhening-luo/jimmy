import { SocialButton } from "./button";
import type { SocialAppManifest } from "./manifest";
import type { SocialIcons } from "./icons";

export function menu<App extends string>(
  apps: readonly App[],
  manifest: SocialAppManifest<App>,
  icons: SocialIcons<App>,
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
