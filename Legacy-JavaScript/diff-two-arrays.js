function diffArray(arr1, arr2) {
  const newArr = [];
for(let el of arr2){
  !arr1.includes(el) && newArr.push(el) 
}
for(let el of arr1){
  !arr2.includes(el) && newArr.push(el) 
}
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))

// Сравнение двух массивов
// Сравнить два массива и вернуть новый массив с любыми элементами, найденными только в одном из двух заданных массивов, но не в обоих. Другими словами, вернуть симметричную разность двух массивов.

// Примечание: Вы можете вернуть массив с элементами в любом порядке.
