const { default: mongoose } = require("mongoose");

const urlModel = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
  },
});

const URL = mongoose.model("URL", urlModel);

module.exports = URL;
