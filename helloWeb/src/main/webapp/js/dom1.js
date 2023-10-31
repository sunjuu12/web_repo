// dom.js 10.31

const fruits = ['수박', '사과', '복숭아', '포도']

// #show>ul>li: 수박 ...
// createElement, appendChild, innerHTML 속성 사용해서 만들어보기요

// ul 생성
let ul = document.createElement('ul');
// li 생성
fruits.forEach(fruit => {
	let li = document.createElement('li'); // <li></li>
	li.innerHTML = fruit; // <li>수박</li><li>수박</li>...
	console.log(li); 
	ul.appendChild(li); // <ul><li>수박</li><li>사과</li> ... </ul>
})
document.getElementById("show").appendChild(ul);

// ---------------------------------------------


