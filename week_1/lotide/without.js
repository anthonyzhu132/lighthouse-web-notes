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

const without = function(array, itemsToRemove) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    let matchFound = false;
    for (var x = 0; x < itemsToRemove.length; x++) {
      if (array[i] === itemsToRemove[x]) {
        matchFound = true;
        break;
      }
    }
    if (matchFound === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
} 

console.log(without(["1", "2", "3"], [1, 2, "3"]));
