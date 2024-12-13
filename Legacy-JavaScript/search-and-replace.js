function myReplace(str, before, after) {
  return str.split(' ').map(el => {
      if(el === before){ 
       if(el[0] === before[0].toUpperCase()) return after[0].toUpperCase() + after.slice(1)
        else return after.toLowerCase()
       } 
      return el
    }).join(' ')  
  } 


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("His name is Tom", "Tom", "john"))

// Поиск и замена
// Выполните поиск и замену в предложении, используя предоставленные аргументы, и верните новое предложение.

// Первый аргумент — это предложение, в котором необходимо выполнить поиск и замену.

// Вторым аргументом является слово, которое вы будете заменять (предыдущее).

// Третий аргумент — это то, чем вы замените второй аргумент (после).

// Примечание: Сохраняйте регистр первого символа в исходном слове при его замене. Например, если вы хотите заменить слово Bookна слово dog, его следует заменить так:Dog