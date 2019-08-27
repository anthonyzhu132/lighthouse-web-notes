const args = process.argv.slice(2);

// for (let i = 0; i < args.length; i++) {
//   const timer = function (args) {
//     setTimeout(() => {
//       console.log("Hello");
//       process.stdout.write('\x07');
//     }, args[i] * 1000);
//   };
// }

for (let i = 0; i < args.length; i++) {
  setTimeout(() => {
    // console.log("Hello");
    process.stdout.write('\x07');
  }, args[i] * 1000);
}