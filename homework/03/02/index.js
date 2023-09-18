function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log("calculating stuff");
      const division = a / b;
      if (b === 0) {
        reject("Cannot divide by zero");
      } else {
        resolve(division);
      }
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
      const random = Math.floor(Math.random() * 2);
      return random === 1 ? resolve("done") : reject("error");
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

makeCalculation(10, 5)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));

makeCalculation(10, 0)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
