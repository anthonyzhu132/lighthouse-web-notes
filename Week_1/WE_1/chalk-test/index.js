const chalk = require("chalk");

const message = `Hello ${chalk.magentaBright.bold.italic.inverse("World")}`;
console.log(message);