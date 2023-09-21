function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
  console.log(this instanceof Person);
}

let jackPearson = new Person("Jack", "Pearson");
let robertJackson = new Person("Robert", "Jackson");
let susanMorrison = new Person("Susan", "Morrison");

console.log(jackPearson.firstName + " " + jackPearson.lastName);
console.log(robertJackson.firstName + " " + robertJackson.lastName);
console.log(susanMorrison.firstName + " " + susanMorrison.lastName);

var obj = Person("jack", "smith");
console.log(global.firstName + " " + global.lastName);

// when you don't add new before invoking Person() function,
// then this refers to global.
// the three objects return true, meaning this refers to Person object
// in the last case this returns false, meaning this refers to Global object
