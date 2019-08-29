const request = require('request');
let args = process.argv.slice(2);
let breed = args[0];
const fs = require('fs');
let web = "https://api.thecatapi.com/v1/breeds/search?q=";
let search = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

request(search, (error, request, body) => {

  if (body === '[]') {
    console.log("Does nto exist");
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
