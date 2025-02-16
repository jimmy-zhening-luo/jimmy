import { SocialButton } from "./button";

export function menu<A extends string>(
  apps: readonly A[],
  manifest: SocialAppManifest<A>,
  icons: SocialIcons<A>,
) {
  if (new Set(apps).size !== apps.length)
    throw new RangeError("Duplicate social menu buttons");

  function assemble(app: A) {
    const {
      host,
      username = "",
      path: {
        pre = "",
        post = "",
      } = {},
    } = manifest[app];

    return new SocialButton<A>(
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
