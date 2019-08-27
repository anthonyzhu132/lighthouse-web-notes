const args = process.argv.slice(2);
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (key === '\u0003') {
    process.exit();
  }
  if (!isNaN(Number(key)) && key >= 1 && key <= 9) {
    console.log("Setting timer for " + key + " seconds");
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});