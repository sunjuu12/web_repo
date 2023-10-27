// array4.js 10.27

// find() 207p : 만족하는 첫번째ㄴㄴ 값 배열에 담음
const json = `
[{"id":1,"first_name":"Ernesto","email":"eassender0@bloomberg.com"},
{"id":5,"first_name":"Christy","email":"candreu4@google.cn"},
{"id":8,"first_name":"Faydra","email":"fwant7@economist.com"},
{"id":9,"first_name":"Mag","email":"mtulleth8@cnbc.com"},
{"id":10,"first_name":"Carry","email":"ccodrington9@imgur.com"}]
`;

let members = JSON.parse(json);
console.log(members);

let result = members.find(function(item, idx, ary) {
	if (item.id > 5) {
		return true;
	} 
	return false;
	// return itme.id > 5;
})

// filter() : 만족하는 모든 값 배열에 담음
result = members.filter(function(item, idx, ary) {
	return item.id > 5;
})

result = members.filter((item, idx) => {
	return idx >= 1 && idx < 3; // true 값을 반환
})

// reduce()
result = members.reduce((acc, item, idx) => {
	if ( idx >= 1 && idx < 3) {
		acc.push(item);
	}
	return acc;
}, [])
console.log(result);

// some, every => true / false 반환
// some은 하나만 만족해도 true | every는 모두 만족해야 true, false를 만나면 종료
result = members.every((member) => {
	console.log(member);
	return member.first_name.length > 5;
})

// map : 매핑 A에 새로운 데이터 추가하여 B로 변환 218p
// 배열에 새로운 데이터를 추가하여 반환 값으로 배열 생성
result = members.map(member => {
	let obj = {id: member.id, name: member.first_name, email: member.email, grade: 'C'}
	return obj;
})
console.log(result);
