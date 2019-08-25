const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS