   
const myDogs = {
  name: 'Bobik',
  age: 3
}
const funModule = (function(){
  return {
isCuteMixin: function(obj) {
  obj.isCute = function() { return true }
},

singMixin: function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
       }
    }
  }
})()

funModule.singMixin(myDogs)
funModule.isCuteMixin(myDogs)

console.log(myDogs.sing())
console.log(myDogs.isCute())

// Создайте модуль с именем funModule, который будет обертывать два миксина isCuteMixin, и singMixin. funModuleдолжен возвращать объект.