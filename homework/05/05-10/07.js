function Person(name) {
  this.name = name;
}
Person.prototype.drinkBeer = function () {
  console.log(this.name + " drinks beer");
};

let jack = new Person("jack");
jack.drinkBeer();
let tina = new Person("tina");
tina.drinkBeer();

function Programmer(name, salary) {
  // this.name = name;
  // invokes the Person function so that this refers to the Programmer object
  Person.call(this, name);
  this.salary = salary;
}
Programmer.prototype.codeApps = function () {
  console.log(this.name + " implements apps");
};
Object.setPrototypeOf(Programmer.prototype, Person.prototype);

let hannah = new Programmer("hannah", 4000);
hannah.codeApps();

hannah.drinkBeer();
