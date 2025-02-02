import { Button } from "./button";
import { manifest, icons } from "../apps";

export function menu(apps: readonly SocialApp[]) {
  if (new Set(apps).size !== apps.length)
    throw new RangeError("Duplicate social menu buttons");

  function assemble(app: SocialApp) {
    const {
      host,
      username = "",
      path: {
        pre = "",
        post = "",
      } = {},
    } = manifest[app],

    return new Button(
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
