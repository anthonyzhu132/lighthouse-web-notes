// The second argument/parameter is expected to be a (callback) function


const findWaldo = function(names, cb) {
  names.forEach(function(name, i) {
    if (name === "Waldo") {
      cb([i]);
    }
  });   // execute callback
};

const actionWhenFound = function(i) {
  console.log("Found him! " + "At index " + i);
};

findWaldo(["Alice", "Bob", "Bob", "Waldo"], actionWhenFound);


//   names.foreach(cb(names))
//     if (name === "Waldo") {
//       cb();   // execute callbacka
//     }
// };
