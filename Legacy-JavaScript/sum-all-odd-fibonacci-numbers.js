function sumFibs(num) {
let arr = [0,1]
if(num === 0) return 0
 if(num === 1) return 1

  let a = 0, b = 1, result = 0;
  for (let i = 2; i <= num; i++) {
    result = a + b;
    a = b;
    b = result
    arr.push(b)
  }
  return arr.filter(el => el % 2 && el <= num).reduce((acc, el) => acc + el)
}

sumFibs(4);
console.log(sumFibs(4))
console.log(sumFibs(10))

// Сумма всех нечетных чисел Фибоначчи
// Дано положительное целое число num, вернуть сумму всех нечетных чисел Фибоначчи, которые меньше или равны num.

// Первые два числа в последовательности Фибоначчи — 0 и 1. Каждое последующее число в последовательности является суммой двух предыдущих чисел. Первые семь чисел последовательности Фибоначчи — 0, 1, 1, 2, 3, 5 и 8.

// Например, sumFibs(10)должно вернуться 10, потому что все нечетные числа Фибоначчи, меньшие или равные, 10— это 1, 1, 3 и 5.