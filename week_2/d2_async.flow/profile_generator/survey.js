const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your nickname? ', (answer1) => {
  console.log(`Cool Name! ${answer1}`);
  rl.question('What is an activity you like doing?', (answer2) => {
    console.log(`Cool`);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Cool`);
      rl.question('Which meal is your favourite ', (answer4) => {
        console.log(`Cool`);
        rl.question('Whats your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Cool`);
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            console.log(`Cool`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Cool`);
              console.log(answer1 + " Loves Listening to " + answer3 + " While " + answer2 + " devouring " + answer5 + " for " + answer4 + " prefers " + answer6 + " oveer any sport" + " and is great at " + answer7);
              rl.close();
            });
          });
        });
      });
    });
  });
});

