class Person {
  constructor(name) {
    this.name = name;
  }
  drinkBeer() {
    console.log(this.name + " drinks beer");
  }
  sayHello() {
    console.log("hello from " + this.name);
  }
}
let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();

// The functions are once in memory, as they are stored inside Person prototype
// (outside of the constructor function of Person)

Person.prototype.sayHello();
Person.prototype.drinkBeer();

/*
class Person {
  constructor(name) {
    this.name = name;
    this.drinkBeer = function () {
      console.log(this.name + " drinks beer");
    };
  }
  sayHello() {
    console.log("hello from " + this.name);
  }
}

let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();

// The functions are once in memory, as they are stored inside Person prototype.

Person.prototype.sayHello();
Person.prototype.drinkBeer();
*/

// Now drinkBeer function multiplies each time a new Person object is created
// because it is declared inside constructor function. If functions are declared
// outside of constructor function, they are stored once in memory inside Person prototype
