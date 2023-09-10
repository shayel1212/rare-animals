export const imgService = {
  suggestImgs,
};
import { utilService } from "./util.service.js";
const { cheerio, load } = "cheerio";

function suggestImgs(term) {
  const url = `http://www.istockphoto.com/il/photos/${term}`;
  return utilService.httpGet(url).then((res) => {
    const $ = cheerio.load(res.data);
    const topImg = Array.from($('[class*="bOaTkZcdqgXxzJCZECTz"]'))[0];
    const imgUrl = topImg.attribs.src;
    return imgUrl;
  });
}
