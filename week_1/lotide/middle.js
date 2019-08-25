const eqArrays = function(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)) {
    console.log("These arrays match");
  } else {
    console.log("These arrays do not match");
  }
}

const middle = function(array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length / 2);
  
  if (array.length === 1 || array.length === 2) {
    return middleArray;
  }
  if (array.length % 2 !== 0) {
    middleArray.push(array[middleIndex]);
  } else  {
    middleArray.push(array[middleIndex - 1]);
    middleArray.push(array[middleIndex]);
  }
  return middleArray;
};

console.log(middle([1, 2, 3]));