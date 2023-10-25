// object.js
console.log('object start...');
 
 let obj1 = {
	 name: 'Hong',
	 age: 20
 }
 
 // 주소 참조
let obj2 = obj1;
console.log(obj1);
obj2.age = 22
console.log(obj2);

// 복사
let obj3 = { ...obj1 }
obj3.age = 24;
console.log(obj1);

// 객체 생성시, class 활용
// javascripts 생성자 두 개 허용 x
class Member {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	
	setWeight(weight) {
		this.weight = weight;
	}
	getWeight() {
		return this.weight;
	}
	
	showInfo() {
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	}
	// 학생 정보 : 학생 번호, 학생 이름, 영어점수, 수학점수
	makeTr(student={sno, sname, engScore, mathScore}) {
		// tr>td*4
		let tr = '';
		tr += `<tr>`;
		tr += `<td>` + student.sno  + `</td>`;
		tr += `<td>` + student.sname + `</td>`;
		tr += `<td>` + student.engScore + `</td>`;
		tr += `<td>` + student.mathScore + `</td>`;
		tr += `<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>`;
		tr += `</tr>`;
		return tr;
	}
	// 메소드 함수 안에서 화살표 함수 이용해야 this정의 가능.
	makeHtml(studArr=[]) {
		// html 생성 => this.makeTr(std); reduce대신 forEach도 사용 가능.
		let html = `<table border="1"><tbody>`;

		html += studArr.reduce((acc, stud) => acc + this.makeTr(stud), ' ')

		html += `</tbody></table>`;
		// this쓰면 새로운 속성 생김
		this.html = html;
		/* 화살표 함수 이용 안할 시 
		let obj = this;
		table += studAry.reduce(function(acc, stud) {
			return acc + obj.makeTr(stud)}, '')*/
		/*
		let obj = this;
		studArr.forEach(function(student){
			tr += obj.makeTr(student);
		}) */
	}
	showPage(dom) {
		// innerHTML 속성에 html 저장
		dom.innerHTML = this.html;
	}
}


const mem1 = new Member('홍길동', 20, 156.7);
// mem1이 가지고 있는 showInfo()
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동의 몸무게는', mem1.getWeight(), 'kg 입니다.');