const assertEqual = require("./assertEqual");

const tail = function(array) {
  let x = array.slice(1);
  return x;
};

module.exports = tail;