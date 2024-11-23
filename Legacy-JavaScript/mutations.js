function mutation(arr) {
  let firstStrArr = [...arr[0].toLowerCase()]
  let lastStrArr = [...arr[1].toLowerCase()]
  let count = 0
  lastStrArr.forEach(el => firstStrArr.includes(el.toLowerCase()) ? count++ : el )
  return count === lastStrArr.length
}

mutation(["hello", "hey"]);
console.log(mutation(["helLo", "hey"]))
console.log(mutation(["hello", "Hello"]))

// Мутации
// Верните true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива.

// Например, ["hello", "Hello"], должен вернуться, trueпоскольку все буквы во второй строке присутствуют в первой, без учета регистра.

// Аргументы ["hello", "hey"]должны вернуться, falseпоскольку строка helloне содержит y.

// Наконец, ["Alien", "line"], должен вернуться, trueпоскольку все буквы в lineприсутствуют в Alien.