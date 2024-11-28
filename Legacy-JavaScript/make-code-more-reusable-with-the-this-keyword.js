let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
console.log(dog.sayLegs())

// this— это глубокая тема, и приведенный выше пример — лишь один из способов ее использования. В текущем контексте thisотносится к объекту, с которым связан метод: duck. Если имя объекта изменено на mallard, нет необходимости находить все ссылки на duckв коде. Это делает код пригодным для повторного использования и более удобным для чтения.

// Измените dog.sayLegsметод, чтобы удалить все ссылки на dog. Используйте duckпример для руководства.