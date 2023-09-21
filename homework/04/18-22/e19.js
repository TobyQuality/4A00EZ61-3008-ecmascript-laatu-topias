let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // THIS WORKS
    let thisWorks = this;
    console.log(thisWorks);

    setTimeout(function () {
      thisWorks.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();

// it works! This points to user
