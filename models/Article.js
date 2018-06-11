var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  link: {
    type: String,
    required: true
  },
  title: String,
  story: String,
  date: String,
  author: String
});

var Article = mongoose.model("Article", ArticleDB);

module.exports = Article;