// console.log("실행");

// if (5 > 3) {
//   console.log("얍");
// }

// let number = Number(prompt("숫자를 입력해 주세요"));

// console.log(typeof number);

// if (number > 10) {
//   console.log("이 수는 10보다 큽니다");
// } else {
//   console.log("이 수는 10보다 작거나 같습니다");
// }

// if (number > 10) {
//   console.log("이 수는 10보다 큽니다");
// } else if (number === 10) {
//   console.log("입력한 수는 10이네요");
// } else {
//   console.log("입력한 수가 10보다 작습니다");
// }

// if (number > 100 || number < 0) {
//   console.log("입력값이 잘못되었습니다");
// } else if (number >= 90) {
//   console.log("A");
// } else if (number >= 80) {
//   console.log("B");
// } else if (number >= 70) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// let age = 15;

// if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else {
//   console.log("유아");
// }

// db
// let userId = "user01";
// let userPw = "1234qwer";

// function loginUser() {
//   let inputId = prompt("아이디를 입력해주세요");
//   let inputPw = prompt("비밀번호를 입력해주세요");

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       alert("로그인 성공");
//     } else {
//       alert("비밀번호가 틀렸습니다");
//     }
//   } else if (inputId === "") {
//     alert("아이디를 입력하지 않았습니다");
//   } else {
//     alert("아이디가 틀렸습니다");
//   }
// }

// switch

let a = 4;

switch (a) {
  case 3:
    console.log("a가 3이군요");
    break;
  case 4:
    console.log("a가 4이군요");
    break;
  case 5:
    console.log("a가 5이군요");
    break;
  default:
    console.log("a가 무슨 값인지 모르겠어요");
}

// 조건  0~100 이외는 들어오지 않는다는 가정

// console.log();
// let number = 80;

// switch (number / 100) {
//   case (number = 100):
//     console.log("a");
//     break;
//   case number >= 80:
//     console.log("b");
//     break;
//   case number >= 60:
//     console.log("c");
//     break;
//   default:
//     console.log("f");
// }

// 3항 연산자
let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}

num % 2 === 1 ? console.log("홀수") : console.log("짝수");

let now = new Date().getHours();
console.log(now);

let hours = 15;
hours >= 12 ? console.log("오후") : console.log("오전");
