#!/usr/bin/node
/* Script that prints the title of a Star Wars movie w
here the episode number matches a given integer. */

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(url, function (err, response, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(body).title);
  }
}
);
