const URL = require("../model/url");

class UrlService {
  constructor() {}

  async createShort(body, fullUrl) {
    const createdUrl = await URL.create({
      url: body.url,
      shortUrl: `${fullUrl}/${body.alias}`,
      alias: body.alias,
    });
    return createdUrl;
  }

  async getShortUrl(alias) {
    return await URL.findOne({ alias });
  }

  async getAllUrls() {
    return await URL.find();
  }
}

module.exports = UrlService;
