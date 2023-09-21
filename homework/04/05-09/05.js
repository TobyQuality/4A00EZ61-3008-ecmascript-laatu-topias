function doIt() {
  jotain = "moi";
  console.log(this);
  console.log(this == global);
}

doIt();

console.log(jotain);
console.log(jotain === global.jotain);

// doIt() prints global object
