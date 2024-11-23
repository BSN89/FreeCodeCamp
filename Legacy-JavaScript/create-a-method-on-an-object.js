let dog = {
  name: "Spot",
  numLegs: 4,
sayLegs(){return `This dog has ${dog.numLegs} legs.`}
};

dog.sayLegs();
console.log(dog.sayLegs())

// В примере добавляется sayNameметод, который является функцией, возвращающей предложение, дающее имя duck. Обратите внимание, что метод обращается к nameсвойству в операторе return с помощью duck.name. В следующем задании мы рассмотрим другой способ сделать это.

// Используя dogобъект, дайте ему метод с именем sayLegs. Метод должен возвращать предложениеThis dog has 4 legs.