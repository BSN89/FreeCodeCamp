function bouncer(arr) {
  //return arr.filter(el => !!el === true ? el : null)
     //or
  return arr.filter(el => !!el === true ? el : null)
}

bouncer([7, "ate", "", false, 9]);

console.log(bouncer([7, "ate", "", false, 9]))


// Ложный вышибала
// Удалить все ложные значения из массива. Вернуть новый массив; не изменять исходный массив.

// Ложными значениями в JavaScript являются false, null, 0, "", undefinedи NaN.

// Подсказка: попробуйте преобразовать каждое значение в логическое значение.
