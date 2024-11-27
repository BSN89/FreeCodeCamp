function Bird() {
 let weight = 15
  this.getWeight = function(){
    return weight
  }
}

const bird = new Bird()
console.log(bird.getWeight())

// Измените способ weightобъявления в Birdфункции так, чтобы это была частная переменная. Затем создайте метод getWeight, который возвращает значение weight15.