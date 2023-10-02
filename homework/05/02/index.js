import { min, max } from "./modules/utility.js";
import commandLineArguments from "./modules/commandlineargument.js";

const args = commandLineArguments();

console.log("smallest number: " + min(args));
console.log("biggest number: " + max(args));

/*
let myarray = [1, 2, 3, 4];
console.log(max(myarray)); // 4
console.log(min(myarray)); // 1
console.log()
*/
