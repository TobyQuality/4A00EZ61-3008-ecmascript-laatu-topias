function doIt1() {
  console.log("hello");
}
doIt1();
let doIt2 = new Function("", "console.log('hello')");
doIt2.call();

function sum1(a, b) {
  return a + b;
}
let s1 = sum1(5, 5);
console.log(s1);

let sum2 = new Function("a", "b", "return a + b");
let s2 = sum2.call({}, 5, 5);
console.log(s2);

function doIt(a, b) {
  console.log(this);
}
doIt(5, 5);
// doIt.call({}, 5, 5)

function doIt(a, b) {
  console.log(this);
}
// doIt(5,5);
doIt.call({}, 5, 5);

function doIt(a, b) {
  console.log(this);
}
let object = { key: "value" };
doIt.call(object, 5, 5);

// object called object is the first argument, defining doIt's this
