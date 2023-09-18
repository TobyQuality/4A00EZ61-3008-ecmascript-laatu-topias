const process = require("node:process");

let args = process.argv;
args.splice(0, 2);

async function getKeysValue(data, key) {
  return new Promise((resolve, reject) => {
    data[key] ? resolve(data[key]) : reject("key not found");
  });
}

async function fetchAllTitles(id) {
  const characterData = await fetch(`https://swapi.dev/api/people/${id}`);
  const characterDataJSON = await characterData.json();
  const films = await getKeysValue(characterDataJSON, "films");
  const fetchFilmsData = await Promise.all(films.map((f) => fetch(f)));
  const jsonifyFilms = await Promise.all(fetchFilmsData.map((f) => f.json()));
  const titlesOfTheFilms = await Promise.all(
    jsonifyFilms.map((f) => getKeysValue(f, "title"))
  );

  return {
    name: characterDataJSON["name"],
    movies: titlesOfTheFilms,
  };
}

async function fetchAll(idList) {
  const charactersAndTheirMovieTitles = await Promise.all(
    idList.map((a) => fetchAllTitles(a))
  );

  return charactersAndTheirMovieTitles;
}

fetchAll(args).then((data) => console.log(data));

/*
fetchAllTitles(1)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
*/
