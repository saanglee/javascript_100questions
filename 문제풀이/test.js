const fs = require("fs");
const readFileSyncAddress = "test.txt";
const input = fs
  .readFileSync(readFileSyncAddress)
  .toString()
  .split(" ")
  .reverse();

let result = "";

for (let i = 0; i < input.length; i++) {
  result += input[i];
}

console.log(result);
