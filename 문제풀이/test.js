const fs = require("fs");
const readFileSyncAddress = "test.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().split("\n");

const str = input[0];
const word = input[1];

console.log(str.indexOf(word));
