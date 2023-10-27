// array2.js 10.27
// MOCK_DATA.json 파일의 데이터 활용
// ``(백태그)활용시 모드 문자열로 표시할 수 있음, json은 문자열을 의미함
const json = `
[{"id":1,"first_name":"Ernesto","email":"eassender0@bloomberg.com"},
{"id":2,"first_name":"Fiona","email":"fbritto1@walmart.com"},
{"id":3,"first_name":"Midge","email":"mgilliat2@google.nl"},
{"id":4,"first_name":"Inga","email":"ibarrack3@webeden.co.uk"},
{"id":5,"first_name":"Christy","email":"candreu4@google.cn"},
{"id":6,"first_name":"Brucie","email":"bgritsaev5@hexun.com"},
{"id":7,"first_name":"Cornelius","email":"cminguet6@wunderground.com"},
{"id":8,"first_name":"Faydra","email":"fwant7@economist.com"},
{"id":9,"first_name":"Mag","email":"mtulleth8@cnbc.com"},
{"id":10,"first_name":"Carry","email":"ccodrington9@imgur.com"}]
`; //json -> object JSON.parse()사용 json의 문자열을 javascript의 객체 타입으로 바꿈
// 필드값, 문자열 ""로 묶어줘야하고 다음 데이터입력하기 위해 ,입력 - 마지막엔 있으면 안 됨
let members = JSON.parse(json);
console.log(members);

let delMember = "Inga";
let yourinfo = {name: "Hong", email: "hong@email.com"}

// splice 활용 <삭제>
members.forEach((member, idx) => {
	if (member.first_name == delMember) {
		members.splice(idx, 1, {id: member.id, first_name: yourinfo.name, email: yourinfo.email}); // 삭제하고 다른 정보 입력
	}
})


let inpVal = prompt("이름과 이메일을 입력하세요 예) 홍길동, hong@email.com");
console.log(inpVal);
let result = inpVal.split(',');
let nid = members[members.length -1].id +1;
let newMember = { id: nid, first_name: result[0], email: result[1]}
//members.push({id: 11, first_name: result[0], email: result[1]});
members.push(newMember);
console.log(members);
//members.push(inpVal);

// 2차원 배열 198p
const dupAry = [["라이언", 5], ["어피치, 3"], ["콘", 2], ["무지", 4]]
console.log(dupAry);
console.table(dupAry);

// 배열의 합계 203p -> reduce() 사용

 