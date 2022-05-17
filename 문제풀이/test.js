const fs = require("fs");
const readFileSyncAddress = "test.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().split(" ");

let result;
let inputCopy = JSON.parse(JSON.stringify(input));

inputCopy = inputCopy.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  if (input[i] != inputCopy[i]) {
    result = "NO";
  } else {
    result = "YES";
  }
}

console.log(result);
