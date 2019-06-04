const mongoose = require("mongoose");
const cheerio = require("cheerio");
const request = require("request-promise");
const RedditArticle = require("./RedditArticle");

async function connectToMongoDb(){
    const login = getArg('-l'), psw = getArg('-p'), clusterName = getArg('-c');
    await mongoose.connect(
        `mongodb+srv://${login}:${psw}@${clusterName}/redditscraper?retryWrites=true&w=majority`,
        { useNewUrlParser: true }
    );
    console.log("Connected to MongoDB.atlas!")
}

async function scrapeReddit(){
    const html = await request.get("https://www.reddit.com");
    const $ = await cheerio.load(html);
    const titles = $("h2");

    titles.each(async (i, element) => {
        try{
            const title = $(element).text();
            console.log(title);
            const redditArticle = new RedditArticle({
                title
            });
            await redditArticle.save();
        } catch (e){
            console.error(e);
        }
    });
}

/**
 * Method to get args passed as parameters
 * @param {*} param 
 */
function getArg(param) {
    const value = process.argv.find(arg => arg.startsWith(param));
    if (value) return value.slice(2);
    return null;
}


async function main(){
    await connectToMongoDb();
    await scrapeReddit();
}

main();