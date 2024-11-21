function truncateString(str, num) {
  if(str.length <= num) return str
  return `${str.slice(0, num)}...`
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))

// Усечение строки
// Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Вернуть обрезанную строку с окончанием ....
