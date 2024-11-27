let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

const glideMixin = function(obj){
obj.glide = function(){
console.log('I can glide')
} 
}
glideMixin(bird)
glideMixin(boat)

console.log(bird.glide())
console.log(boat.glide())

// Создайте миксин с именем glideMixin, который определяет метод с именем glide. Затем используйте , glideMixinчтобы дать birdи boatвозможность скользить.