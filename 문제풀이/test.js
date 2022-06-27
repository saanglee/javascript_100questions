const fs = require('fs');
const readFileSyncAddress = 'test.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().split(' ');

// const scores = input.map((item) => {
//   parseInt(n, 10);
// }); 아래 +item이 같은 코드

// number타입으로 변환
const scores = input.map((item) => +item);

// 정렬
scores.sort((a, b) => a - b);
console.log(`scores: ${scores}`);

let count = 0; // 중복값 까지 세는 역할
let arr = []; // 3등 까지 넣을 역할

while (arr.length < 3) {
  // arr에 3등까지 들어오면 반복 종료
  let n = scores.pop(); // scores 맨 뒤 요소부터 pop해서 n에 할당
  console.log(`n: ${n}`);

  if (!arr.includes(n)) {
    // arr의 요소 중 n이 없으면
    arr.push(n); // arr 에 n값 넣음
    console.log(`arr: ${arr}`);
  }
  count += 1; // 반복문  1번 돌 때 마다 +1 (3등까지 다 차면 종료)
  console.log(`count: ${count}`);
}
