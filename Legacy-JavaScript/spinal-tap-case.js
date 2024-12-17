function spinalCase(str) {
  
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") 
    .replace(/\s+|_+/g, "-") 
    .toLowerCase()
  
}

spinalCase('This Is Spinal Tap')
console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("thisIsSpinalTap"))

// Случай со спинномозговой пункцией
// Перевод строки в спинальный регистр. Спинальный регистр — это все-слова-строчными-соединенными-тире.