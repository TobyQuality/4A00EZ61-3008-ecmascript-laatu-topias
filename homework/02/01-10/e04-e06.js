function isPositiveInteger(value, onSuccess, onError) {
  let isPositive = value > 0;
  if (isPositive) {
    onSuccess();
  } else {
    onError();
  }
}

isPositiveInteger(
  1,
  () => {
    console.log("Success!");
  },
  () => {
    console.log("Error!");
  }
);

isPositiveInteger(
  -1,
  () => {
    console.log("Success!");
  },
  () => {
    console.log("Error!");
  }
);
