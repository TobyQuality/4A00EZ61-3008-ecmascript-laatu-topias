// solution A:

/*
class Person {
  constructor(name) {
    this.name = name;
    this.hello = function () {
      console.log(`hello ${this.name}`);
    };
    this.hello = this.hello.bind(this);
  }

  delayedHello = function () {
    setTimeout(this.hello, 1000);
  };
}

let jack = new Person("jack");
jack.delayedHello();
*/

// Solution B:
class Person {
  constructor(name) {
    this.name = name;
  }

  hello = () => {
    console.log(`hello ${this.name}`);
  };

  delayedHello = () => {
    setTimeout(this.hello, 1000);
  };
}
let jack = new Person("jack");
jack.delayedHello();
