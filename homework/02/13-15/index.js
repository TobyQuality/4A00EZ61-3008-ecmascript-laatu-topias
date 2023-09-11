const process = require("node:process");
const axios = require("axios");

let args = process.argv;
args.splice(0, 2);

// show all star wars characters
if (args.length === 0) {
  //get all star wars characters
  axios
    .get(`https://swapi.dev/api/people/`)
    // get only results array from data object
    .then((response) => response.data.results)
    // sort the results in descending order according to bmi
    .then((results) => {
      return results.sort((a, b) => {
        let aHeight = a.height / 100;
        let bHeight = b.height / 100;
        if (a.mass / (aHeight * aHeight) < b.mass / (bHeight * bHeight)) {
          return 1;
        } else if (
          a.mass / (aHeight * aHeight) >
          b.mass / (b.height * b.height)
        ) {
          return -1;
        }
        return 0;
      });
    })
    //put the sorted star wars characters inside a html ul element
    .then((sortedList) => {
      let ulList = `<ul>`;
      sortedList.map((r) => (ulList += `<li>${r.name}</li>`));
      ulList += `</ul>`;
      return ulList;
    })
    // output the ul list
    .then((ulList) => console.log(ulList));
}

// show data of a star wars character
if (args.length === 1) {
  let id = Number(args[0]);
  axios.get(`https://swapi.dev/api/people/${id}`).then((response) => {
    console.log(response.data.name);
  });
}
