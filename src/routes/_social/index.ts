import { SocialFactory } from "./factory";
import { SocialManifest } from "./manifest";
import { SocialIcons } from "./lib";

export default function (apps: readonly SocialApp[]) {
  if (new Set(apps).size !== apps.length)
    throw new RangeError("Duplicate social menu buttons");

  function social(app: SocialApp) {
    const {
      host,
      username = "",
      path: {
        pre = "",
        post = "",
      } = {},
    } = SocialManifest[app],
    icon = SocialIcons[app];

    return new SocialFactory(
      app,
      host,
      username,
      pre,
      post,
      icon,
    );
  }

  return apps.map(app => social(app));
}
