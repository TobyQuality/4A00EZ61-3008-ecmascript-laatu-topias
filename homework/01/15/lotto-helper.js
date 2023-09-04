const process = require('process');

export function lottoNumberGenerator() {
  const lottoRow = new Set();

  while (lottoRow.length < 7) {
    lottoRow.add(Math.floor(Math.random() * 40) + 1);
  }

  return lottoRow;
}

export function lottoUserInput() {
    let usersLottoRow = [];
    let args = process.argv;
    if (args.length !== 9) {
        throw new Error("Give nine numbers as arguments.");
    } else {
        usersLottoRow = new Set();
        args.map(number => {
            usersLotto.add(RowNumber(number));
        })
        if (usersLottoRow.length !== 7) {
            throw new Error("Give unique numbers");
        }
        for (number of UsersLottoRow) {
            if (isNaN(number)) {
                throw new Error("Give a number as argument.");
            }
            if (0 >= number) {
                throw new Error("1 is the minimum number.");
            }
            if (number > 40) {
                throw new Error("1 is the minimum number.");
            }
        }

        return usersLottoRow;
    }
}

user_lotto = {1, 2, 3, 4, 5, 6, 7}
random_lotto =  set()
highscore = 0
week = 1
year = 0

while highscore < 7:
    random_lotto = generate_lotto_numbers()
    weeks_highscore = len(user_lotto.intersection(random_lotto))

    if weeks_highscore > highscore:
        highscore = weeks_highscore
        print(f"You got {highscore} correct! New highscore!")
        print(f"It took {year} years.")

    week = week + 1
    if week == 53 :
        week = 1
        year = year + 1