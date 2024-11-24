function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
eat: function() {
    console.log("nom nom nom");
  }
};

// Метод eatповторяется в обоих Catи Bear. Отредактируйте код в духе DRY, переместив eatметод в Animal supertype.