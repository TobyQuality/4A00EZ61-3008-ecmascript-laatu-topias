const repetition = (word, counter = 1) => {
  if (counter === 0) {
    return "";
  }

  // function calls itself (recursion) until counter is reduced to 0,
  // returning a concatenated string repeating the parameter 'word'
  return word + repetition(word, counter - 1);
};

console.log(repetition("Hauki on kala", 10));
console.log(repetition("apina"));
