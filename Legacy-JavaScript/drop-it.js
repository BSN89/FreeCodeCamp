function dropElements(arr, func) {
  let filtered = [...arr]
  for(let i = 0; i < arr.length; i++){
     if (!func(arr[i])){
        filtered.shift()
     }else{
        break
     }
  }
  return filtered
}

dropElements([1, 2, 3], function(n) {return n < 3; });
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})) 
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}))
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))

// Бросай это
// Учитывая массив arr, выполните итерацию и удалите каждый элемент, начиная с первого элемента (индекс 0), пока функция funcне вернет управление trueпри прохождении через нее итерируемого элемента.

// Затем вернуть оставшуюся часть массива, как только условие будет выполнено, в противном случае arrследует вернуть пустой массив.