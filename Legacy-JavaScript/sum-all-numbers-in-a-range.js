function sumAll(arr) {
  if(arr[0] >arr[1]) arr.reverse()
  let couter = []
  let first = arr[0]
  let last = arr[1]
  
  for(let i = first+1; i < last; i++){
    couter.push(i)
  }
 return [first,...couter, last].reduce((acc, el) => acc+ el)
}

sumAll([1, 4]);
console.log(sumAll([1, 4]))
console.log(sumAll([4,1]))

// Например, sumAll([4,1])должно вернуться 10, потому что сумма всех чисел от 1 до 4 (включительно) равна 10.