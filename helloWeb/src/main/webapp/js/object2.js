// object2.js
const students = [
	{sno:'001', sname:"최해주", engScore: 80, mathScore:85},
	{sno:'002', sname:"김해주", engScore: 86, mathScore:95},
	{sno:'003', sname:"이해주", engScore: 85, mathScore:75}
]

// const member = new Member('홍길동', 20, 156.7)
// member.showPage(document.getElementById('show')); // 보여질 곳
// member.makeHTML(students); // makeTr 활용

const member = new Member();
member.makeHtml(students);
member.showPage(document.getElementById('show'));