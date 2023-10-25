// function5.js
let sum1 = 0;
[10, 20, 30].forEach(function(num) {
	sum1 += num; // consumer타입 : 매개값을 받아 소진 후 반환값은 없음
})
console.log('forEach: ', sum1);

sum1 = 0;
// acc : 누적값 return해주는 값의 그 다음 순번의 초기값으로 이용
sum1 = [10, 20, 30].reduce(function(acc, item, idx, ary) { // 받아온 매개값 반환할 수 있음
	// console.log(acc, item, idx);
	// function 타입 : 매개값을 소진, 반환값을 생성
	return acc + item; // acc + item = 누적값
}, 0) // 0은 초기값. 초기값이 없으면 첫번째 보여지는 값을 초기값으로 사용함.
console.log('reduce: ', sum1);

function sum(a = 0, b = 0, ...args) { // parameters(매개변수)
	console.log(args); 
	// reduce 사용
	// return a + b+ args.reduce(function(acc, item) {return acc+item})
	// return a + b+ args.reduce((acc, item) => acc+item); // 간단한 표현식(화살표 함수)
	// forEach 사용
	let result = 0;
	result = a + b;
	// args.forEach(function(num) {result += num});
	args.forEach(num => result += num); // 화살표 함수 사용
	return result;
}

console.log(sum(10, 20, 30, 40, 50, 60)); // arguments(매개값)

// reduce 연습
// 두 수 중 큰 값 저장
const numAry = [4, 2, 6, 9, 1, 7];
let max = 0;
max = numAry.reduce((acc, item) => acc > item ? acc : item);
console.log('최대값: ', max);