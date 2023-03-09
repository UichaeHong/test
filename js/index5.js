console.log;
("연결");

function helloworld1() {
  console.log("helloworld1");
}

helloworld1();

function helloworld2() {
  return "helloworld2";
}

helloworld2();
console.log(helloworld2());

function add(num1, num2) {
  console.log("안녕");
  return num1 + num2;
}

function add2(num1, num2) {
  console.log(num1 + num2);
}

let result = add(5, 5);
let result2 = add2(5, 5);
console.log(result, result2);

// 함수 표현식, 선언 전 호출 불가능

let helloworld3 = function () {
  console.log("helloworld3");
};

// 화살표 함수

let helloworld4 = () => {
  console.log("helloworld4");
};

helloworld4();

// 매개 변수 있는 버전
function sayHello1(text) {
  return text;
}

console.log(sayHello1("안녕하세요"));

function sayHello2(text, name) {
  return `${text} ${name}`;
}

console.log(sayHello2("h1", "의채"));

//실습문제 1
function multifly(num1, num2) {
  return num1 * num2;
}

console.log(multifly(3, 7));
console.log(multifly(2, 2));

//실습문제 2
function square(num1) {
  console.log(num1 ** 2);
}

square(5);
