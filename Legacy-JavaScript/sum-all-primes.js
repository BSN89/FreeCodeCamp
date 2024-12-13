function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

sumPrimes(10);

// Сумма всех простых чисел
// Простое число — это целое число, большее 1, имеющее ровно два делителя: 1 и само себя. Например, 2 — простое число, потому что оно делится только на 1 и 2. Напротив, 4 не является простым числом, потому что оно делится на 1, 2 и 4.

// Перепишите sumPrimesтак, чтобы он возвращал сумму всех простых чисел, которые меньше или равны num