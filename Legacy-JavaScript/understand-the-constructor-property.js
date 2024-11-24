function Dog(name) {
  this.name = name;
}

// Only change code below this line
const candidate = new Dog()

function joinDogFraternity(candidate) {
return candidate.constructor === Dog
}

console.log(joinDogFraternity(candidate))

// Напишите joinDogFraternityфункцию, которая принимает candidateпараметр и, используя constructorсвойство, возвращает , trueесли кандидат является Dog, в противном случае возвращает false.