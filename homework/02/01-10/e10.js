function func1(a, b, c) {
  const printableArguments = arguments.filter((arg) => arg !== undefined);
  for (p of arguments) {
    if (arg !== undefined) {
      console.log(arg);
    }
  }
}

func1("a");
func1("a", "b");
func1("a", "b", "c");
