// for (let i = 0; i < 10; i++) {
//   console.log("안녕", i);
// }

// for (let i = 0; i < 10; i += 2) {
//   console.log(`안녕 ${i}`);
// }

// for (let i = 0; i < 10; i += 3) {
//     console.log(`안녕 ${i}`);
//   }

// for(let i = 0; i < 10 ; i = i+3){
//     console.log(i);
// }

// for(let i =1 ; 1 <= 5 ; 1++){
//     console.log(i);
// }

// for(let i = 1; i < 5 ; i++ ){
//     console.log(i + 1)
// }

// for(let i=5 ; i>0 ; i--){
//     console.log(i)
// }

// let n = 11;
// let sum = 0;
//1부터 n까지의 합

// for (let i = 1; i <= n; i++) {
//   sum = sum + 1;
// }

// console.log(sum);

//배열과 for문

// let fruits = ["사과", "배", "포도", "망고"];
// for (let i = 0; i < fruits.lenth; i++) {
//   console.log(fruits[i]);
// }

// let numsArr = [90, 50, 30, 20, 11];
// let numsSum = 0;
// for (let i = 0; i < numsArr.lengh; i++) {
//   numsSum = numsSum + numsArr[i];
// }
// console.log(numSum);

//1 ~ 20 짝수일 때의 합 구하기
// let sum2 = 0;
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     sum2 = sum2 + 1;
//   }
// }
// console.log(i);

// 10000까지의 숫자 중
// 13의 배수이면서 홀수 찾기
// prompt를 이용해서 입력받은 수까지 13의 배수면서 홀수인 숫자를 찾는 프로그램 만들기

// let num3 = Number(prompt("숫자를 입력해주세요"));
// for (let i = 1; i <= 10001; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   }
// }

//구구단 만들기
// for (let i = 2; i < 10; i++) {
//   console.log(`${i}단`);
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i}x${j}=${i * j}`);
//   }
// }

// while

let n2 = 1;
while (n2 <= 5) {
  console.log(n2);
  n2++;
}

n2 = 10;
while (n2 >= 5) {
  console.log(n2);
  n2--;
}

n2 = 10;
while (n2 >= 1) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }
  n2--;
}

//
n2 = 1;
while (true) {
  console.log("안녕");
  if (n2 === 10) {
    break;
  }
  n2++;
}

//
n2 = 0;
while (confirm("계속 진행?")) {
  n2++;
  alert(`${n2}번째 alert 창`);
}

//continue
//홀수 값의 합을 구하는 for 문
let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum2 += i;
}

console.log(sum3);
