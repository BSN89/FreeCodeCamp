function add(x) {
  // Only change code below this line
// return function(y){
//   return function(z){
//     return x + y + z
//   }
// }
return (y) => (z) => x + y + z 
  // Only change code above this line
}

add(10)(20)(30);

// Заполните тело функции addтак, чтобы она использовала каррирование для добавления параметров x, y, и z.