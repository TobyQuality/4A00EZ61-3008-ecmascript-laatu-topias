const { question } = require("readline-sync");

async function getKeysValue(data, key) {
  return new Promise((resolve, reject) => {
    data[key] ? resolve(data[key]) : reject("key not found");
  });
}

async function fetchTitle() {
  const id = question("Give id: ");
  const characterData = await fetch(`https://swapi.dev/api/people/${id}`);
  const characterDataJSON = await characterData.json();
  const films = await getKeysValue(characterDataJSON, "films");
  const firstFilm = await fetch(films[0]);
  const firstFilmJSON = await firstFilm.json();
  const titleOfTheFirstFilm = await getKeysValue(firstFilmJSON, "title");
  return titleOfTheFirstFilm;
}

fetchTitle()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
