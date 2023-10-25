//function3.js

function Member(name, age, height) {
	console.log(this);
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function() {
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	}
}
var myName = 'Hong';
// new Member 생성 시  this.name = name
const member = new Member('홍길동', 20, 123.4);
console.log(member.showInfo());

// 매개값
const members = [
	new Member('홍길동', 18, 123.3),
	new Member('김길동', 19, 124.3),
	new Member('박길동', 20, 125.3)
]
console.log(members);

// 함수 : table 생성 //memberAray 는 매개 변수
function makeTable(memberAry=[]){
	
	let str = '';
	str += `<table border = "1">`;
	str += `<thead>`;
	str += `<tbody>`;
	memberAry.forEach(function(i){
		str += makeTr(i);
	})
	str += `</tbody>`;
	str += `</thead>`;
	str += `</table>`;
	
	document.getElementById('show').innerHTML = str;
	
	function makeTr(members) {
		let html = '';
		html += `<tr>`;
		html += `<td>` + members.name +`</td>`;
		html += `<td>` + members.age +`</td>`;
		html += `<td>` + members.height +`</td>`;
		html += `<td>` + members.showInfo() +`</td>`;
		html += `</tr>`;
		return html;
	} // end makeTr
	
} // end makeTable
makeTable(members);
