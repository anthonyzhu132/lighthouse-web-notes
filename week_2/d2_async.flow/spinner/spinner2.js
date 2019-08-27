process.stdout.write('hello from spinner2.js... \rheyyy\n');

let count = 100;
let delay = 200;
const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '-'];

for (let i = 0; i < arr.length; i++) {
  count += delay;

  setTimeout(() => {
    process.stdout.write("\r" + arr[i] + "   ");
  }, count);
};