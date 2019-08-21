const argument = process.argv.slice(2);
let num = argument;
num = Number(num);

const Randomizer = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const diceRoll = function(number) {
  let rolledDice = [];
  for (var i = 0; i < number; i++) {
    rolledDice.push(Randomizer(1, 7))
  }
  return rolledDice;
}

console.log(`Rolled  ${num} dice: ${diceRoll(num)}`);