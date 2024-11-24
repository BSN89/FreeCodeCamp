function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
numLegs: 4,
eat: function(){
  console.log(this.name + ' good dog')
},
describe: function(){
  console.log(this.name + ' good friend')
}
};

const myFriend = new Dog('Bobik')

console.log(myFriend.describe())

// Добавьте свойство numLegsи два метода eat()и describe()к объекту prototype, Dogустановив его prototypeдля нового объекта.