// object3.js

const member = {
	name: "홍길동",
	age: 20,
	height: 123.4,
	showInfo: function() {
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	},
	html: '',
	makeTr: function(student = { sno, sname, engScore, mathScore }) {
		let tr = '';
		tr += '<tr>';
		for (let prop in student) {
			tr += '<td>' + student[prop] + '</td>';
		}
		
		tr += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		tr += '</tr>';
		return tr;
	},
	makeHtml(studAry) {
		// html생성. => this.makeTr(std);
		let table = '<table border="1"><tbody>';
		// let obj = this;
		table += studAry.reduce((acc, stud) => {
			return acc + this.makeTr(stud)
		}, '');
		table += '</tbody></table>';
		this.html = table;
	},
	showPage(dom) {
		dom.innerHTML = this.html;
	}
}

// 객체의 속성 보고싶으면 for ..in
for (let prop in member) {
	//console.log(prop); // 멤버가 가지고 있는 속성
	// member.name / member['age'] 
	//console.log(member[prop]);// 멤버가 가지고 있는 값
	if ( (typeof member[prop]) != 'function') {
		console.log(member[prop]);
	}// 멤버가 가지고 있는 값
}

const students = [
	{ sno: '001', sname: "최해주", engScore: 80, mathScore: 85 },
	{ sno: '002', sname: "김채민", engScore: 82, mathScore: 83 },
	{ sno: '003', sname: "최다예", engScore: 84, mathScore: 88 },
]

member.makeHtml(students);
member.showPage(document.getElementById('show'));
