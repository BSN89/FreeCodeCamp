function findElement(arr, func) {
  let num = arr.find(func)
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
console.log(findElement( [1, 3, 5, 9], function(num) { return num % 2 === 0; } ))
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))


// Нашедшие Хранители
// Создайте функцию, которая просматривает массив arrи возвращает первый элемент в нем, который проходит «тест на истинность». Это означает, что для заданного элемента x«тест на истинность» пройден, если func(x)is true. Если ни один элемент не проходит тест, вернуть undefined.