let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.sayHello();

let f = user.sayHello;
f();

function sayHello() {
  user.sayHello();
}

setTimeout(() => sayHello(), 1000);

// you get undefined, because with normal function call this changes to undefined

setTimeout(() => user.sayHello(), 1000);

// with => arrow function, node.js creates a variable that stores this

user.sayHello = function () {
  console.log("does it work?");
};

// because of the asynchronous operation, the user sayHello is changed to something else,
// so after the timeout is over, the output is replaced by the new user value that was
// created synchronically
