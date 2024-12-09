function splitify(str) {
  // Only change code below this line

return str.split(/[\s-.,]+/)
  // Only change code above this line
}

splitify("Hello World,I-am code");
console.log(splitify("Hello World,I-am code"))

// Используйте splitметод внутри splitifyфункции, чтобы разбить strна массив слов. Функция должна вернуть массив. Обратите внимание, что слова не всегда разделены пробелами, а массив не должен содержать знаки препинания.