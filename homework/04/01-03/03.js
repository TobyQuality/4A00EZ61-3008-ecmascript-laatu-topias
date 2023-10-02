function makeAdder(n) {
  let number = n;
  return (anotherNumber) => anotherNumber + number;
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // outputs 7
console.log(add10(2)); // outputs 12
