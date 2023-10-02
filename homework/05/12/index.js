class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    if (newRadius < 0) {
      throw new Error("radius must be over 0");
    } else {
      this._radius = newRadius;
    }
  }

  static max(array) {
    if (Array.isArray(array) === false) {
      throw new Error("give an array as parameter");
    }
    if (array.length < 2) {
      throw new Error("give an array that contains at least two objects");
    }
    let biggestRadius = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] instanceof Circle === false) {
        throw new Error("give array containing circle objects");
      }
      if (biggestRadius < array[i].radius) {
        biggestRadius = array[i].radius;
      }
    }

    return biggestRadius;
  }
}

let c = new Circle(50); // sets radius
c.radius = 30; // changes radius, uses setter
console.log(c.radius); // returns radius, uses getter
//c.radius = -70; // crashes app, radius must be >

let a = new Circle(50);
let b = new Circle(40);
let d = new Circle(60);

let x = Circle.max([a, b, c, d]);
console.log(x);
