// 문자열 관련 함수 length
// toUpperCase(), toLowerCase
// trim, indexOf, slice, replace, replaceAll, repeat

let str1 = "strawberry Moon";
let str2 = "     strawberry Moon          ";
//문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

//sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
console.log(str1.length);
console.log(str2.length);

// 매개변수가 없는 함수
let msg = "Happy Birthday!";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(str2.trim());
console.log(str2.trim(), length);

// let msg2 = "    hello world!!    ";
// console.log(msg2.trim(), toUpperCase());

//매개변수가 있는 함수
let fruit = "applemango";
console.log(fruit.indexOf("a"));
console.log(fruit.indexOf("apple"));
console.log(fruit.indexOf("x"));

console.log(fruit.charAt(3)); // 1

console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3));

//console.log(fruit);

let msg3 = "wow! It is so amazing!!";
console.log(msg3.replace("wow", "Hey"));
console.log(msg3.replaceAll("o", "a"));
console.log(msg3.replace("o", "a"));

let date = "23.03.10";
console.log(date.split("."));

console.log("hi".repeat(5));

// =================================배열==========================
//push, pop, unshift, shift -> 원본 배열 변화
// indexOf, join, reverse

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "rebbit", "puupy", "hamster"];
arr1[5] = 6; //끝의 값을 알고 있어야 한다
console.log(arr1);
arr1[8] = 6;
console.log(arr1);

arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);

arr2.unshift("cat");
console.log(arr2.shift());
console.log(arr2);

// 배열 .includes(요소) 요소가 있는지 없는지 검사
console.log(arr2.includes("quakka"));

console.log(arr2.indexOf("quakka"));
// reverse
console.log(arr1.reverse()); //5,4,3,2,1
console.log(arr1); //기존의 배열을 변경시킴

// join
str1 = arr1.join("");
console.log(str1);

// 배열에서의 for
//기본 for 문
// forEach 함수 > 매개변수로 익명함수가 들어감

let arr3 = [1, 2, 3, 4, 6];
let alphabets = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
  // console.log(alphabets[i]);
}

for (let number of arr3) {
  console.log(number);
}

for (let number of alphabets) {
  console.log(alphabets);
}

arr3.forEach(function (data, index, arr) {
  console.log(data, index, arr);
});

arr3.forEach((data, index) => {
  console.log(data, index);
});

arr3.forEach(function (data) {
  console.log(data);
});

// filter
aar3 = arr3.filter(function (num) {
  return num > 3;
});
console.log(arr3);

let six = arr2.filter(function (en) {
  return en.length >= 6;
});

console.log(six);

// map, find
// map - 배열내의 모든 원소에 대해 연산한 결과를 모아서 새로운 배열

let arr4 = [1, 2, 3].map(function (en) {
  return en * 3;
});

console.log(arr4);

//

arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((el) => el * 10);
console.log(arr4);

// arr4 = [10,20,30,40,50]
//find 특정 조건을 만족하는 첫번째 요소 반환
let findResult = arr4.find((num) => num >= 30);
console.log(findResult);

// 실습1
arr1 = [];
for (let i = 1; i < 100; i++) {
  arr1.push(i + 1);
}
console.log(arr1);

//forOf
let sum1 = 0;
for (let number of arr1) {
  sum1 = sum1 + number;
}
console.log(sum1);

//forEach
let sum2 = 0;
arr1.forEach((number) => {
  sum2 = sum2 + number;
});

// 실습2
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = [];
let diff = [];
//for 문 이용
for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}

console.log(same);
console.log(diff);

//filter 이용
let same2 = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff2 = fruits1.filter((fruit) => !fruits2.includes(fruit));

console.log(same2);
console.log(diff2);
