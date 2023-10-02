/*
function Dog(name) {
  this.name = name;
  this.sniffButt = function () {
    console.log("hello world");
  };
}

Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};
*/

/*
let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();
// sniffButt function is once in the memory

Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};
*/
// spot.delayedSniffButt();
// vilma.delayedSniffButt();
// doesnt work, because settimeout invokes as normal function call
// so this deosnt point to the object anymore

/*
function Dog(name) {
  this.name = name;
  this.sniffButt = function () {
    console.log("hello world");
  };
}
*/
// Now everytime a new Dog object is created, the sniffbutt function
// will be copied everytime a new object is created (two instances with spot and vilma)
// this.sniffbut is inside an invisible constructor function, so it creates a new instance
// with new Dog objects

/*


*/

/*
let obj = { name: "jussi" };

function Dog(name) {
  this.name = name;
  this.sniffButt = this.sniffButt.bind(obj);
}
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};

let jussi = new Dog("joo");
jussi.sniffButt();

// this code results in "jussi sniffs butt", because
// this is pointing to obj because of call function
*/

function Dog(name) {
  this.name = name;
  this.sniffButt = this.sniffButt.bind(this);
}
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};

let spot = new Dog("spot");
spot.sniffButt(); // spot sniffs butt

let vilma = new Dog("vilma");
vilma.sniffButt(); // vilma sniffs butt

// now this points to the object itself
