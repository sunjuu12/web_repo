// dom2.js 10.31

const fruits = [
	{name: "사과", price: 1000, famer: '홍길동'},
	{name: "복숭아", price: 1500, famer: '김민서'},
	{name: "포도", price: 2000, famer: '최말숙'},
	{name: "수박", price: 3000, famer: '김선중'} 
]

// #show>table>tbody> (tr>td:사과+td:1000)+(tr>td:복숭아+td:1500)
//					 +(tr>td:포도+td:2000)+(tr>td:수박+td:3000)

let table = document.createElement('table');
//let thead = document.createElement('thead');
//let title = ['과일', '가격', '생산자']
//thead.innerHTML = title;
//table.appendChild(thead);
let tbody = document.createElement('tbody');
table.setAttribute('border', '1'); // 속성 추가 <table border = '1'>

fruits.forEach(fruit => {
	let tr = document.createElement('tr');
	// 배열에 새로운 값 오브젝트가 추가된 경우
	for (let prop in fruit) {
		let td1 = document.createElement('td');
		td1.innerHTML = fruit[prop];
		tr.appendChild(td1);
	}
	/*
	let td1 = document.createElement('td');
	td1.innerHTML = fruit.name;
	tr.appendChild(td1);
	let td2 = document.createElement('td');
	td2.innerHTML = fruit.price;
	tr.appendChild(td2);
	*/
	tbody.appendChild(tr); // tbody에 tr을 하위 요소로 등록
})
table.appendChild(tbody); // table에 tbody를 하위 요소로 등록
document.getElementById("show").appendChild(table);

// ---------------------------------