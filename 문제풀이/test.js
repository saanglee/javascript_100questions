const fs = require("fs");
const readFileSyncAddress = "test.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().split(" ");

console.log(input);
let inputToSet = new Set(input);
console.log(inputToSet);
console.log(inputToSet[1]); // undefined
// let array = Array.from(mySet);
let setToArray = Array.from(inputToSet);
console.log(setToArray);
console.log(setToArray[0]);
