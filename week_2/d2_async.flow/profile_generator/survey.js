const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your nickname? ', (answer) => {
  console.log(`Cool Name! ${answer}`);
  rl.question('What is an activity you like doing?', (answer) => {
    console.log(`Cool`);
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Cool`);
      rl.question('Which meal is your favourite ', (answer) => {
        console.log(`Cool`);
        rl.question('Whats your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Cool`);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Cool`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Cool`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
