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

let hello = "hello";
let nan = Number(hello);
let transformer = String(nan);
console.log(transformer);

i = 0;
textOutput = "";
while (i < 16) {
  textOutput += "" + transformer;
  i++;
}

console.log(textOutput + " batman! :D");
