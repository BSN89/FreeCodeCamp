function checkPositive(arr) {
  // Only change code below this line

return arr.every(el => el > 0)
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

// Используйте everyметод внутри checkPositiveфункции, чтобы проверить, является ли каждый элемент arrположительным. Функция должна возвращать логическое значение.