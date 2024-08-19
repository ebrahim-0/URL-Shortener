const UrlController = require("../controller/UrlController");
const UrlService = require("../services/UrlService");

const router = require("express").Router();

const urlService = new UrlService();

const urlController = new UrlController(urlService);

router.post("/shorten", urlController.createShort);

router.get("/:alias", urlController.getShortUrl);

router.get("/url/all", urlController.getAllUrls);

/* GET home page. */
router.get("/", async function (req, res, next) {
  const urls = await urlService.getAllUrls();
  res.render("index", {
    title: "Express",
    urls,
  });
});

module.exports = router;
