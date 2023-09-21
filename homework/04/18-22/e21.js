let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let copy = this.sayHello.bind(this);
    setTimeout(copy, 1000);
  },
};
user.sayDelayedHello();
