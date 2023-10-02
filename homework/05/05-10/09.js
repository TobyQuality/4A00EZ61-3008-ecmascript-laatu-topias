class Dog {
  constructor(name) {
    this.name = name;
    this.sniffButt = this.sniffButt.bind(this);
  }
  sniffButt() {
    console.log(this.name + " sniffs butt");
  }
  delayedSniffButt() {
    setTimeout(this.sniffButt, 1000);
  }
}

let spot = new Dog("spot");
spot.sniffButt();
spot.delayedSniffButt();

let vilma = new Dog("vilma");
vilma.sniffButt();
vilma.delayedSniffButt();
