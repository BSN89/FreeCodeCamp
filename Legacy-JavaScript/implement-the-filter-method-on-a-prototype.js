
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  
  // Проходим по каждому элементу массива
  for (let i = 0; i < this.length; i++) {
    // Проверяем, возвращает ли callback true для текущего элемента
    if (callback(this[i], i, this)) {
      // Если да, добавляем элемент в новый массив
      newArray.push(this[i]);
    }
  }
  
  return newArray;
};

// Вы можете узнать много нового об этом filterметоде, если реализуете свою собственную версию. Рекомендуется использовать forцикл или Array.prototype.forEach().

// Напишите свой собственный Array.prototype.myFilter(), который должен вести себя точно так же, как Array.prototype.filter(). Вам не следует использовать встроенный filterметод. ArrayДоступ к экземпляру можно получить в myFilterметоде с помощью this.