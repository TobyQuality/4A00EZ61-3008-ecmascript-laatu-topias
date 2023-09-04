import process from "node:process";

function lottoNumberGenerator() {
  let lottoRow = new Set();

  while (lottoRow.size < 7) {
    lottoRow.add(Math.floor(Math.random() * 40) + 1);
  }

  return lottoRow;
}

function lottoUserInput() {
  let usersLottoRow = [];
  let args = process.argv;
  if (args.length !== 9) {
    throw new Error("Give seven numbers as arguments.");
  } else {
    args.splice(0, 2);
    usersLottoRow = new Set();
    args.map((number) => {
      usersLottoRow.add(Number(number));
    });
    if (usersLottoRow.size !== 7) {
      throw new Error("Give unique numbers");
    }

    usersLottoRow.forEach((number) => {
      if (isNaN(number)) {
        throw new Error("Give a number as argument.");
      }
      if (0 >= number) {
        throw new Error("1 is the minimum number.");
      }
      if (number > 40) {
        throw new Error("40 is the maximum number.");
      }
    });

    return usersLottoRow;
  }
}

// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function intersection(setA, setB) {
  let _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function main() {
  let usersRow = lottoUserInput();
  let highscore = 0;
  let week = 1;
  let year = 0;
  let highscoreText = ``;

  while (highscore < 7) {
    let correctLottoRow = lottoNumberGenerator();
    let weeksHighscore = intersection(usersRow, correctLottoRow).size;
    console.log(Array.from(correctLottoRow) + " correct: " + weeksHighscore);

    if (weeksHighscore > highscore) {
      highscore = weeksHighscore;
      let time = (year + week / 52).toFixed(2);
      highscoreText += `
      You got ${weeksHighscore} correct, it took ${time} years 
      `;
    }

    week++;
    if (week === 53) {
      year++;
      week = 1;
    }
  }

  console.log(highscoreText);
}

main();
