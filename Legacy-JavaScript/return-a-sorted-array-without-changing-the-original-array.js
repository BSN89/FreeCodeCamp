const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
return [...arr].sort((a,b) => a - b)

  // Only change code above this line
}

nonMutatingSort(globalArray);

// Используйте sortметод в nonMutatingSortфункции для сортировки элементов массива в порядке возрастания. Функция должна возвращать новый массив, а не изменять переменную globalArray.