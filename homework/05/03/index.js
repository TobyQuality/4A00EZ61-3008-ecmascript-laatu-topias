function ClosureClock() {
  // closure variable, preserving the value of this in inner functions
  let closureThis = this;
  this.time = new Date().toString();
  this.startInterval = function () {
    // This also works with no declared closure variable like this:
    // setInterval(() => this.tick(), 1000);
    // all you need is a helper function (in this case an anonymous class)
    // that makes an object's function call
    setInterval(() => closureThis.tick(), 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}

// using arrow syntax creates a "hidden" variable
// with a "copy" or a reference to the the object (this),
// like so: var _this = this
function ArrowSyntaxClock() {
  this.time = new Date().toString();
  this.startInterval = () => {
    setInterval(this.tick, 1000);
  };
  this.tick = () => {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = () => {
    return this.time;
  };
}

// In this constructor all the functions are bound
// to point at the object, so that "this" won't change in
// other contexts, like inside callback functions
function BindClock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(this.tick, 1000);
  };
  this.startInterval = this.startInterval.bind(this);
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.tick = this.tick.bind(this);
  this.render = function () {
    return this.time;
  };
  this.render = this.render.bind(this);
}

let closureClock = new ClosureClock();
closureClock.startInterval();
let arrowSyntaxClock = new ArrowSyntaxClock();
// arrowSyntaxClock.startInterval();
let bindClock = new BindClock();
// bindClock.startInterval();
