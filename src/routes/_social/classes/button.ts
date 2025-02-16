export class SocialButton<A extends string> {
  public readonly url: string;

  constructor(
    public readonly app: A,
    host: string,
    username: string,
    pre: string,
    post: string,
    public readonly icon: string,
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
}
