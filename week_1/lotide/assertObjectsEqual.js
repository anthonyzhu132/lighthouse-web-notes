const assertObjectsEqual = function(object1, object2) {
  if (eqObjects(object1, object2)) {
    return "These Objects Match!";
  } else {
    return "These Objects do not match!";
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

console.log(assertObjectsEqual(cd, dc));

