let hello = "   Hello, World!  ";
let wsRegex = /^\s*(\w+),\s*(\w+)\s*!*\s*$/; // Change this line
let result = hello.replace(wsRegex, '$1, $2!'); // Change this line

console.log(result)
