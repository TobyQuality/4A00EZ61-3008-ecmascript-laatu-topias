const { promisify } = require("util");
const fs = require("node:fs");

const readFile = promisify(fs.readFile);

async function parseFile(fileContent) {
  if (fileContent)
    function func(resolve, reject) {
      const parsedData = JSON.parse(fileContent);
      return parsedData["name"]
        ? resolve(parsedData["name"])
        : reject("name not found");
    }
  const p = new Promise(func);
  return p;
}

async function readFileAndParse(fileName) {
  const fileContent = await readFile(fileName);
  const parsedFile = await parseFile(fileContent);
  return parsedFile;
}

readFileAndParse("package.json")
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));

readFileAndParse("moi.json")
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
