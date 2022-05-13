// 문제 11
let s = 0;
for (let i = 1; i < 101; i++) {
  s += i;
}

console.log(s);

// 문제 12

class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  // 메서드
  attack() {
    return console.log("파이어볼");
  }
}
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 문제 13 ❗️
// ❗️입력 받는 방븝 -> propmpt
const planets = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];
// const n = prompt("몇 번째 행성인가요?");
const n = 2;
console.log(planets[n - 1]);

// 문제 14

// 입력 n
// const nn = propmpt("숫자 입력: ");
const nn = 10;
if (nn != null) {
  if (nn % 3 == 0) {
    console.log("짝");
  } else {
    console.log(nn);
  }
}

// 문제 15

const name = "김다정";
// const name = propmpt("입력: ")
console.log(`안녕하세요. 저는  ${name}입니다.`);

// 문제 16

let str = "거꾸로";
let reverseStr = str.split("").reverse().join("");
console.log(str);
console.log(reverseStr);

// 문제 17

const height = 151;
// const health = propmpt("입력:");
if (height != null) {
  if (height > 149) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 문제 18 ❗️
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 단, 소숫점 자리는 모두 버립니다.
const fs = require("fs");
const readFileSyncAddress = "test.txt";
const input = fs.readFileSync(readFileSyncAddress).toString().split(" ");

let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(input[i]);
}
console.log(Math.floor(sum / 3));

// 문제 19

// 문제 20
