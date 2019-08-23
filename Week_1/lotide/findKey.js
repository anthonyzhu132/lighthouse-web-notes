const findKey = function(object1, cb) {
  for (let key of Object.keys(object1)) {
    if (cb(object1[key])) {
      return key;
    }
  }
  return undefined;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"


// const findKeyByValue = function(objects, value) {
//   for (let topic of Object.keys(objects)) {
//     if (objects[topic] === value) {
//       return topic;
//     }
//   }
// };