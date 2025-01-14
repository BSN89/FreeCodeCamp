function convertToRoman(num) {

if (num <= 0 || num >= 4000) {
        return "Недопустимое число";
    }

   const romanSymbols = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ]

let result = ''
  for(let { value, symbol } of romanSymbols ){
    while(num >= value){
        result += symbol
         num -= value
    }
  }
 return result;
}

convertToRoman(36);
console.log(convertToRoman(36))
console.log(convertToRoman(44))
console.log(convertToRoman(97))

// Конвертер римских цифр
// Преобразуйте данное число в римскую цифру.