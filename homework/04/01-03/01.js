function doIt() {
  return () => console.log("hello world");
}

let f = doIt();
f();
