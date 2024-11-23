function chunkArrayInGroups(arr, size) {
  let result = []
  for(let i = 0; i < arr.length; i += size){
    result.push(arr.slice(i, i + size))
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))

// Толстая обезьяна
// Напишите функцию, которая разбивает массив (первый аргумент) на группы длиной size(второй аргумент) и возвращает их в виде двумерного массива.