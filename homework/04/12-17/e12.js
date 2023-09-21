let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

let myfunc = user.sayHello;
myfunc();

// it prints undefined, because it is called as a normal function as opposed to object function call
