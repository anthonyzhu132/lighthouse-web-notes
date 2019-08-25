const eqArrays = function(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("These arrays match");
  } else {
    console.log("These arrays do not match");
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ❌❌ ${actual} !== ${expected}`);
  }
};

// LETTER POSITIONS //
const letterPositions = function(sentence) {
  const results = {};
    for (var i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (sentence[i] !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
    // eslint-disable-next-line indent
    }
  return results;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);


console.log(letterPositions("He ll o"));