function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for(const key in beagle){
  beagle.hasOwnProperty(key)
  ? ownProps.push(key)
  : prototypeProps.push(key)
}

console.log(ownProps)
console.log(prototypeProps)

// Добавить все собственные свойства beagleв массив ownProps. Добавить все свойства prototypeв Dogмассив prototypeProps.