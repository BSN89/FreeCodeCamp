function repeatStringNumTimes(str, num) {
  let resultStr = ''
  for(let i = 0; i < num; i++){
    resultStr += str
  }
  return resultStr;
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("abc", 3))
console.log(repeatStringNumTimes("abc", 0))

// Повторить строку Повторить строку
// Повторить заданную строку str(первый аргумент) numраз (второй аргумент). Возвращает пустую строку, если numне является положительным числом. Для целей этого испытания не используйте встроенный .repeat()метод.