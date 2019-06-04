# reddit-scraper
Web scraper/crawler of Reddit page

## Build Setup

    # install dependencies
    yarn install

## Running the application

First, you need to have an account in a mongoDB cloud solution, such as [mLab](https://mlab.com/) or [mongoDB.atlas](https://cloud.mongodb.com). 

With the account created, you should pass your email, used as a login, and your password as parameters. See the example below.

    # running
    node index.js -l"root" -p"blablabla@jsdjasd4r" -c"cluster0.mongodb.net"

The name of the created database is `redditscraper`. 