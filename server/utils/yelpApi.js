'use strict';

const yelp = require('yelp-fusion');

const searchRequest = {
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca',
  limit: 20,
  open_now: true
};

const yelpSearch = () => {
  const client = yelp.client(process.env.YELP_TOKEN);

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  });
};

module.exports = yelpSearch;
