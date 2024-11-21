function titleCase(str) {
 return str.split(' ')
 .map(el => el.split('')
   .map((el,i) => i ==  0  
       ? el.toUpperCase() 
       : el.toLowerCase()).join("")
       ).join(' ')
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"))

// Заглавный регистр предложения
// Верните предоставленную строку с первой буквой каждого слова заглавной. Убедитесь, что остальная часть слова написана строчными буквами.

// Для целей этого упражнения вам также следует писать соединительные слова с заглавной буквы, например theи of.