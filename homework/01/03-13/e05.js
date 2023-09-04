let hello = "hello";
let nan = Number(hello);
let transformer = String(nan);
console.log("Hello transformed to: " + transformer);

let i = 0;
let textOutput = "";
while (i < 16) {
  textOutput += "" + transformer;
  i++;
}

console.log(textOutput + " batman! :D");
