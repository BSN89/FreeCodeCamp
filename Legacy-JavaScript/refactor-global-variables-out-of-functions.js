// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
const arrCopy = [...arr]
  arrCopy.push(bookName);
  return arrCopy
   
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const arrCopy = [...arr]
  const book_index = arrCopy.indexOf(bookName);
  if (book_index >= 0) {

   arrCopy.splice(book_index, 1);
     return arrCopy

    // Change code above this line
    }
}

console.log(add(bookList, "A Brief History of Time"))

// Перепишите код так, чтобы глобальный массив bookListне изменялся внутри любой из функций. addФункция должна добавить заданное bookNameв конец переданного ей массива и вернуть новый массив (список). Функция removeдолжна удалить заданное bookNameиз переданного ей массива.

// Примечание: Обе функции должны возвращать массив, а любые новые параметры следует добавлять перед bookNameпараметром.