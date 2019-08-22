const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ❌❌ ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  const obj1length = Object.keys(object1).length;
  const obj2length = Object.keys(object2).length;

  if (obj1length !== obj2length) {
    return false;
  }

  for (let matches in object1) {
    
    if (Array.isArray(object1[matches])) {
      if (!eqArrays(object1[matches], object2[matches])) {
        return false;
      }
    
    } else if (object1[matches] !== object2[matches]) {
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

// const eqObjects = function(object1, object2) {
//   let obj1 = Object.keys(object1)
//   let obj2 = Object.keys(object2)

//   if(obj1.length !== obj2.length) {
//     return false;
//   }

//   for (let properties of obj1) [

//   ]
// };
