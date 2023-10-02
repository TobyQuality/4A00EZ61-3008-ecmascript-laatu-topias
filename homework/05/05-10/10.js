// ES6:
/*
class Mammal {
  constructor(name) {
    this.name = name;
  }
  giveBirth() {
    console.log(this.name + " gives birth");
  }
}

class Dog extends Mammal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(this.name + " barks");
  }
}

class Cat extends Mammal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  meow() {
    console.log(this.name + " meow");
  }
}
*/

function Mammal(name) {
  this.name = name;
}

Mammal.prototype.giveBirth = function () {
  console.log(this.name + " gives birth");
};

let mammal = new Mammal("mammal");
mammal.giveBirth();

function Dog(name, breed) {
  Mammal.call(this, name);
  this.breed = breed;
}
Dog.prototype.bark = function () {
  console.log(this.name + " barks");
};
Object.setPrototypeOf(Dog.prototype, Mammal.prototype);

let dog = new Dog("dog", "dalmatian");
console.log(dog.breed);
dog.bark();
dog.giveBirth();

function Cat(name, breed) {
  Mammal.call(this, name);
  this.breed = breed;
}
Cat.prototype.meow = function () {
  console.log(this.name + " meows");
};
Object.setPrototypeOf(Cat.prototype, Mammal.prototype);

let cat = new Cat("cat", "just an orange cat");
cat.giveBirth();
console.log(cat.breed);
cat.meow();
