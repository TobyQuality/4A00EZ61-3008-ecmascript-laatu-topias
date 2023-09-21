let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    /*setTimeout(function () {
      this.sayHello();
    }, 1000);*/
    setTimeout(() => {
      this.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();

// it fails because the function side setTimeout is called as a normal function, pointing to global
// because global doesnt have sayHello property, it fails

sayDelayedHello: function sayDelayedHello() {
  var _this = this;
  setTimeout(function () {
    _this.sayHello();
  }, 1000);
}

// in babel the lexical this is replaced by variable _this, which stores this (user object)
// then inside the settimeout instead of using this it uses the variable _this
