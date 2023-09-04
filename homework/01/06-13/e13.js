function abs(number) {
  if (typeof number === "number" && number !== NaN && number !== 0) {
    if (0 > number) {
      return -number;
    }
    return number;
  }
}

console.log(abs(5));
console.log(abs(-5));
console.log(abs("moi"));
