/*
var sum = null;

function makeCalculation() {
  console.log("2) calculating sum...");
  sum = 5 + 5;
  console.log("3) sum is " + sum);
  setTimeout(sendStuffToBackend, 1000);
}

function sendStuffToBackend() {
  console.log("4) sending " + sum + " to backends database");
  console.log("5) ending the calculation and sending");
}

console.log("1) starting the calculation and sending");
setTimeout(makeCalculation, 2000);


function asynFunc(resolve, reject) {
  setTimeout(() => {
    console.log("calculating stuff");
    let division = 5 / 5;
    resolve(division);
  }, 1000);
}

const calculationPromise = new Promise(asynFunc);


function ready(result) {
  console.log(`result is ${result}`);
}


calculationPromise.then((result) => console.log(`result = ${result}`));
*/

function makeCalculation() {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log("calculating stuff");
      const division = 5 / 5;
      resolve(division);
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve("done");
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation()
  .then((sum) => sendStuffToBackend(sum))
  .then((msg) => console.log(msg));
