function addTogether(...args) {

for(let arg of args){
  if(typeof arg !== 'number'){
    return undefined
  }
  
if(typeof args[0] === 'number' && typeof args[1] === 'number') return args[0] + args[1]

  if(args.length === 1){
   const first = args[0]
   return function(last){
     if(typeof last !== 'number') return undefined
      else return  first + last
    }
  }
  
}
  return  undefined
}

addTogether(2,3);
console.log(addTogether(2,3))
console.log(addTogether(2,'3'))

// Аргументы необязательны
// Создайте функцию, которая суммирует два аргумента. Если указан только один аргумент, то верните функцию, которая ожидает один аргумент и возвращает сумму.

// Например, addTogether(2, 3)должно возвращать 5, а addTogether(2)должно возвращать функцию.

// Вызов этой возвращаемой функции с одним аргументом вернет сумму:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3)возвращается 5.

// Если какой-либо из аргументов не является допустимым числом, возвращается значение undefined.