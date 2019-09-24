var newsModel = require("../models/newsModel");
var axios = require("axios");
var express = require("express");
var cheerio = require("cheerio");
var Router = express.Router();

Router.get("/", function(req, result) {
  axios
    .get("https://time.com/section/tech/")
    .then(function(res) {
        const $ = cheerio.load(res.data);

        $('.partial.media').each(function(i, element) {
            var headline = $(element).find('.headline').text();
            var summary  = $(element).find('.summary.margin-8-bottom.desktop-only').text();
            var URL  = $(element).find('a').attr('href');
            console.log("HEAD" +headline)
            console.log("SUM" + summary)
            console.log("URL" + URL)

        });

    })
    .catch(function(err) {
      if (err) throw err;
    });
  var $ = cheerio.load(res.data);
});

module.exports = Router;
