var test1 = "this text is shown everywhere";

function testingVariables() {
  console.log(test1);
  var test2 = "this text is only shown inside function scope";
}

// this doesn't work, results in crash/error: console.log(test2);

let test3 = "this variable's content can be changed";
console.log(test3);
test3 = "like so";
console.log(test3);

const test4 = "this variable's content cannot be changed";
console.log(test4);

// trying to change test4's content will result in crash, eg. test4 = "won't work"
