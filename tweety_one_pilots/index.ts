import * as fs from "fs";

const tweetFile: string = process.argv[2];

interface Tweet {
    user_id: number,
    timestamp: number,
    hashtags: string[]
}

interface TweetList {
    percentage_threshold: number,
    tweets: Tweet[],
    session_name: string,
    teacher_name: string
}

function recurrenceTweets(file: TweetList): string[] {
    const tmp: Map<string, number> = new Map();
    let value: number;
    file.tweets.forEach((tweet) => {
        tweet.hashtags.forEach((hashtag) => {
            value = tmp.get(hashtag) || 0;
            tmp.set(hashtag, value + 1);
        })
    })
    return Array.from(tmp.keys()).sort();
}

const fileContent: TweetList = JSON.parse(fs.readFileSync(tweetFile, "utf8"));

console.log(recurrenceTweets(fileContent));