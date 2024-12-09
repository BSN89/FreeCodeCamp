function sentensify(str) {
  // Only change code below this line

return str.split(/[\s-.,]+/).join(' ')
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
console.log(sentensify("May-the-force-be-with-you"))

// Используйте joinметод (среди прочих) внутри sentensifyфункции, чтобы составить предложение из слов в строке str. Функция должна возвращать строку. Например, I-like-Star-Warsбудет преобразовано в I like Star Wars. Для этой задачи не используйте replaceметод.