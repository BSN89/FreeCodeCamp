function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle)

console.log(Dog.prototype.isPrototypeOf(beagle))

// Используйте для isPrototypeOfпроверки .prototypebeagle