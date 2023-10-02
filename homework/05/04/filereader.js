const fs = require("fs");

function FileReader(path) {
  this.path = path;
  this.readAndOutput = () => {
    fs.readFile(this.path, "utf-8", (err, data) => {
      if (err) {
        this.done(err);
      } else {
        this.done("", data);
      }
    });
  };
  this.done = (err, data) => {
    if (err === "") {
      console.log(path + ": \n" + data);
    } else {
      throw new Error("Error occurred while reading file: " + this.path);
    }
  };
}

module.exports = FileReader;
