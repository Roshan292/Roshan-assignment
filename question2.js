// Classes are special function which is defined by programmer because it is not a pre-defined function.
// class syntax has two components class expression and class declarations.
class fruits {
  constructor(name) {
    this.fname = name;
  }
  output() {
    return 'I eat ' + this.fname + ' early in the morning';
  }
}

class variety extends fruits {
  constructor(name, a) {
    super(name);
    this.b = a;
  }
  show() {
    console.log(this.output() + ', it is ' + this.b + ' for health.');
  }
}

mycar = new variety("Apple", "good");
mycar.show();