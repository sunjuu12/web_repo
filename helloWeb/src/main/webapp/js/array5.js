// array5.js 10.07
// sort() 222p

// 문자 배열 정렬
const arr1 = ['펭수', '라이언', '어피치', '콘', '무지']
arr1.sort(function(a, b) {
	if ( a < b ) {
		return -1;
	} else {
		return 1;
	}
});
console.log(arr1); //  배열 자체를 변경

// 숫자 배열 정렬
const arr2 = [ 4, 8, 1, 12, 23, 9]
arr2.sort(function(a, b) {
	if ( a < b) { 
		return -1; // 내림차순
	} else { 
		return 1; // 오름차순
	}
});
console.log(arr2);

const json = `
[{"id":1,"first_name":"Ernesto","email":"eassender0@bloomberg.com"},
{"id":5,"first_name":"Christy","email":"candreu4@google.cn"},
{"id":8,"first_name":"Faydra","email":"fwant7@economist.com"},
{"id":9,"first_name":"Mag","email":"mtulleth8@cnbc.com"},
{"id":10,"first_name":"Carry","email":"ccodrington9@imgur.com"}]
`;

let members = JSON.parse(json);
members.sort(function(a, b) {
	if(a.first_name < b.first_name) {
		return -1;
	} else {
		return 1; // 내림차순인지 오름차순인지요 알아보길
	}
}).reverse(); // 역순으로 정렬

console.log(members);