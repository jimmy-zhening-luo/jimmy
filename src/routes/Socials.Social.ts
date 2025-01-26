import Icons from "./Socials.Social.Icons";

export class Social {
  public readonly url: string;

  constructor(
    public readonly app: SocialApp,
    host: string,
    username = "",
    {
      pre = "",
      post = "",
    }: {
      pre?: string;
      post?: string;
    } = {},
    public readonly title = `${app.charAt(0).toUpperCase()}${app.slice(1)}`,
  ) {
    const _host = host.trim(),
    schemeful = _host.includes("://");

    if (schemeful && ["https", "http"].some(prefix => _host.startsWith(`${prefix}://`)))
      throw new SyntaxError("Host must not include scheme if https");
    else if (_host === "")
      throw new SyntaxError("Host cannnot be empty");

    const path = [
      pre,
      username,
      post,
    ]
      .map(part => part.trim())
      .join(""),
    url = [
      schemeful ? "" : "https://",
      _host,
      path !== "" && !path.startsWith("/") ? "/" : "",
      path,
    ]
      .join("")
      .trim();

    if (url === "")
      throw new SyntaxError("Unexpected: Empty social URL generated");

    this.url = url;
  }

  public get icon() {
    return Icons[this.app];
  }
}
