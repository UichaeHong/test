/*
 자료형
 -기본
  -string
  -number
  -boolean
  -null
  -underfined

객체


*/

// 1. string
let myName = "길동";
let email = "rlfehd@naver.com";
let city = '"서울';

console.log(myName);
console.log(email);
console.log(city);

// 문자와 변수를 동사애 출력
console.log("내 이름은", myName, "이고 이메일은", email, "입니다.");
console.log("내 이름은", myName, "이고 이메일은" + email + "입니다.");

console.log(`내 이름은 ${myName}이고 이메일은 ${email}입니다`);
let rlfehd = `내 이름은 ${myName}이고 이메일은 ${email}입니다`;
console.log(rlfehd);

let number = 123;
let opecity = 0.7;
console.log(number);
console.log(opecity);

console.log(`apple` - 3);

let checked = true;
let underfined = false;

console.log(checked);
console.log(underfined);

let undef;
console.log(undef);

let fruits = [`orange`, `pineapple`, `grape`, `apple`];
let fruits2 = new Array(`orange`, `pineapple`, `grape`, `apple`);

console.log(fruits[0], fruits[1]);

let data1 = [1, `allie`, false, null, undefined];
console.log(data1[4]);

let korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];
console.log(korean[0][0]);
console.log(korean[1][1]);

let letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

//   3차원 배열
let nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. obejct

// let cat = {
//   name: "나비",
//   age: 1,
//   isCute: true,
//   mew: function () {
//     return "냐옹";
//   },
// };
// console.log(cat);
// console.log(cat, name);
// console.log(cat, age);
// console.log(cat, mew());
// // 대괄호 표기법
// // 오브젝트이름['key']
// console.log(cat["name"]);

// let cat = {
//   name ='홍의채',
//   age = 24,
// };

// console.log(cat);

// typeof

console.log(typeof "문자");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof cat);
console.log(typeof nums);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof und);

// let num = 1;
// let str = "문자";
// let bool = true;
// let undef = undefined;
// let nul = null;
// let arr = [1, 2, 3];
// let obj = {
// num: 1,
// str: "String"
// }
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof undef);
// console.log(typeof nul);
// console.log(typeof arr);

// console.log(`${typeof 1} isn't ${typeof'1'} data t`)
// console.log('typeof 를 array이나  null에 사용하면')

let mathScore = prompt("수학 점수를 입력하세요"); //80
let engScore = prompt("영어 점수를 입력하세요"); //90

// '8090'/2
let avg = (mathScore + engScore) / 2;
console.log(avg);

// //
// let num = 123;
// num = String(num);
// console.log(typeof num);
// //
// num = Number(num);
// console.log(typeof num);
// console.log(Number("abcdefg"));

// let str1 = true;
// let str2 = 123;
// let str3 = null;

// console.log(typeof String(str1));
// console.log(typeof String(str2));
// console.log(typeof String(str3));
// console.log(typeof str1);
// console.log(typeof str1,toString());

// let n1 = true;
// let n2 = false;
// let n3 = "123.9";

// console.log(typeof n1);
// console.log(typeof n2);
// console.log(typeof n3);

// console.log(typeof Number(n1));
// console.log(typeof Number(n2));
// console.log(typeof Number(n3));

// console.log(Number(n1));
// console.log(Number(n2));
// console.log(Number(n3));
// console.log(parseInt(n3));
