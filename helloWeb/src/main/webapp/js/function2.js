// function2
console.log('function2.js');

const member = {
	name: "홍길동",
	age: 18,
	height: 178.9,
	// 객체 안에 정의된 함수 = 메소드
	showInfo: function() {
		//console.log(`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`);
		return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`);
	}
}
const member1 = {
	name: "김길동",
	age: 19,
	height: 179.9,
	// 객체 안에 정의된 함수 = 메소드
	showInfo: function() {
		//console.log(`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`);
		return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`);
	}
}
const member2 = {
	name: "박길동",
	age: 20,
	height: 180.9,
	// 객체 안에 정의된 함수 = 메소드
	showInfo: function() {
		//console.log(`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`);
		return (`이름은 ${this.name}이고 나이는 ${this.age}세 입니다.`);
	}
}
const members = [member, member1, member2]
// member.showInfo();
// 요소를 찾아오는데 아이디가 show 값에 해당되는 것을 가지고 옴
let show = document.getElementById('show'); //메소드가 리턴해주는 값이 dom
// DOM : Document Object Model
//console.log(member); // table > thead, tbody > tr > td
let str = ""; //table>tbody>(tr>td*4)*3
// 코드 작성
str += `<table border = '1'>`;
str += `<thead>`;
str += `<tbody>`;
members.forEach(function(item) {
	str += makeTr(item)
})
str += '</tbody>';
str += '</thead>';
str += '</table>';
show.innerHTML = str;
console.log(str);
// 값이 안 들어오면 member는 object 타입
function makeTr(member) {
	let html = '';
	html += '<tr>';
	html += '<td>' + member.name + '</td>';
	html += '<td>' + member.age + '</td>';
	html += '<td>' + member.height + '</td>';
	html += '<td>' + member.showInfo() + '</td>';
	html += '</tr>';

	return html;
}
// console.log(makeTr(member));