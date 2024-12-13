function convertHTML(str) {
  let variant = [ '&', '<', '>', '"', "'" ]
  let output  = [ '&amp;', '&lt;', '&gt;', '&quot;', '&apos;']
  return str.split('').map((el) => {
       let index
     if (variant.includes(el)){
       index = variant.indexOf(el)
        return output[index]
     } 
     return el
  }).join('')
}

convertHTML("Dolce & Gabbana");
console.log(convertHTML("Dolce & Gabbana")) 
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML('<>'))

// Преобразование HTML-сущностей
// Преобразуйте символы &, <, >, "(двойные кавычки) и '(апостроф) в строке в соответствующие им HTML-сущности.
