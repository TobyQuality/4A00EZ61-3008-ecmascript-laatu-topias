const { promisify } = require("util");
const fs = require("node:fs");

const readFile = promisify(fs.readFile);

function parseJson(data) {
  function func(resolve, reject) {
    // parse the data (do not implement try catch, if exception occurs, this
    // will be catched automatically in your catch outside of this function.
    // if name is found from obj, call resolve, otherwise call reject

    const parsedData = JSON.parse(data);
    return parsedData["name"]
      ? resolve(parsedData["name"])
      : reject("name not found");
  }
  const p = new Promise(func);
  return p;
}

readFile("package.json", "utf-8")
  .then((data) => parseJson(data))
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));

readFile("hello.json", "utf-8")
  .then((data) => parseJson(data))
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
