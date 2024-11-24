function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();

console.log(beagle)
console.log(beagle.eat())

// Измените код так, чтобы экземпляры Dogнаследовали от Animal.
