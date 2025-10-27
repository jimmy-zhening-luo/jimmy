export class SocialButton<App extends string> {
  public readonly url: string;

  constructor(
    public readonly app: App,
    host: string,
    username: string,
    pre: string,
    post: string,
    public readonly icon: string,
  ) {
    const path = pre + username + post;

    this.url = host
    + (
      path === "" || path.startsWith("/")
        ? ""
        : "/"
    )
    + path;
  }
}
