function nonMutatingPush(original, newItem) {
  // Only change code below this line
  //return original.push(newItem);
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

// Измените nonMutatingPushфункцию так, чтобы она использовала concatдля слияния newItemв конец originalбез мутации originalили newItemмассивов. Функция должна возвращать массив.
