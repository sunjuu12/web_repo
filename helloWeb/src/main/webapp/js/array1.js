// array1.js 10.27

const arr1 = [];
arr1.push(10);
arr1.push('ten');
arr1.push({name: 'Hong', age: 20});

arr1.unshift(20); // 배열의 제일 앞쪽에 추가

console.log('크기: ', arr1.length);
// arr1.length = 0; // 0으로 지정시 배열 초기화됨, 배열 크기 지정 가능

arr1.pop(); // 뒤에서 부터 하나씩 제거 // .shift() 앞에서 부터 하나씩 제거

arr1.splice(1, 2, 50, 60 ); // 추가, 삭제, 수정 (1, 2, 3) 1위치에서 2의 값을 3으로 대체하겠다

for (let ary of arr1) {
	console.log(ary);
}

