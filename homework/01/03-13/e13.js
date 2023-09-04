function abs(number) {
  if (typeof number === "number" && !isNaN(number) && number !== 0) {
    if (0 > number) {
      return -number;
    }
    return number;
  }
}

console.log(abs(5));
console.log(abs(-5));
console.log(abs(0));
console.log(abs("moi"));
