export function max(array) {
  if (array instanceof Array === false) {
    throw new error("give array");
  }
  return Math.max(...array);
}

export function min(array) {
  if (array instanceof Array === false) {
    throw new error("give array");
  }
  return Math.min(...array);
}
