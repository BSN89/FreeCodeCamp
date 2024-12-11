function destroyer(arr,...rest) {
  
let result = []
arr.forEach(el =>  !rest.includes(el) && result.push(el) )
  return result
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))

// Вам будет предоставлен начальный массив в качестве первого аргумента функции destroyer, за которым последуют один или несколько аргументов. Удалите все элементы из начального массива, которые имеют то же значение, что и эти аргументы.

// Функция должна принимать неопределенное количество аргументов, также известное как вариативная функция. Вы можете получить доступ к дополнительным аргументам, добавив остаточный параметр к определению функции или используя argumentsобъект.