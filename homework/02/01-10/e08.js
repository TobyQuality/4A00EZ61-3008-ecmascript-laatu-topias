function doIt() {
  console.log("hello");
}
// typeOf describes the type of an object. doIt() is a function,
// so the returned value is "function"
console.log(typeof doIt);
// instanceOf returns a boolean value, telling if an object has the value
// of a given type or not. So doIt instanceof Function returns the value true.
console.log(doIt instanceof Function);
