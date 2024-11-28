function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

// Перепишите функцию makeNestи удалите ее вызов, чтобы вместо этого она представляла собой анонимное немедленно вызываемое функциональное выражение (IIFE).


// (function(){
//   console.log("A cozy nest is ready");
// })()

//or

(() => console.log("A cozy nest is ready"))()