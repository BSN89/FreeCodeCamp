function steamrollArray(arr) {
  let copy = []
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      copy.push(...arr[i])
    }
    else{
      copy.push(arr[i])
    }
  }
  return copy.every(el => !Array.isArray(el)) ? copy : steamrollArray(copy)
}

steamrollArray([1, [2], [3, [[4]]]]);
console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))
console.log(steamrollArray([1, {}, 3, 4]))

// Паровой каток
// Сглаживание вложенного массива. Необходимо учитывать различные уровни вложенности.

// or

// function steamrollArray(arr) {
//   return arr.reduce((acc, val) => {
//     return acc.concat(Array.isArray(val) ? steamrollArray(val) : val);
//   }, []);
// }