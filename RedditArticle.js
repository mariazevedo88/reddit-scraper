const mongoose = require("mongoose");

const RedditArticle = mongoose.model(
    "RedditArticle", 
    mongoose.Schema({
        title: String
    })
);

module.exports = RedditArticle;