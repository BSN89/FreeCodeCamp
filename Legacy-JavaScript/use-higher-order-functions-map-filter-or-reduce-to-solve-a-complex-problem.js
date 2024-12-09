const squareList = arr => {
  // Only change code below this line
  return arr.filter(el => Number.isInteger(el) && el > 0 ).map(el => el * el)
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// Завершите код функции squareList, используя любую комбинацию map(), filter()и reduce(). Функция должна возвращать новый массив, содержащий квадраты только положительных целых чисел (десятичные числа не являются целыми числами), когда ей передается массив действительных чисел. Примером массива действительных чисел является [-3, 4.8, 5, 3, -3.2].

// Примечание: Ваша функция не должна использовать какие-либо циклы или forфункции .whileforEach()