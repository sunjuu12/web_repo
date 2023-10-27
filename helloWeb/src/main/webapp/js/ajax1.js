// ajax1.js 10.27
// AJAX(Asynchronuous Javascript And Xml) : 비동기 통신
// XML = 마크업 언어

import {table} from './ajaxMoudule.js';

// 비동기 vs 동기
	// 비동기 : 먼저 끝나는 것부터 만듦
	
	// 비동기 : 순차적으로 만듦 ->  지연 시간이 생김
let friends = [];
/*
// 동기 : 입력한 순서대로 저정 (작업 시간에 상관 x)
friends.push('홍길동');
friends.push('김길동');
friends.push('최길동');

setTimeout(function() { // 첫번째 매개값은 실행할 함수, 두번째 매개값은 지연 타임
	friends.push('홍길동');
		setTimeout(function() {
			friends.push('김길동');
				setTimeout(function() {
					friends.push('최길동');
		}, 2000);
	}, 500);
}, 1000);
*/
// 비동기 : 처리되는 결과가 빠른 순서대로 저장 | 대표적인 함수 : setTimeout(), XMLHttpRequest()
setTimeout(function() { 
	friends.push('홍길동');
}, 1000);
	
setTimeout(function() {
	friends.push('김길동');
}, 500);

setTimeout(function() {
	friends.push('최길동');
}, 2000);

console.log(friends);

// --------------------------------------------------------		
// 보류

// newMember 값을 활용해서 tbody = "list" 추가 해보시오.
let newMember = {mid: "M009", pass: "9999", name: "민식이", phone: "010-9999-9999"};

// 1) ajax 실행
let xhtp = new XMLHttpRequest(); // 객체
// open이라는 메소드는 서버상에 있는 페이지를 요청하는 기능 , 요청방식은 'get'과 'post'가 있음
xhtp.open('get', '../MemberListServ2');
xhtp.send();
// onload : xhtp에 정상적이 담겨지면 함수 실행 , ajax 실행
xhtp.onload = loadJson; // 이벤트가 발생할 때 실행하려고 () 없음

function loadJson() {
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText); // json문자열 => 오브젝트(객체)
	console.log(result);
	
	// 실행시키는 것 구현하기요
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	for (let record of result) {
		let obj = {
			mid: record.mid,
			pass: record.pass,
			name: record.name,
			phone: record.phone
		}
		dataAry.push(obj)
	}
	let result1 = table.makeTable(titles, dataAry);
	console.log(result1);
	document.getElementById('show').innerHTML = result1;
	/*
	let tr = {
		mid: newMember.mid,
		pass: newMember.pass,
		name: newMember.name,
		phone: newMember.phone
	}*/
	document.getElementById('list').innerHTML += newMember;
}

function loadXML() {
	console.log(xhtp.responseXML);
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record')
	console.log(records);
	// console.log(records[0].children[0].innerHTML);
	
	let titles = ["회원번호", "비밀번호", "이름", "연락처"];
	let dataAry = [];
	for(let record of records) {
		let obj = {
			mid: record.children[0].textContent, // mid
		 	pass: record.children[1].textContent, // pass
		 	name: record.children[2].textContent, // name
			phone: record.children[3].textContent // phone
		}
		dataAry.push(obj)
	}
	let result = table.makeTable(titles, dataAry);
	console.log(result);
	document.getElementById('show').innerHTML = result;
	
	// 2) 
	// => newMember 값 활용해 값 추가
	// ajax 실행하고 나서 데이터 추가하는 기능이 실행
	let tr = `<tr><td>` + newMember.mid + 
		`</td><td>` + newMember.pass + 
		`</td><td>` + newMember.name + 
		`</td><td>` + newMember.phone + `</td></tr>`;
	document.getElementById('list').innerHTML += tr;
} // end onload