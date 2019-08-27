const sentence = "Hello";

// for (const char of sentence) {
//   let count = 2000;
//   setTimeout(() => {
//     process.stdout.write(sentence[char]);
//   }, count);
// }

let delay = 200;
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  count += delay;
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, count);
}

setTimeout(() => {
  process.stdout.write("\n");
}, sentence.length * delay);

