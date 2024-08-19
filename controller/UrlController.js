class UrlController {
  constructor(urlService) {
    this.urlService = urlService;
    this.createShort = this.createShort.bind(this);
    this.getShortUrl = this.getShortUrl.bind(this);
    this.getAllUrls = this.getAllUrls.bind(this);
  }

  async createShort(req, res, next) {
    const fullUrl = req.protocol + "://" + req.get("host");

    try {
      const createdUrl = await this.urlService.createShort(req.body, fullUrl);
      res.status(201).json({
        message: "URL shortened successfully",
        data: createdUrl,
      });
    } catch (error) {
      next(error);
    }
  }

  async getShortUrl(req, res, next) {
    try {
      const url = await this.urlService.getShortUrl(req.params.alias);

      if (!url) {
        return res.status(404).json({
          message: "URL not found",
        });
      }

      res.redirect(url.url);

      //   res.status(200).json({
      //     message: "URL found",
      //     data: url,
      //   });
    } catch (error) {
      next(error);
    }
  }

  async getAllUrls(req, res, next) {
    try {
      const urls = await this.urlService.getAllUrls();
      res.status(200).json({
        message: "All URLs",
        data: urls,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UrlController;
