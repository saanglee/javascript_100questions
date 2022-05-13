const fs = require("fs");
const readFileSyncAddress = "test.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().split("\n");

const name = input[0].split(" ");
const score = input[1].split(" ");

const obj = {};

for (let i = 0; i < name.length; i++) {
  obj[name[i]] = parseInt(score[i]);
}
console.log(obj);
