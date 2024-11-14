let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result)

// До сих пор задачи касались сопоставления букв алфавита и цифр. Вы также можете сопоставлять пробелы или пробелы между буквами.

// Вы можете искать пробелы, используя \s, что является строчной буквой s. Этот шаблон соответствует не только пробелам, но и символам возврата каретки, табуляции, перевода страницы и новой строки. Вы можете думать о нем как о чем-то похожем на класс символов [ \r\t\f\n\v].

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// Этот matchвызов вернет [" ", " "].

// Измените регулярное выражение countWhiteSpaceдля поиска нескольких пробельных символов в строке.