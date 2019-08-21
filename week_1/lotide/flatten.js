const flatten = function(array) {
  let flatArray = [];
  
  for (var i = 0; i < array.length; i++) { //For loop that loops over the first array
    if (Array.isArray(array[i])) { // Condition to show that if there is an array nested within an array, execute this
      for (var x = 0; x < array[i].length; x++) { // for the nested array, run this loop 
        flatArray.push(array[i][x]); // if there is an array, put the nested array numbers out into a new array called flatArray
      }
    } else { 
      flatArray.push(array[i]); // Anything else, to push into the array normally
    }
  }
  return flatArray; // return the flat array and then comsole log will display
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));