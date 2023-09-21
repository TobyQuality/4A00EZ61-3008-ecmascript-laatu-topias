function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
  if (!(this instanceof Person)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// let jackPearson = new Person("Jack", "Pearson");
// console.log(jackPearson.firstName + " " + jackPearson.lastName);
var obj = Person("jack", "smith");

// program throws error, because this does not refer to a Person object
