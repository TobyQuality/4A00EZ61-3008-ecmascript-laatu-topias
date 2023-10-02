function commandLineArguments() {
  const args = process.argv.splice(2);

  if (args.length == 0) {
    throw new Error("give arguments after command 'node index.js'");
  }

  for (let i = 0; i < args.length; i++) {
    if (!Number.isInteger(parseInt(args[i]))) {
      throw new Error("give numbers only as arguments");
    }
  }

  return args;
}

export default commandLineArguments;
