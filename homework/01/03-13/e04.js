var readlineSync = require("readline-sync");

let userName = readlineSync.question("May I have your name? ");
let number = readlineSync.question("May I have a number? ");

let i = 0;

let textOutput = "";
while (i < number) {
  textOutput += userName;
  i++;
}
console.log(textOutput);
