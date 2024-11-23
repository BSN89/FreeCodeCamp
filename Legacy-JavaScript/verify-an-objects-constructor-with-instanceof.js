function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House()
myHouse.numBedrooms = 4
myHouse instanceof House
console.log(myHouse)
console.log(myHouse instanceof House)

// Only change code below this line

// Создайте новый экземпляр конструктора House, вызвав его myHouseи передав количество спален. Затем используйте instanceofдля проверки того, что это экземпляр House.