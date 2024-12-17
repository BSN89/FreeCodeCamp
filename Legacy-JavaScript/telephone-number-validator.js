function telephoneCheck(str) {
  let rex = /[^0-9]/g
  let rexStr = str.replace(rex,'')
  let lastChar = rexStr[0]

  if(rexStr.length < 10 || rexStr.length > 11) return false
  if(rexStr.length === 11 && lastChar !== '1') return false

   let one
   let two 
   let three
   let four

   if(rexStr.length === 11){
      one = rexStr.slice(0,1)
      two = rexStr.slice(1,4)
      three = rexStr.slice(4,7)
      four = rexStr.slice(7)
    }
    if(rexStr.length === 10){
      one = ''
      two = rexStr.slice(0,3)
      three = rexStr.slice(3,6)
      four = rexStr.slice(6)
    }
      
      let arr = [
      `${one}${two}${three}${four}`,
      `${one} ${two} ${three} ${four}`, 
      `${one} (${two}) ${three} ${four}`,
      `${one} (${two}) ${three}-${four}`,
      `${one} ${two}-${three}-${four}`,
      `${one}${two}-${three}-${four}`,
      `${one}${two}${three}${four}`,
      `${one}(${two})${three}${four}`,
      `${one}(${two})${three}-${four}`,
      ]
    
  return arr.some(el => el === str)
}

//or
//  function telephoneCheck(str) {
//   const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//   return regex.test(str);
// } :) :) :) :)

telephoneCheck("555-555-5555")
console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("1 (555) 555-5555"))
console.log(telephoneCheck("1 555)555-5555"))
// Валидатор телефонного номера
// Верните true, если переданная строка похожа на действительный номер телефона в США.

// Пользователь может заполнить поле формы любым способом, который он выберет, пока оно имеет формат допустимого номера США. Ниже приведены примеры допустимых форматов для номеров США (другие варианты см. в тестах ниже):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// Для этого задания вам будет представлена ​​строка, например 800-692-7753или 8oo-six427676;laskdjf. Ваша задача — подтвердить или отклонить номер телефона в США на основе любой комбинации форматов, предоставленных выше. Требуется код города. Если указан код страны, вы должны подтвердить, что код страны — 1. Верните, trueесли строка является допустимым номером телефона в США; в противном случае верните false.