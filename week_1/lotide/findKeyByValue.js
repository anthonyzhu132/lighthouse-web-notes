const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ❌❌ ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(objects, value) {
  for (let topic of Object.keys(objects)) {
    console.log(objects[topic]);
    if (objects[topic] === value) {
      return topic;
    }
  }
};




assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);