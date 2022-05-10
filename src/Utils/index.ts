export class Utils {
  constructor() {}

  public getYoutubeVideo(html: string): string | null {
    // eslint-disable-next-line operator-linebreak
    const regExp =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const match = html.match(regExp);
    return (
      // eslint-disable-next-line operator-linebreak
      match?.filter((p: string) => p.includes("www.youtube.com/embed"))[0] ||
      null
    );
  }
}
