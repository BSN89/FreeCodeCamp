function findLongestWordLength(str) {
  let arr = str.split(' ').map(el => el.length).sort((a,b) => a - b).pop()
  return arr
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))

// Найдите самое длинное слово в строке
// Верните длину самого длинного слова в предоставленном предложении.

// Ваш ответ должен быть числом.