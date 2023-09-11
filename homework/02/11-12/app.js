const { readFile, writeFile } = require("node:fs");
const process = require("node:process");

// store arguments to variable args
let args = process.argv;

// from index zero remove two next elements [indices 0 and 1]
args.splice(0, 2);

// check that there is arguments given in console
if (args.length === 0) {
  throw new Error("Please give arguments");
}

// if only one given argument, the app will print text file given as argument
if (args.length === 1) {
  console.log("Printing the file: " + args[0]);
  readFile(args[0], "utf-8", (err, data) => console.log(data));
}

if (args.length === 2) {
  //old version:
  /*
  console.log("Copying the file" + args[0] + " to: " + args[1]);
  readFile(args[0], "utf-8", (err, data) => {
    writeFile(args[1], data, (err) => {
      if (!err) {
        console.log("copying was successful");
      } else {
        console.log("copying failed");
      }
    });
  });
  */
  // new version:
  // original = file to be copied, destination = file to copy to from original
  // callback = function that informs if copying was successful
  const copy = (original, destination, callback) => {
    readFile(original, "utf-8", (err, data) => {
      if (err) {
        callback(false);
      } else {
        writeFile(destination, data, (err) => {
          if (err) {
            callback(false);
          } else {
            callback(true);
          }
        });
      }
    });
  };

  copy(args[0], args[1], (success) => {
    success ? console.log("success") : console.log("error");
  });
}
