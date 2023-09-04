var readlineSync = require("readline-sync");
var asciiTable = require("asciitable");

let database = [];
let options = {
  skinny: true,
  interSectionCharacter: "X",
  columns: [
    { field: "id", name: "id" },
    { field: "name", name: "name" },
  ],
};
let table = asciiTable(options, database);
let input = 666;
let menuText = `
[1] Add
[2] Remove
[3] Display
[0] Cancel
`;
let idIncremention = 0;

function add() {
  input = readlineSync.question("May I have student's name? ");
  database.push({ id: idIncremention, name: input });
  idIncremention++;
  table = asciiTable(options, database);
}

function remove() {
  input = readlineSync.question("May I have student's id? ");
  input = Number(input);
  let found = false;
  for (let student of database) {
    console.log(student);
    if (input === student.id) {
      console.log(student.id);
      found = true;
      let index = database.indexOf(student);
      database.splice(index, 1);
      console.log(student.name + " was removed from student database");
      table = asciiTable(options, database);
      input = 666;
    }
  }
  if (found === false) {
    console.log("Student with that id was not found");
  }
}

function display() {
  console.log(table);
}

function main() {
  while (input !== 0) {
    console.log(menuText);
    input = readlineSync.question("Choice? ");
    input = Number(input);

    if (input <= 3) {
      if (input === 1) {
        add();
      }
      if (input === 2) {
        remove();
      }
      if (input === 3) {
        display();
      }
      if (input === 0) {
        break;
      }
    } else {
      console.log("Please give a number between 0 and 3");
    }
  }
}

main();
