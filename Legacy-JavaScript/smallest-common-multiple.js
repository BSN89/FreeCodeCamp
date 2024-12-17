function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1,5]);

// Наименьшее общее кратное
// Найдите наименьшее общее кратное предоставленных параметров, которое можно разделить на оба параметра, а также на все последовательные числа в диапазоне между этими параметрами.

// Диапазон будет представлять собой массив из двух чисел, которые не обязательно будут располагаться в числовом порядке.

// Например, если даны 1 и 3, найдите наименьшее общее кратное 1 и 3, которое также делится без остатка на все числа от 1 до 3. Ответом здесь будет 6.