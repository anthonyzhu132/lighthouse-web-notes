const findWaldo = function(names, cb) {
  names.forEach(function(name, i) {
    if (name === "Waldo") {
      cb([i]);
    }
  });   // execute callback
};

findWaldo(["Alice", "Bob", "Bob", "Waldo"], function (index) {
  console.log("Found him! " + "At index " + [index]);
});