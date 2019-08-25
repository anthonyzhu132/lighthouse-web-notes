// eslint-disable-next-line func-style
function sum(fromN, toN) {
  if (fromN === toN) {
    return toN;
  }
  return fromN + sum(fromN + 1, toN);
}

console.log(sum(1, 1));
console.log(sum(0, 0));
console.log(sum(5, 5));
console.log(sum(0, 1));
console.log(sum(1, 2));
console.log(sum(3, 7));


module.exports = sum;
