function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; }


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// Если у вас есть экземпляр let duck = new Bird();и вы вызываете duck.eat(), то вот как JavaScript ищет метод в prototypeцепочке duck:

// duck=> eat()Определено ли здесь? Нет.
// Bird=> eat()Определено здесь? => Да. Выполнить и прекратить поиск.
// Animal=> eat()также определен, но JavaScript прекратил поиск до достижения этого уровня.
// Объект => JavaScript прекратил поиск до достижения этого уровня.
// Переопределите fly()метод Penguinтак, чтобы он возвращал строкуAlas, this is a flightless bird.