const { readFile, writeFile } = require("node:fs");
const process = require("node:process");
const axios = require("axios");

let args = process.argv;
args.splice(0, 2);

// show all star wars characters
if (args.length === 0) {
  let getStarWarsCharacters = axios
    .get(`https://swapi.dev/api/people/`)
    .then((response) => response.data.results)
    .then((results) => {
      return results.sort((a, b) => {
        // sort the results in descending order according to bmi
        if (
          a.mass / ((a.height / 100) * (a.height / 100)) <
          b.mass / ((b.height / 100) * (b.height / 100))
        ) {
          return 1;
        } else if (
          a.mass / ((a.height / 100) * (a.height / 100)) >
          b.mass / ((b.height / 100) * (b.height / 100))
        ) {
          return -1;
        }

        return 0;
      });
    })
    .then((sortedList) => {
      let ulList = `<ul>`;
      sortedList.map((r) => (ulList += `<li>${r.name}</li>`));
      ulList += `</ul>`;
      return ulList;
    })
    .then((ulList) => console.log(ulList));
}

// show data of a star wars character
if (args.length === 1) {
  let id = Number(args[0]);
  axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
    console.log(response.data.name);
  });
}
