const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ❌❌ ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  const results = {};
  let sentences = sentence.split(" ").join("")
  console.log(sentences);
    for(let letters of sentences) {
      if (results[letters]) { 
          results[letters] += 1;
        } else {
          results[letters] = 1;
        }
      }
  return results;
}

const result1 = countLetters("lighthouse in the house");

console.log(countLetters('Hello World'));
