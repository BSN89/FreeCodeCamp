function fearNotLetter(str) {
  let char
  for(let i = 0; i < str.length -1; i++){
    if ( str[i+1].charCodeAt(0) - str[i].charCodeAt(0) > 1){
      char = str[i].charCodeAt(0) + 1
      if(char){
        char = String.fromCharCode(char)
      }
    } 
  }
  return char 
}

fearNotLetter("abce");
console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcde"))

// Отсутствующие буквы
// Найдите пропущенную букву в пропущенном диапазоне букв и верните ее.

// Если все буквы присутствуют в диапазоне, вернуть undefined.