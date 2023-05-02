const router = require('express').Router()
const { ApifyClient } = require("apify-client");



const client = new ApifyClient({
  token: 'apify_api_8RkcYd9uhduQWS8WmhNqnZtzcZCqaF3iIhGm',
});

// To get trending topics...
router.get('/trends', async (req, res, next) => {
  try {
    const id = req.query.woeid
    const trends = await client.get('trends/place.json', {
      id,
    })
    res.send(trends)
  } catch (error) {
    console.log(error.message)
    next(error)
  }
})

// This route gets the WOEID for a particular location (lat/long)
router.get('/near-me', async (req, res, next) => {
  try {
    // const { lat, long } = req.query
    const response = await client.get('/trends/closest.json', {
      lat,
      long,
    })
    res.send(response)
  } catch (error) {
    console.log(error.message)
    next(error)
  }
})

// จะเห็นก่อน ถ้า พิมพ์ test
router.get('/test', async (req, res, next) => {
  // const id = req.query.data
  let user = [];
  try {
    const input = {
      "searchTerms": [
          "ไก่ทอด"
      ],
      "searchMode": "top",
      "profilesDesired": 1,
      "tweetsDesired": 1,
      "mode": "replies",
      "proxyConfig": {
          "useApifyProxy": true
      },
      "extendOutputFunction": async ({ data, item, page, request, customData, Apify }) => {
        return item;
      },
      "extendScraperFunction": async ({ page, request, addSearch, addProfile, _, addThread, addEvent, customData, Apify, signal, label }) => {
      },
      "handle": [
        `@NBA`
      ],
      "acount": [
        "NBA"
      ],
      "customData": {},
      "handlePageTimeoutSecs": 500,
      "maxRequestRetries": 6,
      "maxIdleTimeoutSecs": 60
    };
    let searchTerms = input.searchTerms;
    user.push(searchTerms); 
    let account = input.acount;
    user.push(account); 
    let handle = input.handle;
    user.push(handle); 
    const run = await client.actor("quacker/twitter-scraper").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    items.forEach((item) => {
        user.push(item['view_count']); 
        user.push(item['retweet_count']);
        user.push(item['favorite_count']);
        user.push(item['reply_count']);
    });
    console.log("Successfully");
    console.log(user); //logข้อมูลออกมาดูว่าเก็บครบไหม
    res.send({items , user})
  } catch (error) {
    console.log(error.message)
    next(error)
  }
})

router.get('/:data', async (req, res, next) => {
  const data = req.params.data
  console.log(data);
  let user = [];
  try {
    const input = {
      "searchTerms": [
        `${data}`
      ],
      "searchMode": "top",
      "profilesDesired": 1,
      "tweetsDesired": 1,
      "mode": "replies",
      "proxyConfig": {
          "useApifyProxy": true
      },
      "extendOutputFunction": async ({ data, item, page, request, customData, Apify }) => {
        return item;
      },
      "extendScraperFunction": async ({ page, request, addSearch, addProfile, _, addThread, addEvent, customData, Apify, signal, label }) => {
      },
      "handle": [
        `@${data}`
      ],
      "acount": [
        `${data}`
      ],
      "customData": {},
      "handlePageTimeoutSecs": 500,
      "maxRequestRetries": 6,
      "maxIdleTimeoutSecs": 60
    };
    let searchTerms = input.searchTerms;
    user.push(searchTerms); 
    let account = input.acount;
    user.push(account); 
    let handle = input.handle;
    user.push(handle); 
    const run = await client.actor("quacker/twitter-scraper").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    items.forEach((item) => {
        user.push(item['view_count']); 
        user.push(item['retweet_count']);
        user.push(item['favorite_count']);
        user.push(item['reply_count']);
    });
    console.log("Successfully");
    console.log(user); //logข้อมูลออกมาดูว่าเก็บครบไหม
    res.send({items , user})
  } catch (error) {
    console.log(error.message)
    next(error)
  }
})


async function scrapeTwitter(searchTerm) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

  const encodedSearch = encodeURIComponent(searchTerm);
  const url = `https://twitter.com/search?q=${encodedSearch}&src=typed_query`;

  await page.goto(url);
  await page.screenshot({path: 'example.png'});

  const tweets = await page.evaluate(() => {
    const tweetNodes = document.querySelectorAll('article[role="article"]');
    const tweetData = [];

    tweetNodes.forEach((tweetNode) => {
      try {
        console.log('ok');
        const username = tweetNode.querySelector('div[data-testid="tweet"] a[href*="/"] > div > div:nth-child(2) > div > span').innerText;
        const tweetText = tweetNode.querySelector('div[data-testid="tweet"] > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > span').innerText;
        tweetData.push({ username, tweetText });
      } catch (error) {
        console.error('Error parsing tweet:', error);
      }
    });

    return tweetData;
  });

  await browser.close();
  return tweets;
}


module.exports = router;



