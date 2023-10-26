// string3.js

let today = new Date(); // Date 는 자바스크립트가 가지고 있는 내장 객체
today.getFullYear(); // 2023
today.getMonth(); // 9
today.getDate(); // 26

// 날짜 지정
today.setFullYear(2022);
today.setMonth(2); // 1월
today.setDate(1);
today.setHours(10);

console.log(today); 
console.log(today.toLocaleDateString()); // yyyy.m.d

function dateFormat(today) {
	// yyyy-MM-dd hh24:mm:ss
	// slice 이용해서 010 10월 달이 이렇게 되는 것을 고쳐보기용 
	return today.getFullYear() + "-" + "0" + (today.getMonth() + 1)
		+ "-" + "0" + today.getDate() + " " + today.getHours() 
		+ ":" + today.getMinutes() + ':' + today.getSeconds();
}
dateFormat(today);
console.log('dateFormate: ', dateFormat(today));