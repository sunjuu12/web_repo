// fetch1.js 10.31

import {table} from './ajaxMoudule.js';

fetch('../MemberListServ2') // json 문자열 넘겨줌
.then((resolve) => {
	console.log(resolve);
	return resolve.json(); // json -> javascript의 객체 타입으로 넘겨주는 함수
})
.then((result) => { // result = resolve.json()
	console.log(result);
	 let titles = ["회원번호", "비밀번호", "이름", "전화번호"];
	 let dataAry = result; // 가져온 json 값 
	 
	 result = table.makeTable(titles, dataAry);
     document.getElementById("show").innerHTML = result;  

})
.catch((err) => {
	console.log('error => ', err);
})