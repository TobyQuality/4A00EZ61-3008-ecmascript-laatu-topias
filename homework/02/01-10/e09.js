var myFunc = new Function("", 'console.log("hello")');
myFunc.call();

// a global variable "myFunc" is declared. It is given the value of,
// a new separate function object. Inside parenthesis, the "" means
// that no arguments are given for the function. The text on the right side
// of "," is the basic functionality of the function (printing 'hello' in the console)
// call() function is used to implement myFunc.
