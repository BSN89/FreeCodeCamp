function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function(){
  console.log('Woof!')
}


// Only change code above this line

let beagle = new Dog();
console.log(beagle.bark())
console.log(beagle.eat())

// Добавьте весь необходимый код, чтобы Dogобъект наследовался от Animal, а Dogконструктор prototypeбыл установлен на Dog. Затем добавьте bark()метод к Dogобъекту, чтобы он beagleмог использовать как , так eat()и bark(). bark()Метод должен выводить данные Woof!на консоль.
