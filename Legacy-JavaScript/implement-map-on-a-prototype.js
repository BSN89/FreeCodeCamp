Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i],i,this));
  }
  // Only change code above this line
  return newArray;
};

// Напишите свой собственный Array.prototype.myMap(), который должен вести себя точно так же, как Array.prototype.map(). Вам не следует использовать встроенный mapметод. ArrayДоступ к экземпляру можно получить в myMapметоде с помощью this.