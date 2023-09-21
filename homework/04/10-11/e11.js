function doIt(a, b) {
  console.log(this);
}
// doIt(5,5);
doIt.apply({}, [5, 5]);

// instead of giving separate arguments after the first one,
// you give an array (containing separate arguments)
