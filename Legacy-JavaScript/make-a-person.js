const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName())

// Сделать человека
// Заполните конструктор объектов следующими методами:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(first, last)
// Запустите тесты, чтобы увидеть ожидаемый вывод для каждого метода. Эти методы должны быть единственными доступными средствами взаимодействия с объектом. Каждый тест будет объявлять новый Personэкземпляр как new Person('Bob', 'Ross').