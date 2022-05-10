import { load } from "cheerio";
import TurndownService from "turndown";
import request from "./request";
import { Utils } from "./Utils";

const turndownService = new TurndownService();
const { getYoutubeVideo } = new Utils();

interface ContentProps {
  video: string | null;
  md: string;
}

export const getContent = async (url: string): Promise<ContentProps> => {
  const response = await request({
    method: "get",
    url,
  });

  const $ = load(response);

  const video = getYoutubeVideo($.html());

  $("nav").remove().html();
  $("header#header").remove().html();
  $("footer").remove().html();

  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  let md = turndownService.turndown(
    $("body.home").html()?.replace(SCRIPT_REGEX, "\n")
  );

  md = md.substring(0, md.lastIndexOf("MAS TEMAS"));

  //   await fs.writeFile("EXAMPLE.md", md, { encoding: "utf8" });

  return {
    video,
    md,
  };
};
