let sampleWord = "astronaut";
let pwRegex = /^(?=.*[a-zA-Z])(?=.*\d{2,}).+$/; // Change this line
let result = pwRegex.test(sampleWord);