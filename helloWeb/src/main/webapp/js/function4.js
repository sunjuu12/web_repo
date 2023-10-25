//function4.js

// 생성자 함수  Member
function Member(name, age, height) {
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function() {
		return `이름은 ${this.name}이고 나이는 ${this.age}입니다.`;
	}
}// end Member
// makeTr 함수
function makeTr(member) {
	let html = "";
	html += `<tr>`;
	html += `<td>` + member.name + `</td>`;
	html += `<td>` + member.age + `</td>`;
	html += `<td>` + member.height + `</td>`;
	html += `<td>` + member.showInfo() + `</td>`;
	html += `<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>`;
	html += `</tr>`
	return html;
} // end makeTr
	
// dom 요소이기만하면 onclick 다 붙일 수 있음
// 이벤트 핸들러 = 이벤트가 시행되었을 때 시행되는 것, 매개값 무조건 받음
document.getElementById('saveBtn').onclick = function(e) {
	console.log(e.target);
	
	let name = document.getElementById('name').value;
	let age = document.getElementById('age').value;
	let height = document.getElementById('height').value;
	
	const member = new Member(name, age, height);
	str = makeTr(member);
	document.getElementById('list').innerHTML += str;
		if (member.name == null) {
			alert("값을 입력하세요.");
		}	
	
		//입력 초기화
	document.getElementById('name').value = "";	
	document.getElementById('age').value = "";
	document.getElementById('height').value = "";
	document.getElementById('name').focus();
}
	// makeTr(member); // <tr> ... </tr>
		// 값을 알고 있을 때 인스턴스 함수 만드려면 생성자 만들었음
	// function Member() , makTr(member)
	// makeTr을 쓸려면 Member()안에 객체가 무조건 있어야 함
