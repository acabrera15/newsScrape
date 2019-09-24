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
      var newsObjs = [];

      //gets newInfo from website
      $(".partial.media").each(function(i, element) {
        var newsObj = {
          headline: "",
          summary: "",
          URL: "",
          image: ""
        };
        newsObj.headline = $(element)
          .find(".headline")
          .text()
          .replace(/(\r\n|\n|\r)/gm, "")
          .trim();
        newsObj.summary = $(element)
          .find(".summary.margin-8-bottom.desktop-only")
          .text()
          .replace(/(\r\n|\n|\r)/gm, "")
          .trim();
        newsObj.URL = $(element)
          .find("a")
          .attr("href")
          .replace(/(\r\n|\n|\r)/gm, "")
          .trim();

        console.log(
          $(element)
            .find('.inner-container').text()
        );
        console.log(newsObj);

        newsObjs.push(newsObj);
      });
      result.render("index", { news: newsObjs });
    })
    .catch(function(err) {
      if (err) throw err;
    });
});

module.exports = Router;
