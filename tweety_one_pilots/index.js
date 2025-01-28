"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var tweetFile = process.argv[2];
function recurrenceTweets(file) {
    var tmp = new Map();
    var value;
    file.tweets.forEach(function (tweet) {
        tweet.hashtags.forEach(function (hashtag) {
            value = tmp.get(hashtag) || 0;
            tmp.set(hashtag, value + 1);
        });
    });
    return Array.from(tmp.keys()).sort();
}
var fileContent = JSON.parse(fs.readFileSync(tweetFile, "utf8"));
console.log(recurrenceTweets(fileContent));
