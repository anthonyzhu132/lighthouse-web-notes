
const getInput = function {
  return process.argv.slice(2).join(" ");
}

const map = {
  "a": 4,
  "e": 3,
  "o": 0,
  "l": 1
};

const obfuscate = function(pass) {
  let password = "";

  for (var i = 0; i < pass.length; i++) {
    if(map.hasOwnProperty(pass[i])) {
      password += map[pass[i]]
    } else {
      password += pass[i]
    }
  }
  return password;
}

console.log(obfuscate("passwordel"));
