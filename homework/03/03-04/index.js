const { readFile } = require("node:fs");
const readlineSync = require("readline-sync");

function printFileContent() {
  let fileName = readlineSync.question("Give file name: ");
  readFile(fileName, "utf-8", (readFileErr, data) => {
    if (readFileErr) {
      console.log(readFileErr);
    } else {
      try {
        const jsonData = JSON.parse(data);
        return jsonData["name"]
          ? console.log(jsonData["name"])
          : console.log(
              "This is a Json file, but this doesn't have a name property"
            );
      } catch (jsonErr) {
        console.log("this is not a json file");
      }
    }
  });
}

printFileContent();
